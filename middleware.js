import { NextResponse } from 'next/server';

export default function middleware(req) {
  const verify = req.cookies.get('loggedin');
  const userRole = req.cookies.get('role');
  let url = req.url;

  if (!verify && url.includes('/dashboard')) {
    return NextResponse.redirect('http://localhost:3000/sign-in');
  }

  if (
    userRole !== 'admin' &&
    (url.includes('/dashboard/make-admin') ||
      url.includes('/dashboard/delete-category') ||
      url.includes('/dashboard/post-question') ||
      url.includes('/dashboard/post-category'))
  ) {
    return NextResponse.redirect('http://localhost:3000/dashboard');
  }
}
