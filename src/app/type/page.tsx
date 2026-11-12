import { PageWrapper } from '@/components/layout/PageWrapper';
import { Text } from '@/components/ui/Text';
import { NavItem } from '@/components/ui/NavItem';
import { FooterLink } from '@/components/ui/FooterLink';
import { TypeSpecimen } from '@/components/type/TypeSpecimen';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Type',
  description: 'Every type style on jou.design — size, line height, and letter spacing.',
};

const PARAGRAPH =
  'Product Designer making complex B2B products feel simple. Previously at nTop and KoiStudios. Now I am designing the data layer for financial services at Rengo AI.';

function Group({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="pt-20">
      <div className="flex flex-col gap-1 border-b-dot pb-4">
        <Text as="h2" variant="label">{title}</Text>
        {note && <Text variant="body-sm" className="text-text-secondary">{note}</Text>}
      </div>
      {children}
    </section>
  );
}

export default function TypePage() {
  return (
    <PageWrapper className="bg-surface px-page pt-10">
      <div className="flex flex-col gap-2">
        <Text as="h1" variant="heading1">Type</Text>
        <Text className="max-w-[560px] text-text-secondary">
          Every type style used on the site. Samples on the left render with the real
          components; specs on the right are read from the browser, so they always match
          the CSS.
        </Text>
      </div>

      <Group title="Display">
        <TypeSpecimen name="Display 1" token="display1 · --text-display1" usage="Largest display size. Not currently used on a page.">
          <Text as="p" variant="display1">Feel simple</Text>
        </TypeSpecimen>
        <TypeSpecimen name="Display 2" token="display2 · --text-display2" usage="Hero name (desktop), case study titles.">
          <Text as="p" variant="display2">Jou An Chen</Text>
        </TypeSpecimen>
        <TypeSpecimen name="Case study title" token="display2 + leading-[1.05]" usage="Title at the top of each case study.">
          <Text as="p" variant="display2" className="leading-[1.05]">
            BuoyHealth: Streamline patient management
          </Text>
        </TypeSpecimen>
      </Group>

      <Group title="Headers">
        <TypeSpecimen name="Heading 1" token="heading1 · --text-heading1" usage="Page titles (Styles, Type).">
          <Text as="p" variant="heading1">Styles & Components</Text>
        </TypeSpecimen>
        <TypeSpecimen name="Heading 2" token="heading2 · --text-heading2" usage="Section headings.">
          <Text as="p" variant="heading2">Problems & Goals</Text>
        </TypeSpecimen>
        <TypeSpecimen name="Heading 3" token="heading3 · --text-heading3" usage="Case study subheadings, project card titles (desktop), password gate.">
          <Text as="p" variant="heading3">What we actually discovered</Text>
        </TypeSpecimen>
        <TypeSpecimen name="Heading 4" token="heading4 · --text-heading4" usage="Small headings.">
          <Text as="p" variant="heading4">Context menu systems</Text>
        </TypeSpecimen>
      </Group>

      <Group title="Paragraph">
        <TypeSpecimen name="Body LG" token="body-lg · --text-body-lg" usage="Playground intro heading.">
          <Text variant="body-lg" className="max-w-[680px]">What I made outside of work</Text>
        </TypeSpecimen>
        <TypeSpecimen name="Body Case" token="body-case · --text-body-case" usage="Case study paragraphs and lists.">
          <Text variant="body-lg" className="max-w-[680px] text-body-case leading-[var(--leading-body-lg)]">
            {PARAGRAPH}
          </Text>
        </TypeSpecimen>
        <TypeSpecimen name="Body" token="body · --text-body" usage="Default paragraph: home intro, project card summaries, playground descriptions, case study section labels.">
          <Text variant="body" className="max-w-[420px]">{PARAGRAPH}</Text>
        </TypeSpecimen>
        <TypeSpecimen name="Body MD" token="body-md · --text-body" usage="Medium-weight body: nav logo, project year (desktop).">
          <Text variant="body-md">jou.design</Text>
        </TypeSpecimen>
        <TypeSpecimen name="Body SM" token="body-sm · --text-body-sm" usage="Secondary copy: sidebar role, inputs, buttons.">
          <Text variant="body-sm" className="max-w-[420px]">{PARAGRAPH}</Text>
        </TypeSpecimen>
      </Group>

      <Group title="Captions & labels">
        <TypeSpecimen name="Label" token="label · --text-label" usage="Field labels (Company, Goals), playground “circa” caption.">
          <Text variant="label">Company</Text>
        </TypeSpecimen>
        <TypeSpecimen name="Nav item" token="label + uppercase + --tracking-label" usage="Top navigation buttons.">
          <NavItem label="playground" href="/type" state="unselected" />
        </TypeSpecimen>
        <TypeSpecimen name="Footer link" token="label + uppercase + medium" usage="Resume, LinkedIn, Twitter links in the footer.">
          <FooterLink label="linkedin" href="https://www.linkedin.com/in/jouanchen24/" />
        </TypeSpecimen>
        <TypeSpecimen name="Footer timestamp" token="label + uppercase" usage="“Site updated” line in the footer.">
          <span className="font-sans text-label uppercase whitespace-nowrap">Site updated - 9/28/2026 12:41 AM EDT</span>
        </TypeSpecimen>
        <TypeSpecimen name="Playground card title" token="body + leading-[1.1] + tracking-[-0.01em]" usage="Title under each playground item.">
          <Text variant="body" className="leading-[1.1] tracking-[-0.01em]">Tree and time</Text>
        </TypeSpecimen>
        <TypeSpecimen name="Playground card year" token="body-sm → text-label + leading-[1.1]" usage="Year under each playground item.">
          <Text variant="body-sm" className="text-label leading-[1.1] tracking-[-0.01em] text-text-secondary">2025</Text>
        </TypeSpecimen>
      </Group>

      <Group title="Responsive" note="These styles change size at 768px. Resize the window and the specs update.">
        <TypeSpecimen name="Hero name" token="heading3 → md:display2" usage="Name at the top of the home page.">
          <Text
            as="p"
            variant="display2"
            className="text-heading3 leading-[var(--leading-heading)] tracking-[var(--tracking-heading-sm)] md:text-display2"
          >
            Jou An Chen
          </Text>
        </TypeSpecimen>
        <TypeSpecimen name="Project card title" token="body-lg → md:heading3" usage="Project titles on the home page.">
          <Text as="p" variant="heading3" className="text-body-lg leading-[var(--leading-heading)] md:text-heading3">
            Civic Atlas
          </Text>
        </TypeSpecimen>
        <TypeSpecimen name="Project card year" token="label → md:body" usage="Year beside each project card.">
          <Text as="span" variant="body-md" className="shrink-0 text-label leading-[var(--leading-heading)] md:text-body">
            2025
          </Text>
        </TypeSpecimen>
      </Group>
    </PageWrapper>
  );
}
