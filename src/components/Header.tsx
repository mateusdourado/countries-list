"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const page = usePathname();
  const isHome = page === "/";
  return (
    <header className="h-10 min-h-[50px] bg-zinc-900 text-white font-bold flex justify-center items-center capitalize">
      {isHome ? (
        <>
          {/* <Link href="/" className="absolute left-10">
            Home
          </Link> */}
          <p className="normal-case">Selecione o país</p>
        </>
      ) : (
        <>
          <Link href="/" className="absolute left-10">
            Voltar
          </Link>
          <p className="hidden md:block">Informações</p>
        </>
      )}
    </header>
  );
}
