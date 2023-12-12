import CountryBox from "@/components/CountryBox";

export type Country = {
  name: {
    common: string;
  };

  translations: {
    por: {
      common: string;
    };
  };

  flags: {
    svg: string;
    alt: string;
  };

  capital?: string;
  population: number;
  languages?: {
    [key: string]: string;
  };

  borders?: string[];
};

async function getDados(): Promise<Country[]> {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    return response.json();
  } catch (error) {
    throw new Error("Falha na API.");
  }
}

export default async function Home() {
  const countries = await getDados();

  if (!countries) {
    return <>Falha na API...</>;
  }

  return (
    <section className="grid grid-cols-2 md:grid-cols-6 w-full container gap-2 my-4">
      {countries!.map((country: any, index: number) => (
        <CountryBox
          key={index}
          name={country.name.common}
          ptName={country.translations.por.common}
          flag={country.flags.svg}
          flagAlt={country.flags.alt}
        />
      ))}
    </section>
  );
}
