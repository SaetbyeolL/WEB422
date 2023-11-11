export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    console.log('Visiting About');
  }

  if (request.nextUrl.pathname.startsWith('/api/users')) {
    console.log('Visiting the Users API');
  }
}