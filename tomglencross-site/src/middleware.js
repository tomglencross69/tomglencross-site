import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin') && !pathname.startsWith('/adminlogin')) {
    const token = request.cookies.get('admin-auth')?.value;

    if (!token) {
      const url = request.nextUrl.clone();
      url.pathname = '/adminlogin';
      return NextResponse.redirect(url);
    }

    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
      return NextResponse.next();
    } catch (err) {
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