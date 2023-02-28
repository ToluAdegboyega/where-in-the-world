import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Back } from "../assets/icons/arrow-left.svg";

const Country = ({ country, data }) => {
  let languages = country?.languages
    .map((lang) => {
      return lang.name;
    })
    .join(", ");

  let borders = country?.borders;
  let filteredBorders = [];

  if (borders) {
    for (let i = 0; i < borders.length; i++) {
      [filteredBorders[i]] = data.filter(
        (country) => country.alpha3Code === borders[i]
      );
    }
  }

  return (
    <div className="py-12 lg:px-20 px-6 flex flex-col min-h-full">
      <Link to="/" className="back">
        <button>
          <Back />
          <p>Back</p>
        </button>
      </Link>

      {!country ? null : (
        <div className="flex lg:flex-row flex-col justify-between w-full">
          <div className="image-wrap lg:w-2/4 w-full mb-8">
            <img
              src={country.flags.svg}
              alt={`${country.name} flag`}
              className="w-[95%] sm:w-full lg:h-96 h-48 object-cover"
            />
          </div>
          <div className="lg:w-2/4 w-full lg:px-20 md:px-6 px-0 mb-8">
            <div className="text-wrap flex flex-col">
              <h2 className="mb-9 text-3xl font-semibold">{country.name}</h2>
              <div className="country-info">
                <p className="font-semibold mb-1">
                  Native Name: <span className="font-normal">{country.nativeName}</span>
                </p>
                <p className="font-semibold mb-1">
                  Population: <span className="font-normal">
                    {country.population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </p>
                <p className="font-semibold mb-1">
                  Region: <span className="font-normal">{country.region}</span>
                </p>
                <p className="font-semibold mb-1">
                  Sub Region: <span className="font-normal">{country.subregion}</span>
                </p>
                <p className="font-semibold mb-1">
                  Capital: <span className="font-normal">{country.capital}</span>
                </p>
                <p className="font-semibold mb-1">
                  Top Level Domain: <span className="font-normal">{country.topLevelDomain}</span>
                </p>
                <p className="font-semibold mb-1">
                  Currencies: <span className="font-normal">
                    {country.currencies && country.currencies[0].name}
                  </span>
                </p>
                <p className="font-semibold mb-1">
                  Languages: <span className="font-normal">{languages}</span>
                </p>
              </div>
            </div>
            <div className="text-wrap">
              <p className="font-semibold mb-1">
                Border Countries:
              </p>
              <div className="flex flex-wrap">
                {!filteredBorders
                  ? "No Border Country."
                  : filteredBorders.map((border, index) => {
                      return (
                        <Link
                          key={index}
                          to={`/${border.alpha3Code}`}
                          className="country-border mr-2 my-1 p-1 w-max h-9 block rounded-sm shadow"
                        >
                          <button className="border-none flex justify-center items-center w-full h-full bg-transparent">{border.name}</button>
                        </Link>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
