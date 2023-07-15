import { useEffect, useState } from "react";

function Home({ data }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
      console.log("DATA:", data);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Cryptocurrencies by Market Cap</h1>
      {/* Render your data here */}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false"
    );
    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default Home;
