import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Match /dashboard and any nested routes like /dashboard/settings
    '/dashboard(.*)',
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    // Optionally match API routes if you use them
    '/(api|trpc)(.*)',
  ],
};
