import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";

import Country from "./views/Country";
import Error from "./views/Error";
import Home from "./views/Home";
import Header from "./components/Header";
import { getCountriesApi } from "./mocks/api";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCountriesApi()
    .then((json) => {
      if (json.message) {
        throw new Error(json.message);
      } else {
        setData(json);
        setLoading(false);
      }
    })
    .catch(() => {
      setError(true);
      setLoading(false);
    });
  }, []);

  return (
    <div className="app min-h-screen grid">
      <Router>
        <Header />
        {!loading ? (
          <Routes>
            <Route
              exact
              path="/"
              element={
                !error ? data && <Home data={data} /> : <Error error={error} />
              }
            />
            {data &&
              data.map((country) => {
                return (
                  <Route
                    exact
                    path={`/${country.alpha3Code}`}
                    key={country.alpha3Code}
                    element={<Country country={country} data={data} />}
                  />
                );
              })}
            <Route exact path="/:code" element={<Error error={error} />} />
          </Routes>
        ) : (
          <div data-testid="loading" className="flex justify-center items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
              <div className="h-9 w-9 rounded-full bg-white"></div>
            </div>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
