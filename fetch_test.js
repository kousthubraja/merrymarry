const fetch = require ('node-fetch');
fetch("https://mg.bharatmatrimony.com/search/matches/E5652436", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://matches.keralamatrimony.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "APPVERSIONCODE=0&SORT=1&REFINE=0&APPVERSION=6.1&ID=E5652436&LIMIT=20&BLOCKED=1&IGNORED=1&START=0&EXCLUDEIDS=null&SHORTLISTED=1&VIEWED=1&CONTACTED=1&ALLRESULTS=0&PRIMETAG=null&APPTYPE=300&Lang=en&ENCID=6a9097542e9ded61468a42c024232f177&TOKENID=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDkyMjkxNjMsImp0aSI6IlJUVTJOVEkwTXpZeE5qQTVNakk1TVRZekxqZzBNamc9IiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iaGFyYXRtYXRyaW1vbnkuY29tXC8iLCJuYmYiOjE2MDkyMjkxNjMsImV4cCI6MTYxMTgyMTE2MywiZGF0YSI6eyJpZCI6IkU1NjUyNDM2IiwiZW5jbWF0cmlpZCI6InMwJTJGeGVsZk9BcCUyQmcyeldEeGtLWVQlMkJmRTlsWmtUcWpLVnJSU2lCTml6dFElM0QiLCJlbmNwd2QiOiJtMUclMkZOY3BEa0d0R2lPS2NDemRpaWJFdmRFYXdNJTJCRVNlckdOS3VJZnlyayUzRCJ9fQ.eR0YFMGm0d0PrQnRHOs6fIR2sVctxFwLn3HSRGNT0tQ&APIVERSION=1.2&TIMECREATED=2020-10-24 17:18:12&UIVERSION=NEW&WEBPFLAG=1",
  "method": "POST",
  "mode": "cors"
}).then (res => res.json ()).then (res => console.log(res))
