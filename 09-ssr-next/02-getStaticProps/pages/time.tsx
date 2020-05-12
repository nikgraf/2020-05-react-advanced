import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Navigation from "../components/Navigation";

const Time = (props) => {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main>
        <h1>{props.currentTime}</h1>
      </main>
    </>
  );
};

export default Time;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      currentTime: new Date().toISOString(),
    },
  };
};
