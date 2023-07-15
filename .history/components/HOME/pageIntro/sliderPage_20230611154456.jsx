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
    // This fetches the data from the Coingecko external API
    const response = await fetch(
      "<https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false>"
    );
    const data = await response.json();
  
    // Pass data to the page component via props
    return {
      props: {
        data,
      },
    };
  }
  
  export default Home;
  