import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import Hero from '../components/home/Hero';
import Layout from '../components/Layout'
import Project from '../components/Project'
import Toc from '../components/Toc';
import { TOKEN, DATABASE_ID } from '../config';
import axios from 'axios';
import Bio from '../components/Bio';



const Home: NextPage = (result:PropsWithChildren) => {
  //console.log(result);

  return (
    <Layout>
      <Head>
        <title>포트폴리오</title>
        <meta name="description" content="코딩 공부" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font ">
        <Bio/>
      </section>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font ">
        <Project result={result} />
      </section>
   

    </Layout>
  )
}

export default Home



export async function getStaticProps() {


  const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`
    },
    data: {
      "sorts": [
        {
          "property": "이름",
          "direction": "ascending"
        }
      ],
      page_size: 100
    }
  };


  const res = await axios
    .request(options);

  const result = res.data.results;


  return {
    props: { result }, // will be passed to the page component as props
  }
}