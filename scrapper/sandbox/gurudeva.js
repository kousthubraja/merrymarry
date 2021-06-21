const fetch = require ('node-fetch');

fetch("https://gurudevamatrimony.com/search/page/4/from=22&to=26&hfrom=122&hto=210&gender=f&mstatus=u&jathakam=0&wphoto=ANY&order=-1", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "__cfduid=d809ea614d5554ead08e7fa8ea9d478981610867140; PHPSESSID=4tbp6h9grnvhednjd0vd53o613; _ga=GA1.2.1165151368.1611171381; _gid=GA1.2.880405112.1611171381; _gat=1"
  },
  "referrer": "https://gurudevamatrimony.com/search/page/3/from=22&to=26&hfrom=122&hto=210&gender=f&mstatus=u&jathakam=0&wphoto=ANY&order=-1",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
})
.then(res => res.text())
.then(res => console.log(res));