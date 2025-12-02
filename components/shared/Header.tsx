import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./Container";
import Image from "next/image";

interface headerProps {
  className?: string;
}

export const Header: React.FC<headerProps> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center">
            <Image src="/logo.png" alt="logo" width={35} height={35} className="mr-4" />
            <div className="flex flex-col">
                <div className="text-2xl uppercase font-black mb-1">Pizza</div>
                <div className="text-sm text-gray-400 leading-3">Вкуснее уже некуда</div>
            </div>
        </div>
      </Container>
    </header>
  );
};
