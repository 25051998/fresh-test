// routes/about.tsx

/** @jsx h */
import { h } from "preact";
import { Handlers } from "$fresh/server.ts";
export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};
// Note that handlers do not need to call ctx.render().
// This feature can be used to create API routes. Here is an API route that returns a random UUID as a JSON response:

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}