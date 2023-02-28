import { useCallback, useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

const Home = ({ data }) => {
  const [countries, setCountries] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [page] = useState(25);
  const [region, setRegion] = useState("All");

  const indexOfLastPost = currentPage * page;
  const indexOfFirstPost = indexOfLastPost - page;
  const currentCountries = countries.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries.length / page); i++) {
    pageNumbers.push(i);
  }

  const onSetCurrentPage = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const handleSearch = (query) => {
    const searchResults = data.filter(
      (country) =>
        country.name.includes(query) ||
        country.name.toLowerCase().includes(query)
    );
    setCountries(searchResults);
  };

  const handleFilter = useCallback((re) => {
    setRegion(re);
  }, []);

  useEffect(() => {
    if (region === "All") {
      setCountries(data);
    } else {
      let newData = data.filter((a) => a.region === region);
      setCountries(newData);
    }
    setCurrentPage(1);
  }, [region, data]);

  return (
    <div className="flex flex-col">
      <div className="filter-search flex md:flex-row flex-col justify-between items-center md:pt-12 pt-6 md:px-20 px-6">
        <Search handleSearch={handleSearch} />
        <Filter handleFilter={handleFilter} />
      </div>
      <div className="flex flex-wrap md:py-12 py-6 md:px-20 px-6 justify-center">
        {countries.length ? (
          <>
            {currentCountries.map((country, index) => (
              <CountryCard country={country} key={index} />
            ))}
            <Pagination
              pageNumbers={pageNumbers}
              currentPage={currentPage}
              onSetCurrentPage={onSetCurrentPage}
            />
          </>
        ) : (
          <h1 className="no-result flex justify-center items-center w-full">
            No result.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
