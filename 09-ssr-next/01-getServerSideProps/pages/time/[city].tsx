import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Navigation from "../../components/Navigation";

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
        <h2>{props.city}</h2>
      </main>
    </>
  );
};

export default Time;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      currentTime: new Date().toISOString(),
      city: context.params.city,
    },
  };
};
