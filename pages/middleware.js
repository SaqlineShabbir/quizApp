import { NextResponse } from 'next/server';

export default function middleware(req) {
  const verify = req.localStorage.get('loggedInUser');
  let url = req.url;

  if (!verify && url.includes('/userDashBoard')) {
    return NextResponse.redirect('http://localhost:3000/');
  }

  if (verify && url === 'http://localhost:3000/') {
    return NextResponse.redirect('http://localhost:3000/dashboard');
  }
}
