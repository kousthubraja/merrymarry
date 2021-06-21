const fetch = require ('node-fetch');

const db = require('./db');

function writeBatchToDb (user, res) {
  let profilesInPage = res.SEARCHRES.PROFILE;

  for (let i=0; i < profilesInPage.length; i++){
    profilesInPage[i]['_user'] = user;
  }
  db.insertProfiles (profilesInPage);
}

var failedPages = [];

async function scrap (user, MID) {
  for (var start = 0; start <= 340000; start += 20) {
    await fetch ('https://mg.bharatmatrimony.com/search/matches/'+MID, {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      referrer: 'https://matches.keralamatrimony.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      // "body": "APPVERSIONCODE=0&SORT=1&REFINE=0&APPVERSION=6.1&ID=" + MID + "&LIMIT=20&BLOCKED=1&IGNORED=1&START=" + start + "&EXCLUDEIDS=null&SHORTLISTED=1&VIEWED=1&CONTACTED=1&ALLRESULTS=0&PRIMETAG=null&ANCESTRALSTATE=&APPTYPE=300&Lang=en&ENCID=cc2dd4eb7a8c46b35d2a0f3a776a7e8e1&TOKENID=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTk1OTU5MDEsImp0aSI6IlJUVTVNekF4TkRNeE5qRTVOVGsxT1RBeExqRXpNakU9IiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iaGFyYXRtYXRyaW1vbnkuY29tXC8iLCJuYmYiOjE2MTk1OTU5MDEsImV4cCI6MTYyMjE4NzkwMSwiZGF0YSI6eyJpZCI6IkU1OTMwMTQzIiwiZW5jbWF0cmlpZCI6IklTNnhoUjh4ZGxDaGwzUzR5V2tXQjJjTU5nR3pYMnc2MTE1SUpMeTBzVTAlM0QiLCJlbmNwd2QiOiJpTk9ncm44eDhlWnduNW1yVDhyYUcyalZObEFpNVdGR3hveFNpNmJTRklFJTNEIn19._o5gQXSgbrLTOeDaJ0h7rbrAdHLwYCr0JLjr5CJq1Aw&APIVERSION=1.2&TIMECREATED=2021-04-28 12:07:09&UIVERSION=NEW&WEBPFLAG=1",
      "body": "APPVERSIONCODE=0&SORT=1&REFINE=0&APPVERSION=6.1&ID=" + MID + "&LIMIT=20&BLOCKED=1&IGNORED=1&START=" + start + "&EXCLUDEIDS=E5543284&SHORTLISTED=1&VIEWED=1&CONTACTED=1&ALLRESULTS=0&PRIMETAG=null&ANCESTRALSTATE=&APPTYPE=300&Lang=en&ENCID=f9347f8a77a55b80fb8b002912de2e864&TOKENID=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjI5OTU5OTIsImp0aSI6IlJUVTNPRGt6TkRZeE5qSXlPVGsxT1RreUxqTTNPVGs9IiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iaGFyYXRtYXRyaW1vbnkuY29tXC8iLCJuYmYiOjE2MjI5OTU5OTIsImV4cCI6MTYyNTU4Nzk5MiwiZGF0YSI6eyJpZCI6IkU1Nzg5MzQ2IiwiZW5jbWF0cmlpZCI6IlFpd3FjVmh4YWJvdzZjSVh3Y0N0aHhiTmo3ejFXYVlrRWVwbzU5YkR2TW8lM0QiLCJlbmNwd2QiOiIzSlU5bGtIN1EyVnZBdmY3JTJGaHZDMkF4cHFBMVJsb1ZiQnZrWU9PUXlpb0klM0QifX0.CFdFlAcY5mcc2GdsSO4gZa6F-HoWHfHRjp9kvSMuDCQ&APIVERSION=1.2&TIMECREATED=2021-01-17 19:40:35&UIVERSION=NEW&WEBPFLAG=1",
      method: 'POST',
      mode: 'cors',
    })
      .then (res => res.json ())
      .then (res => {
        console.log ('[+] Start: ', start);
        writeBatchToDb (user, res);
      })
      .catch (e => {
        failedPages.push (start);
        console.log (e);
        console.log('Failed pages: ' + failedPages);
      });
  }
}

scrap ('kr', 'E5789346');