var HOME = document.getElementById("HOME");
var traSig = document.getElementById("traSig");
var defiSig = document.getElementById("defiSig");

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");

var type1 = document.getElementById("type1"); //info
var type2 = document.getElementById("type2"); //edu
var type3 = document.getElementById("type3"); //invest

//CONNECT METAMASK PRINCIPAL __________________________________________

var ConnectWallet1 = document.getElementById("ConnectWallet1");
var Connected = false;
var AddressesConnected;

ConnectWallet1.addEventListener("click", async()=>{
    if (typeof window.ethereum !== 'undefined') {
      try {
        const Accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        console.log("MTMSK Connected");
        AddressesConnected = Accounts[0];
        console.log(AddressesConnected);
        
        document.getElementById("ConnectWallet1").innerText="Connected";

        Connected = true;

      } catch (error) {console.log("ERROR al Conectar MTMSK");}
     } else {
      console.log("MTMSK Not Detected");
    }
});

//_______________________________________________________________________

b1.addEventListener("click", function(){
  if (AddressesConnected == 0x0183161ed061018990d651d48f51695f176f2581 || AddressesConnected == 0x8FEaaAbC744338773FdB819c59d97fd6b5e7F1D9 && Connected == true
  ) {
    HOME.style.display = "none";
    traSig.style.display = "block";
  } else {
    console.log("Do Not Have Access");
  }
})

b1.addEventListener("mouseover", function(){
    type1.style.display = "none";
    type2.style.display = "none";
    type3.style.display = "block";
})

b1.addEventListener("mouseout", function () {
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "none";
});

b2.addEventListener("click", function () {
  HOME.style.display = "none";
  defiSig.style.display = "block";
});

b2.addEventListener("mouseover", function () {
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "block";
});

b2.addEventListener("mouseout", function () {
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "none";
});

b3.addEventListener("mouseover", function () {
  type1.style.display = "block";
  type2.style.display = "none";
  type3.style.display = "none";
});

b3.addEventListener("mouseout", function () {
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "none";
});

b4.addEventListener("mouseover", function () {
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "block";
});

b4.addEventListener("mouseout", function () {
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "none";
});

b5.addEventListener("mouseover", function () {
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "block";
});

b5.addEventListener("mouseout", function () {
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "none";
});

b6.addEventListener("mouseover", function () {
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "block";
});

b6.addEventListener("mouseout", function () {
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "none";
});

b7.addEventListener("mouseover", function () {
  type1.style.display = "none";
  type2.style.display = "block";
  type3.style.display = "none";
});

b7.addEventListener("mouseout", function () {
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "none";
});

b8.addEventListener("mouseover", function () {
  type1.style.display = "none";
  type2.style.display = "block";
  type3.style.display = "none";
});

b8.addEventListener("mouseout", function () {
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "none";
});

b9.addEventListener("mouseover", function () {
  type1.style.display = "none";
  type2.style.display = "block";
  type3.style.display = "none";
});

b9.addEventListener("mouseout", function () {
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "none";
});


//··········································
//···········TRADING SIGNALS················
//··········································

//PRECIOS
      const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";


      async function mostrarPrecioBitcoin() {
        try {
        
          const response = await fetch(apiUrl);
          const data = await response.json();

          const precioBitcoin = data.bitcoin.usd;

          const bitcoinPriceElement = document.getElementById("BitcoinPrice");
          bitcoinPriceElement.textContent = `BTC $${precioBitcoin}`;
        } catch (error) {
          console.error("X de Bitcoin:", error);
          const bitcoinPriceElement = document.getElementById("BitcoinPrice");
          bitcoinPriceElement.textContent = "X de Bitcoin";
        }
      }

      mostrarPrecioBitcoin();

      const apiUrl2 ="https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

      async function mostrarPrecioEthereum() {
        try {
          const response = await fetch(apiUrl2);
          const data = await response.json();

          const precioEthereum = data.ethereum.usd;

          const EthereumPriceElement =
            document.getElementById("EthereumPrice");
          EthereumPriceElement.textContent = `ETH $${precioEthereum}`;
        } catch (error) {
          console.error("X precio de Ethereum:", error);
          const EthereumPriceElement =
            document.getElementById("EthereumPrice");
          EthereumPriceElement.textContent =
            "X precio de Ethereum";
        }
      }

      mostrarPrecioEthereum();

      //EUR/USD RELLENAR APIKEY
      const apiKey = "TU_CLAVE_API";
      const apiUrl3 = `https://open.er-api.com/v6/latest/EUR?app_id=${apiKey}`;

      // Función para obtener y mostrar el tipo de cambio
      async function fetchExchangeRate() {
        try {
          const response = await fetch(apiUrl3);
          const data = await response.json();

          if (data.rates && data.rates.USD) {
            const exchangeRate = data.rates.USD;
            document.getElementById("exchangeRate").innerText =
              exchangeRate.toFixed(2);
          } else {
            console.log("Error al obtener el tipo de cambio");
          }
        } catch (error) {
          console.log("Error al realizar la solicitud");
        }
      }

      fetchExchangeRate();

//____________________________________________________________________

//Risk AutoTrading

var tradRisks = document.getElementById("tradRisks");
var Risks = document.getElementById("Risks");
var r1 = document.getElementById("r1");

tradRisks.addEventListener("mouseover", function(){
  Risks.style.display = "block";
  Risks.style.zIndex="9998";
  tradRisks.style.zIndex="9999";
  r1.style.zIndex = "9999";
  tradingviewWindow.style.zIndex = "9996";
})
tradRisks.addEventListener("mouseout", function () {
  Risks.style.display = "none";
  tradingviewWindow.style.zIndex = "9999";
});

//_____________________________________________________________________

var ACT = document.getElementById("ACT");
var comments = document.getElementById("comments");
var Estads = document.getElementById("Estads");
var DATA = document.getElementById("DATA");

ACT.addEventListener("click", function(){
  comments.style.display="block";
  ACT.style.display="none";
  Estads.style.display="block";
  DATA.style.display = "none";
});

Estads.addEventListener("click", function () {
  comments.style.display = "none";
  ACT.style.display = "block";
  Estads.style.display = "none";
  DATA.style.display = "block";
  Cover.style.display = "none";
});

//---------------------------------------------------------------------

var Cover = document.getElementById("Cover");
var ShowTradeBut = document.getElementsByClassName("ShowTradeBut");
var signalsDiv = document.getElementById("signalsDiv"); 
var SeeAllTrades = document.getElementById("SeeAllTrades");
var tradId = document.getElementsByClassName("tradId"); 

for (var i = 0; i < ShowTradeBut.length; i++) {
  ShowTradeBut[i].addEventListener("click", function () {
    Cover.style.display = "block";
    signalsDiv.style.overflowY = "hidden";
  });
}

for (var a = 0; a < tradId.length; a++) {
  tradId[a].addEventListener("click", function () {
    Cover.style.display = "block";
    signalsDiv.style.overflowY = "hidden";
  });
}

SeeAllTrades.addEventListener("click", function(){
  Cover.style.display = "none";
  signalsDiv.style.overflowY = "auto";
})

//________________________________________________

var TradingView = document.getElementById("TradingView");
var tradingviewWindow = document.getElementById("tradingviewWindow");
var closeTradView = document.getElementById("closeTradView");


TradingView.addEventListener("click", function(){
  tradingviewWindow.style.display = "block";
  tradingviewWindow.style.zIndex = "9999";
  TradingView.style.display ="none";
  closeTradView.style.display = "block";
  UpdateTradView();
})

closeTradView.addEventListener("click", function () {
  tradingviewWindow.style.display = "none";
  TradingView.style.display = "block";
  closeTradView.style.display = "none";
  varEUR.style.background =
    "radial-gradient( rgba(171, 169, 169, 0.89), rgba(255, 255, 255, 0.904))";
  varBTC.style.background =
    "radial-gradient( rgba(171, 169, 169, 0.89), rgba(255, 255, 255, 0.904))";
  varETH.style.background =
    "radial-gradient( rgba(171, 169, 169, 0.89), rgba(255, 255, 255, 0.904))";
});

var varBTC = document.getElementById("varBTC");
var varETH = document.getElementById("varETH");
var varEUR = document.getElementById("varEUR");

var graphic = "BINANCE:BTCUSDT";

varBTC.addEventListener("click", function(){
  graphic = "BINANCE:BTCUSDT";
  console.log("graphic =" + graphic);
  varBTC.style.background = 
    "radial-gradient( rgb(0, 14, 209),  rgb(0, 132, 209), rgba(255, 255, 255, 0.89), rgba(82, 82, 82, 0.132))";
    varEUR.style.background =
      "radial-gradient( rgba(171, 169, 169, 0.89), rgba(255, 255, 255, 0.904))";
    varETH.style.background =
      "radial-gradient( rgba(171, 169, 169, 0.89), rgba(255, 255, 255, 0.904))";
  UpdateTradView();
});

varETH.addEventListener("click", function () {
  graphic = "BINANCE:ETHUSDT";
  console.log("graphic =" + graphic);
  varETH.style.background = 
    "radial-gradient( rgb(0, 14, 209),  rgb(0, 132, 209), rgba(255, 255, 255, 0.89), rgba(82, 82, 82, 0.132))";
  varBTC.style.background =
    "radial-gradient( rgba(171, 169, 169, 0.89), rgba(255, 255, 255, 0.904))";
  varEUR.style.background =
    "radial-gradient( rgba(171, 169, 169, 0.89), rgba(255, 255, 255, 0.904))";
  UpdateTradView();
});

varEUR.addEventListener("click", function () {
  graphic = "OANDA:EURUSD";
  console.log("graphic =" + graphic);
  varEUR.style.background = 
    "radial-gradient( rgb(0, 14, 209),  rgb(0, 132, 209), rgba(255, 255, 255, 0.89), rgba(82, 82, 82, 0.132))";
  varBTC.style.background =
    "radial-gradient( rgba(171, 169, 169, 0.89), rgba(255, 255, 255, 0.904))";
  varETH.style.background =
    "radial-gradient( rgba(171, 169, 169, 0.89), rgba(255, 255, 255, 0.904))";
  UpdateTradView();
});

var varWidth = 1000;
var varHeight = 600;


function UpdateTradView() { 
new TradingView.widget({
  width: varWidth,
  height: varHeight,
  symbol: graphic,
  interval: "D",
  timezone: "Etc/UTC",
  theme: "dark",
  style: "1",
  locale: "en",
  toolbar_bg: "#f1f3f6",
  enable_publishing: false,
  hide_top_toolbar: false,
  save_image: false,
  container_id: "tradingviewWindow",
});
};



