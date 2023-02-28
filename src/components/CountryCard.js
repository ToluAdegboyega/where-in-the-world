import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/${country.alpha3Code}`}>
      <div className="card flex flex-col items-start w-60 h-96 rounded-md overflow-hidden cursor-pointer m-4">
        <div className="card__flag w-full h-40 overflow-hidden">
          <img src={country.flag} alt={`${country.name} flag`} className="w-full h-full object-cover flex justify-center items-center" />
        </div>
        <div className="p-6">
          <h2 className="text-lg mb-4">{country.name}</h2>
          <p className="text-sm mb-px">
            <span className="font-semibold">Population: </span>
            {new Intl.NumberFormat().format(country.population)}
          </p>
          <p className="text-sm mb-px">
            <span className="font-semibold">Region: </span>
            {country.region}
          </p>
          <p className="text-sm mb-px">
            <span className="font-semibold">Capital: </span>
            {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;