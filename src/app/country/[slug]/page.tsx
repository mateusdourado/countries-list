import CountryFrontier from "@/components/CountryFrontier";
import Image from "next/image";

async function getCountryInfo(slug: string) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${slug}?fullText=true`
  );
  return response.json();
}

async function getCountryFrontiers(codes: string) {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=` + codes
  );
  return response.json();
}

export default async function CountryInfo({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getCountryInfo(params.slug);

  if (!data) {
    return <>Falha na API..</>;
  }

  let codes = "";
  if (data[0].borders) {
    Object.keys(data[0].borders).map(
      (item: string, index: number, array: Array<{}>) => {
        if (array.length - 1 === index) {
          codes += `${data[0].borders[item]}`;
        } else {
          codes += `${data[0].borders[item]},`;
        }
      }
    );
  }
  const frontiers = await getCountryFrontiers(codes);

  return (
    <div className="grid h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <Image
          src={data[0].flags.svg}
          width={500}
          height={350}
          alt={
            data[0].flags.alt
              ? data[0].flags.alt
              : data[0].translations.por.common
          }
          className="object-contain w-56 h-36 md:ml-4 justify-self-center md:justify-self-end mt-4 md:mt-0"
        />
        <div className="p-2 text-center md:text-left">
          <p>
            <b>Nome comum:</b> {data[0].translations.por.common}
          </p>
          <p>
            <b>Nome oficial:</b> {data[0].translations.por.official}
          </p>
          <p>
            <b>Capital:</b> {data[0].capital ? data[0].capital[0] : "not found"}
          </p>
          <p>
            <b>População:</b> {data[0].population.toLocaleString()} habitantes
          </p>
          <p>
            <b>Idioma: </b>
            {data[0].languages &&
              Object.keys(data[0].languages).map(
                (item: string, index: number) => (
                  <span key={index} className="badge badge-outline mx-1">
                    {data[0].languages[item]}
                  </span>
                )
              )}
          </p>
        </div>
      </section>
      {frontiers.status != 400 ? (
        <>
          <div className="flex flex-col mx-1">
            <p className="flex justify-center font-bold mb-2">Fronteiras:</p>
            <div className="flex justify-center gap-4 mb-4 flex-wrap">
              {frontiers.map((item: any, index: number) => (
                <CountryFrontier
                  key={index}
                  name={item.name.common}
                  flag={item.flags.svg}
                  flagAlt={item.flags.alt}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
