import type { FC } from "react";
import Head from "next/head";

const NotFound: FC = () => {
  return (
    <>
      <Head>
        <title>404 - Villajoyosa</title>
      </Head>
      <main style={{ textAlign: "center", padding: "40px 20px" }}>
        <h1>404</h1>
        <p>Siden ble ikke funnet</p>
        <p>
          <a href="/">Gå til forsiden</a>
        </p>
      </main>
    </>
  );
};

export default NotFound;
