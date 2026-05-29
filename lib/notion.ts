import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import type { Project } from './types';

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

function mapNotionPageToProject(page: Record<string, unknown>): Project {
  const props = (page as { properties: Record<string, Record<string, unknown>> }).properties;
  const id = (page as { id: string }).id;

  const titleProp = props['Title'] ?? props['Name'];
  const title =
    Array.isArray((titleProp as Record<string, unknown>)?.['title'])
      ? ((titleProp as { title: Array<{ plain_text: string }> }).title[0]?.plain_text ?? '')
      : '';

  const slugProp = props['Slug'];
  const slug =
    Array.isArray((slugProp as Record<string, unknown>)?.['rich_text'])
      ? ((slugProp as { rich_text: Array<{ plain_text: string }> }).rich_text[0]?.plain_text ?? '')
      : '';

  const summaryProp = props['Summary'];
  const summary =
    Array.isArray((summaryProp as Record<string, unknown>)?.['rich_text'])
      ? ((summaryProp as { rich_text: Array<{ plain_text: string }> }).rich_text[0]?.plain_text ?? '')
      : '';

  const yearProp = props['Year'];
  const year =
    typeof (yearProp as Record<string, unknown>)?.['number'] === 'number'
      ? (yearProp as { number: number }).number
      : new Date().getFullYear();

  const tagsProp = props['Tags'];
  const tags =
    Array.isArray((tagsProp as Record<string, unknown>)?.['multi_select'])
      ? (tagsProp as { multi_select: Array<{ name: string }> }).multi_select.map((t) => t.name)
      : [];

  const statusProp = props['Status'];
  const statusValue =
    typeof (statusProp as Record<string, unknown>)?.['select'] === 'object' &&
    (statusProp as Record<string, unknown>)?.['select'] !== null
      ? ((statusProp as { select: { name: string } }).select.name.toLowerCase() as Project['status'])
      : 'draft';

  const thumbnailProp = props['Thumbnail'];
  const thumbnail =
    typeof (thumbnailProp as Record<string, unknown>)?.['url'] === 'string'
      ? (thumbnailProp as { url: string }).url
      : null;

  const sortOrderProp = props['SortOrder'];
  const sortOrder =
    typeof (sortOrderProp as Record<string, unknown>)?.['number'] === 'number'
      ? (sortOrderProp as { number: number }).number
      : 0;

  return {
    id,
    slug,
    title,
    summary,
    year,
    tags,
    status: statusValue,
    thumbnail,
    sortOrder,
  };
}

export async function getProjects(): Promise<Project[]> {
  if (!process.env.NOTION_SECRET || !process.env.NOTION_DATABASE_ID) {
    return [];
  }

  try {
    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_DATABASE_ID,
      filter: {
        or: [
          { property: 'Status', select: { equals: 'published' } },
          { property: 'Status', select: { equals: 'protected' } },
        ],
      },
    });

    return response.results
      .map((page) => mapNotionPageToProject(page as Record<string, unknown>))
      .sort((a, b) => a.sortOrder - b.sortOrder);
  } catch {
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!process.env.NOTION_SECRET || !process.env.NOTION_DATABASE_ID) {
    return null;
  }

  try {
    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: { equals: slug },
      },
    });

    if (response.results.length === 0) return null;

    return mapNotionPageToProject(response.results[0] as Record<string, unknown>);
  } catch {
    return null;
  }
}

export async function getProjectContent(pageId: string): Promise<string> {
  if (!process.env.NOTION_SECRET) {
    return '';
  }

  try {
    const mdBlocks = await n2m.pageToMarkdown(pageId);
    return n2m.toMarkdownString(mdBlocks).parent;
  } catch {
    return '';
  }
}
