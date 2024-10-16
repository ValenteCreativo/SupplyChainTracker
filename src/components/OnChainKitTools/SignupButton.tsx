'use client';
import WalletWrapper from './WalletWrapper';

interface SignupButtonProps {
  className?: string;
}

export default function SignupButton({ className }: SignupButtonProps) {
  return (
    <WalletWrapper
    className={`ockConnectWallet_Container min-w-[90px] shrink bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white py-3 px-6 rounded-full hover:bg-[#8F6C4E] transition-colors shadow-lg ${className}`}
    text="Start here"
  />
  );
}
