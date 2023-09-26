import '@/constants/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{'Website Title'}</title>
        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'}
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
              }
            `
          }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
