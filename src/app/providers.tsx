// app/providers.tsx
'use client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import Alert from '@/component/server/Alert';
import Navigation from '@/component/client/Navigation';
import Footer from '@/component/server/Footer';
import '@/styles/react-notion-x.css';
import 'animate.css';
// import 'prismjs/themes/prism-tomorrow.css'
// import 'katex/dist/katex.min.css'

export const runtime = 'edge';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#131313',
      },
    }),
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <main className="min-h-screen h-full flex flex-col bg-cover bg-[url('/assets/images/header.webp')] xl:bg-[url('/assets/images/header2.webp')]">
        <Alert label='현재 알파 테스트 중으로 서비스 불안정이나 오작동의 가능성이 있습니다. 양해 부탁드립니다.' />
        <Navigation />
        {children}
      </main>
      <Footer />
    </ChakraProvider>
  );
}