import axios from "axios";
import { useEffect } from "react";

const options = {
  method: "GET",
  url: "https://coingecko.p.rapidapi.com/coins/markets",
  params: {
    vs_currency: "usd",
    page: "1",
    ids: "bitcoin, ethereum",
    per_page: "100",
    order: "market_cap_desc",
  },
  headers: {
    "x-rapidapi-key": "dbb15127d9mshbf50f1b07855c19p1a5e65jsn30b6afef07c9",
    "x-rapidapi-host": "coingecko.p.rapidapi.com",
  },
};

const Bitcoin = () => {
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return <div>Bitcoin</div>;
};

export default Bitcoin;
