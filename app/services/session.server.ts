import { createCookieSessionStorage } from "@remix-run/cloudflare";

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [process.env.COOKIE_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

export let { getSession, commitSession, destroySession } = sessionStorage;
