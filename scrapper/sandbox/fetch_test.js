const fetch = require ('node-fetch');

fetch("https://mg.bharatmatrimony.com/search/matches/E5789346", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://matches.keralamatrimony.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "APPVERSIONCODE=0&SORT=1&REFINE=0&APPVERSION=6.1&ID=E5789346&LIMIT=20&BLOCKED=1&IGNORED=1&START=0&EXCLUDEIDS=null&SHORTLISTED=1&VIEWED=1&CONTACTED=1&ALLRESULTS=0&PRIMETAG=null&ANCESTRALSTATE=&APPTYPE=300&Lang=en&ENCID=219fc574414a69dfa0d3ef959a8db1336&TOKENID=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTA4OTI5MjcsImp0aSI6IlJUVTNPRGt6TkRZeE5qRXdPRGt5T1RJM0xqSTNPVGs9IiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iaGFyYXRtYXRyaW1vbnkuY29tXC8iLCJuYmYiOjE2MTA4OTI5MjcsImV4cCI6MTYxMzQ4NDkyNywiZGF0YSI6eyJpZCI6IkU1Nzg5MzQ2IiwiZW5jbWF0cmlpZCI6IlFpd3FjVmh4YWJvdzZjSVh3Y0N0aHhiTmo3ejFXYVlrRWVwbzU5YkR2TW8lM0QiLCJlbmNwd2QiOiIzSlU5bGtIN1EyVnZBdmY3JTJGaHZDMkF4cHFBMVJsb1ZiQnZrWU9PUXlpb0klM0QifX0.wEkcvsBkriKvnN89ucmkP-hRZosgKAQz1kMz_VClT4M&APIVERSION=1.2&TIMECREATED=2021-01-17 19:40:35&UIVERSION=NEW&WEBPFLAG=1",
  "method": "POST",
  "mode": "cors"
}).then(res => res.text())
  .then(res => console.log(res));