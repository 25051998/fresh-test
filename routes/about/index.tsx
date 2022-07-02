// routes/about.tsx

/** @jsx h */
import { h } from "preact";
// The data that is passed to ctx.render() can then be accessed via the props.data field on the page component.

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}