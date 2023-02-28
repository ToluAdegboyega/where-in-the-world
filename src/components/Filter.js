import { useState, useEffect } from "react";

import { ReactComponent as Down } from "../assets/icons/down.svg";

const Filter = ({ handleFilter }) => {
  const [selected, setSelected] = useState(false);
  const [region, setRegion] = useState("All");

  const handleClick = () => {
    setSelected(!selected);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setSelected(false);
    }, 100);
  };

  const dropdownOptions = [
    {
      name: "All",
    },
    {
      name: "Africa",
    },
    {
      name: "Americas",
    },
    {
      name: "Asia",
    },
    {
      name: "Europe",
    },
    {
      name: "Oceania",
    },
  ];

  useEffect(() => {
    handleFilter(region);
  }, [region, handleFilter]);

  return (
    <div className="filter m-4 h-14 w-52 rounded-md relative">
      <button
        onClick={handleClick}
        onBlur={handleBlur}
        className={selected ? "open" : ""}
      >
        {region} <Down />
      </button>
      <div className={selected ? "options selected" : "options"}>
        {dropdownOptions.map((option, index) => (
          <div
            key={index}
            className="option"
            onClick={() => {
              setRegion(option.name);
            }}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
