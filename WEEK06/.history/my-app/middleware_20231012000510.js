export function middleware(request) {
  console.log('requested: ', request.url);
}
export const config = {
  matcher: ['/api/users/:path*'],
};