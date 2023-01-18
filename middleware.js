import { NextResponse } from 'next/server';

export default function middleware(req) {
  const verify = req.cookies.get('loggedin');
  let url = req.url;

  if (!verify && url.includes('/userDashBoard')) {
    return NextResponse.redirect('http://localhost:3000/sign-in');
  }
}
