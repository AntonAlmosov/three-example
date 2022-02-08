import Head from "next/head";
import dynamic from "next/dynamic";

import Container from "../components/dom/Container";

const Scene = dynamic(() => import("../components/canvas/Scene"), {
  ssr: false,
});

// Treat this file like an html page

export default function Home() {
  return (
    <>
      <Head>
        {
          // It works like an ordinary <head /> tag
          // Favicons, metadata, etc goes here
        }
        <title>React Three Fiber</title>
      </Head>
      <Container />
      <Scene />
    </>
  );
}
