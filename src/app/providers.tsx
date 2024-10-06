// app/providers.tsx
'use client'
import Image from "next/image";
import { ChakraProvider } from '@chakra-ui/react'
import Alert from '@/component/server/Alert';
import Navigation from '@/component/client/Navigation';
import Footer from '@/component/server/Footer';
import '@/styles/react-notion-x.css';
// import 'prismjs/themes/prism-tomorrow.css'
// import 'katex/dist/katex.min.css'

export const runtime = 'edge';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <main className="min-h-screen h-full flex flex-col bg-cover bg-[url('/assets/images/header.png')] xl:bg-[url('/assets/images/header2.png')]">
        <Alert label='현재 알파 테스트 중으로 서비스 불안정이나 오작동의 가능성이 있습니다. 양해 부탁드립니다.' />
        <Navigation />
        {children}
      </main>
      <Footer />
    </ChakraProvider>
  );
}