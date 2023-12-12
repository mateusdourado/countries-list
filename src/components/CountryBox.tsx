import Image from "next/image";
import Link from "next/link";

export default function CountryBox({
  name,
  ptName,
  flag,
  flagAlt,
}: {
  name: string;
  ptName: string;
  flag: string;
  flagAlt: string;
}) {
  return (
    <Link key={name} href={`/country/${name}`}>
      <article
        className="h-44 min-w-full p-2 
         hover:border-indigo-200 transition-all hover:shadow-xl"
      >
        <div className="relative w-full h-28 p-2 overflow-hidden ">
          <Image
            src={flag}
            alt={flagAlt ? flagAlt : "img-country"}
            fill
            className="object-contain "
          />
        </div>

        <h1 className="font-bold text-sm text-center mt-1">{ptName}</h1>
      </article>
    </Link>
  );
}
