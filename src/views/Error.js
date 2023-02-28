import { Link, useParams } from "react-router-dom";

import { ReactComponent as Back } from "../assets/icons/arrow-left.svg";

const Error = ({ error }) => {
  const { code } = useParams();

  return (
    <div className="error-page">
      <div className="flex flex-col justify-center items-center h-full">
        {error ? (
          <h1 className="no-result">
            A communication error has occurred with the API, please try again.
          </h1>
        ) : (
          <h1 className="no-result">
            No result for the country code: <span>{code.toUpperCase()}</span>
          </h1>
        )}

        {error ? (
          <a
            href="/"
            className="country-border my-4 p-1 w-24 h-9 block rounded-sm shadow"
          >
            <button className="border-none flex justify-center items-center w-full h-full bg-transparent">
              Retry
            </button>
          </a>
        ) : (
          <Link to="/" className="back my-4">
            <button>
              <Back />
              <p>Back</p>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Error;
