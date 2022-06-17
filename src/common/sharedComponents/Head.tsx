import type { NextPage } from 'next'
import { MetaHTMLAttributes } from 'react'
import Head from 'next/head'

type Props = {
  title: String
  content: String | MetaHTMLAttributes
}

const EaglesHead: NextPage<Props> = ({title, content}) => {
  const sampleContent = `
    Blogging Application using NextJs Fullstack web framework
    with GraphQL, Prisma, Postgres, Docker, and Typescript.
    - by delletran
  `
  return (
    <Head>
      <title>Philippine Eagles - {title }</title>
      <meta name="description" content={content || sampleContent} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default EaglesHead
