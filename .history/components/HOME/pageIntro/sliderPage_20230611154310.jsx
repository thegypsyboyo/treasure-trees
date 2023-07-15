function Home({ data }) {
    return (
      // Renders the data passed as props from the getServerSideProps
      <div className={styles.container}>
        <h1>Cryptocurrencies by Market Cap</h1>
  
        <div className={styles.crypto__container}>
          {data.map((crypto) => (
            <div key={crypto.id} className={styles.crypto__child}>
              <img src={crypto.image} alt={crypto.symbol} />
              <h3>{crypto.name}</h3>
  
              <div className={styles.crypto__price}>
                <p>$ {crypto.current_price.toLocaleString()}</p>
                {crypto.price_change_percentage_24h < 0 ? (
                  <span className={styles.arrow__down}>
                    <FiArrowDown className={styles.price__icon} size={20} />
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </span>
                ) : (
                  <span className={styles.arrow__up}>
                    <FiArrowUpRight className={styles.price__icon} size={20} />
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
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
  