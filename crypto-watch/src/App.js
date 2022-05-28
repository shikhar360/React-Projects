import React from "react";
import Content from "./Content";
import axios from "axios";
function App() {
  const [coins, setCoins] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [about, setAbout] = React.useState(false);

  console.log(coins);
  React.useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => setCoins(res.data))
      .catch((error) => alert(`${error}`));
  }, []);

  // function filterIt(val) {
  //   setCoins((prev) => prev.filter((item) => item.id !== val));
  // }
  // filterIt("bitcoin");

  function handleClick(id) {
    console.log(id);
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }
  const filtered = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  function toggleAbout() {
    setAbout(!about);
  }
  function contact() {
    window.open("https://twitter.com/shikkhar_");
  }

  return (
    <div className="main bg">
      <div className="app ">
        <h1 className="title">Welcome to Crypto Watch</h1>

        <nav className=" nav">
          <span className="btn2 about" onClick={toggleAbout}>
            {about ? "Show Less" : "ABOUT"}
          </span>
          <span onClick={contact} className=" btn2 contact">
            Contact Me !
          </span>
        </nav>
        {about ? (
          <span className="about2 fs2">
            Hey Shikhar Here! , This is one of the BEST CRYPTO MARKET WATCH app.
            Our app also contains some Insights about your Fav Crypto-Currencies
            , Just Search them here and ENJOY!! ( Needs refresh to see the Price
            Change ){" "}
            <span className="inl">
              Follow Me by Clicking the CONTACT ME! button
            </span>
          </span>
        ) : null}

        <form>
          <input
            className="search-box"
            type="text"
            placeholder="Search your Favourite Coin "
            onChange={handleChange}
          />
        </form>

        <div className="top">
          {filtered.map((coin) => {
            return (
              <Content
                key={coin.id}
                id={coin.id}
                img={coin.image}
                symbol={coin.symbol}
                name={coin.name}
                currentPrice={coin.current_price}
                price24={coin.price_change_percentage_24h}
                change24={coin.price_change_24h}
                handleClick={() => handleClick(coin.id)}
                mkt={coin.market_cap}
                vol={coin.total_volume}
                high={coin.high_24h}
                low={coin.low_24h}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

//-- two ways to pass values between component
/*
pass the handleclick in the prop 

! when you are mapping in the App.js file

set the onClick function 
~ IN THE component"s element as OnCLick={props.handleClick}
and while passing props do this 

~ handleClick={() => handleClick(coin.id)} //argument will be the value which you want
//like above

! when you are sending the whole data in the component like 
<Component wholeApiData = {data} />
again pass the handleclick in the prop 
-in App .js
 function handleClick(id ){
console.log(id) // here you will gwt the id of data 
 }
return(
  <Component wholeApiData={data}        handleClick={handleClick}          />

)
- in Component .js you will have to

(export default function Component (props){

  function anotherReferenceFunction(id){
    props.handleClick(id)
  }
  return(
    <div onClick={() => anotherReferenceFunction(data.id)} >Yahi click Hone Wala Hai</div>
    
    )
    
  })
*/
