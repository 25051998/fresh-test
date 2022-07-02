/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
         Welcome to `fresh`. I(Aditya) was trying to see what fresh brings to the table. The deployment part is blazingly faast!!.
      </p>
      <Counter start={3} />
    </div>
  );
}
