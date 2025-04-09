import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only check for admin access on the /admin path
  if (pathname.startsWith('/admin') && !pathname.startsWith('/adminlogin')) {
    // Get the JWT token from the cookie
    const token = request.cookies.get('admin-auth')?.value;

    if (!token) {
      // If no token exists, redirect to login
      const url = request.nextUrl.clone();
      url.pathname = '/adminlogin';
      return NextResponse.redirect(url);
    }

    try {
      // Try to verify the token using the JWT secret from the environment
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));

      // If token is valid, proceed
      return NextResponse.next();
    } catch (err) {
      // If the token is invalid or expired, redirect to login
      const url = request.nextUrl.clone();
      url.pathname = '/adminlogin';
      return NextResponse.redirect(url);
    }
  }

  // Allow all other requests
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'], // Only apply to /admin routes
};