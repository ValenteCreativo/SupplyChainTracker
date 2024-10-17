import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../Configs/config';

import 'src/styles/global.css';
import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import dynamic from 'next/dynamic';

const OnchainProviders = dynamic(
  () => import('src/components/OnChainKitTools/OnchainProviders'),
  {
    ssr: false,
  },
);

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Supply Chain Tracker ',
  description: 'Supply Chain Tracker for NGOs to guarantee transparency and traceability for donations infrastructure',
  openGraph: {
    title: 'Supply Chain Tracker',
    description: 'Supply Chain Tracker for NGOs to guarantee transparency and traceability for donations infrastructure',
    images: [`${NEXT_PUBLIC_URL}/vibes/vibes-19.png`],
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center">
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}
