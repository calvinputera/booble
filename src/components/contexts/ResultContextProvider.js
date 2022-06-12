import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "25b7f18f0dmshc51a9131ffbe3e9p106c83jsn8a6cabe542a1",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });

    const data = await response.json();
    // console.log(data);

    if (type.includes("/news")) {
      setResult(data.entries);
    } else if (type.includes("/image")) {
      setResult(data.image_results);
    } else {
      setResult(data.results);
    }

    // setResult(data); //can be to turnOff
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, search, setSearch, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
