import { NextResponse } from "next/server";


export async function middleware(request) {

  if (1 == 1) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("my-url", request.nextUrl.pathname);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }
}
