import '@/app/globals.css';
import { GlobalContextProvider } from '@/contexts/GlobalContext';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// 従来のHeadタグに入れていたメタデータの新たな記載方法
export const metadata: Metadata = {
  title: 'ポケモンといっしょに漢字でGO!',
  description: 'ポケモンといっしょに漢字でGO!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
