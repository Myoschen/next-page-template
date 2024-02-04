import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen items-center justify-center bg-zinc-900 ${inter.className}`}>
      <h1 className={'text-lg text-zinc-50'}>{'nextjs-template'}</h1>
    </main>
  )
}
