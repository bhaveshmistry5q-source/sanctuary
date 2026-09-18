import { NextRequest, NextResponse } from 'next/server';

// Routes that don't require the sanctuary_auth cookie.
// /celebrate is a shareable surprise link (celebrate/[code]) sent to someone
// outside the login system — it must stay public or the whole feature breaks.
const PUBLIC_PATHS = ['/login', '/celebrate'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublic = PUBLIC_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
  if (isPublic) {
    return NextResponse.next();
  }

  const isAuthed = request.cookies.get('sanctuary_auth')?.value === 'true';

  if (!isAuthed) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run on every route except:
     * - /api routes
     * - Next.js internals (_next/static, _next/image)
     * - favicon and static asset files
     */
    '/((?!api|_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
