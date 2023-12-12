import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-2 flex flex-col items-center text-white">
      &copy; All right reserved
      <Link
        href="https://restcountries.com/"
        target="new"
        className="md:absolute md:right-3 hover:text-zinc-400"
      >
        REST Countries API
      </Link>
    </footer>
  );
}
