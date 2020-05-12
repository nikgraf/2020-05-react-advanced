import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Navigation from "../../components/Navigation";

const Profile = (props) => {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main>
        <img src={props.author.avatar_url} />
        <ul>
          {props.repositories.map((repository) => (
            <li key={repository.id}>{repository.name}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Profile;

export const getStaticProps: GetStaticProps = async () => {
  const [author, repositories] = await Promise.all([
    fetch(`https://api.github.com/users/nikgraf`).then((response) => {
      return response.json();
    }),
    fetch(`https://api.github.com/users/nikgraf/repos`).then((response) => {
      return response.json();
    }),
  ]);

  return {
    props: {
      author,
      repositories,
    },
  };
};
