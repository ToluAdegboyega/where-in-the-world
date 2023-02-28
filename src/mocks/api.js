export const getCountriesApi = async () => {
  const res = await fetch("https://restcountries.com/v2/all");
  return await res.json();
};
