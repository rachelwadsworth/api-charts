import axios from "axios";
import { useEffect } from "react";

const options = {
  method: "GET",
  url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
  params: { q: "Coheed and Cambria", next: "views" },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY
    "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
  },
};

const CoheedChart = () => {
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

  return <div>European History</div>;
};

export default CoheedChart;
