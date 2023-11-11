import { NextResponse } from 'next/server';

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  const language = requestHeaders.get('Accept-Language');

  if (language.includes('fr')) {
    return NextResponse.rewrite(new URL('/fr/about', request.url));
  }
}

export const config = {
  matcher: ['/about'],
};