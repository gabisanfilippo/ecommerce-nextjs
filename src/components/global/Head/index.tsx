import Head from "next/head";
import { FC } from "react";

interface IProps {
  completeTitle: string;
  description: string;
}

export const HeadFC: FC<IProps> = ({ completeTitle, description }) => {
  return (
    <Head>
      <title>Avion {completeTitle}</title>
      <meta charSet="utf-8"></meta>
      <meta name="description" content={description} />
      <meta name="author" content="Gabrielle Coelho Sanfilippo" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};