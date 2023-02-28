import { useEffect, useState } from "react";

import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";

const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  const [block, setBlock] = useState(true);

  const handleChange = (e) => {
    let { value } = e.target;
    if (value === "") {
      setBlock(false);
    }
    setSearch(value);
  };

  const handleEnter = (e) => {
    let { key } = e;
    if (key === "Enter" && search) {
      handleSearch(search);
    }
  };

  const handleDelete = () => {
    setSearch("");
    setBlock(false);
  };

  useEffect(() => {
    if (search !== "") {
      const timeout = setTimeout(() => handleSearch(search), 500);
      return () => clearTimeout(timeout);
    } else if (!block) {
      setBlock(true);
      handleSearch(search);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, handleSearch]);

  return (
    <div className="search-bar m-4 max-w-md h-14 rounded-md flex justify-center items-center relative">
      <SearchIcon className="h-5 absolute left-8 top-4" />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
        onKeyUp={handleEnter}
        className="relative h-full w-full py-2 pr-12 pl-20 border-none tracking-wide font-normal text-sm bg-transparent"
      />
      {search && <Close className={"close-btn h-8 p-1 top-3 right-3 rounded-full cursor-pointer z-10"} onClick={handleDelete} />}
    </div>
  );
};

export default Search;