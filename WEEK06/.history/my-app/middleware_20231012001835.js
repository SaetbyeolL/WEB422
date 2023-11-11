import { NextResponse } from 'next/server';

export function middleware(request) {
    const response = NextResponse.next();
    response.headers.set('x-hello-from-middleware', 'hello');

  if (request.nextUrl.pathname.startsWith('/setCookie')) {
    let cookieMessage = request.nextUrl.searchParams.get('message');
    response.cookies.set('message', cookieMessage);
  }

  if (request.nextUrl.pathname.startsWith('/getCookie')) {
    let cookie = request.cookies.get('message');
    console.log(cookie);
  }

  return response;
}