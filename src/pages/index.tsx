import { Inter } from 'next/font/google'
import { HeadFC } from '@components/global/Head';

export default function Home() {
  return (
    <>
      <HeadFC completeTitle='' description='E-commerce desenvolvido com NextJs' />
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <p>p</p>
    </>
  );
}
