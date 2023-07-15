function Home({ data }) {
    console.log("DATA: ", data)
    return (
      // Renders the data passed as props from the getServerSideProps
      <div>
        <h1>Cryptocurrencies by Market Cap</h1>
      </div>
    );
  }
  
  // This function gets triggered on every request
  export async function getServerSideProps() {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false"
      );
      const data = await response.json();
  
      if (!data) {
        throw new Error("Failed to fetch data");
      }
  
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
  