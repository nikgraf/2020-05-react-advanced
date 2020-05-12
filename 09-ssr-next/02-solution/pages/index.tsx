import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main>
        <h1>Next</h1>
      </main>
    </>
  );
};

export default Home;
