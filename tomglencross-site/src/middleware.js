import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin') && !pathname.startsWith('/adminlogin')) {
    const adminAuthCookie = request.cookies.get('admin-auth');
    if (!adminAuthCookie || adminAuthCookie.value !== 'true') {
      const url = request.nextUrl.clone();
      url.pathname = '/adminlogin';
      return NextResponse.redirect(url);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};