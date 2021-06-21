const fetch = require ('node-fetch');

console.log("Requests recieved at: ", new Date);
for (let i=0; i < 100; i++){
  fetch("http://172.16.30.204:8051/simulate", {
    "headers": {
      "accept": "application/json",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache"
    },
    "referrer": "http://172.16.30.204:8051/docs",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"universe_selection\":{\"starting_rank\":1,\"ending_rank\":200,\"portfolio_size\":200,\"rebalancing_frequency\":\"QUARTERLY\",\"universe_exclusions\":{\"companies\":[],\"houses\":[],\"sectors\":[]}},\"backtest_frequency\":\"WEEKLY\",\"factors\":[{\"name\":\"trading_activity\",\"value\":0.2,\"neutralization\":\"MARKET\"}],\"sub_sector_tilts\":[],\"sub_sector_inclusions\":[],\"sub_sector_exclusions\":[]}",
    "method": "POST",
    "mode": "cors"
  })
  .then(res => {
    console.log("Response at : ", new Date(), res.status)
  });
}
