const fetch = require ('node-fetch');

fetch("https://mg.bharatmatrimony.com/search/matches/E5789346", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://matches.keralamatrimony.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "APPVERSIONCODE=0&SORT=1&REFINE=0&APPVERSION=6.1&ID=E5789346&LIMIT=20&BLOCKED=1&IGNORED=1&START=0&EXCLUDEIDS=E5543284&SHORTLISTED=1&VIEWED=1&CONTACTED=1&ALLRESULTS=0&PRIMETAG=null&ANCESTRALSTATE=&APPTYPE=300&Lang=en&ENCID=f9347f8a77a55b80fb8b002912de2e864&TOKENID=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjI5OTU5OTIsImp0aSI6IlJUVTNPRGt6TkRZeE5qSXlPVGsxT1RreUxqTTNPVGs9IiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iaGFyYXRtYXRyaW1vbnkuY29tXC8iLCJuYmYiOjE2MjI5OTU5OTIsImV4cCI6MTYyNTU4Nzk5MiwiZGF0YSI6eyJpZCI6IkU1Nzg5MzQ2IiwiZW5jbWF0cmlpZCI6IlFpd3FjVmh4YWJvdzZjSVh3Y0N0aHhiTmo3ejFXYVlrRWVwbzU5YkR2TW8lM0QiLCJlbmNwd2QiOiIzSlU5bGtIN1EyVnZBdmY3JTJGaHZDMkF4cHFBMVJsb1ZiQnZrWU9PUXlpb0klM0QifX0.CFdFlAcY5mcc2GdsSO4gZa6F-HoWHfHRjp9kvSMuDCQ&APIVERSION=1.2&TIMECREATED=2021-01-17 19:40:35&UIVERSION=NEW&WEBPFLAG=1",
  "method": "POST",
  "mode": "cors"
})
.then(res => res.text())
.then(res => console.log(res));
