import Image from "next/image";
import Link from "next/link";

export default function CountryFrontier({
  name,
  flag,
  flagAlt,
}: {
  name: string;
  flag: string;
  flagAlt: string;
}) {
  return (
    <Link key={name} href={`/country/${name}`}>
      <Image
        src={flag}
        alt={flagAlt ? flagAlt : "img-country"}
        width={200}
        height={150}
        className="object-contain rounded-none w-20 h-10"
      />
    </Link>
  );
}
