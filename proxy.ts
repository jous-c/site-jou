import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/work/:slug+'],
};

// Protection status is determined in the page layer (lib/notion.ts).
// Proxy enforces the unlock cookie gate: missing or invalid cookie on a
// /work/[slug] route adds ?locked=true so the page renders PasswordGate.
// The page itself fetches project status and skips the gate for non-protected projects.
export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const slug = pathname.split('/work/')[1]?.split('/')[0];

  if (!slug) return NextResponse.next();

  // Avoid redirect loop
  if (request.nextUrl.searchParams.has('locked')) return NextResponse.next();

  const cookie = request.cookies.get(`unlocked-${slug}`);

  // No cookie or invalid cookie value → signal the page to show the gate
  if (!cookie || cookie.value !== slug) {
    const url = request.nextUrl.clone();
    url.searchParams.set('locked', 'true');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
