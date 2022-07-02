// routes/about.tsx

/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function AboutPage(props:PageProps) {
  console.log(props)
  const { id } = props.params;
  return (
    <main>
      {/* <h1>About</h1> */}
      <p>Hello {id}</p>
    </main>
  );
}