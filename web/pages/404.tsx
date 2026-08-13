import type { FC } from "react";
import Head from "next/head";
import Link from "next/link";

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
          <Link href="/">Gå til forsiden</Link>
        </p>
      </main>
    </>
  );
};

export default NotFound;
