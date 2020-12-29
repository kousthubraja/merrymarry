const fetch = require ('node-fetch');
var fs = require ('fs');
const https = require ('https');

const outfile = 'kr_profiles.json';
const MID = 'E5710033';

function handleResponse (res) {
  // let profilesInPage = res.SEARCHRES.PROFILE.filter(p => {
  //   p.PHOTOS.length > 0 
  // })
  // profilesInPage.map(p => console.log(p.PHOTOS.length))

  let profilesInPage = res.SEARCHRES.PROFILE;

  var allProfiles = JSON.parse(fs.readFileSync(outfile, 'utf8'));
  allProfiles = allProfiles.concat(profilesInPage);
  var json = JSON.stringify(allProfiles);
  fs.writeFile(outfile, json, 'utf8', ()=>{});
}

var failedPages = [];

async function run () {
  for (var start = 0; start <= 10000; start += 20) {
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
      body: 'START=' + start + '&APPVERSIONCODE=0&SORT=1&REFINE=0&APPVERSION=6.1&ID='+MID+'&LIMIT=20&BLOCKED=1&IGNORED=1&EXCLUDEIDS=null&SHORTLISTED=1&VIEWED=1&CONTACTED=1&ALLRESULTS=0&PRIMETAG=null&APPTYPE=300&Lang=en&ENCID=0fbe846002466f5afe6183e2484a6e5a3&TOKENID=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDkyMzU0MjAsImp0aSI6IlJUVTNNVEF3TXpNeE5qQTVNak0xTkRJd0xqRXlNdz09IiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iaGFyYXRtYXRyaW1vbnkuY29tXC8iLCJuYmYiOjE2MDkyMzU0MjAsImV4cCI6MTYxMTgyNzQyMCwiZGF0YSI6eyJpZCI6IkU1NzEwMDMzIiwiZW5jbWF0cmlpZCI6Ilh2U0wwcG1RUm8lMkZJTjFSYyUyRklDNUxVSEhySExISWVFRXhJeEN2aEtWOVdjJTNEIiwiZW5jcHdkIjoiM0pVOWxrSDdRMlZ2QXZmNyUyRmh2QzJBeHBxQTFSbG9WYkJ2a1lPT1F5aW9JJTNEIn19.ayMMd2gZ9_DEpEzyQeXZM9cTwlSPHn_i5PGk24vsb3M&APIVERSION=1.2&TIMECREATED=2020-11-24 22:06:11&UIVERSION=NEW&WEBPFLAG=1',
      method: 'POST',
      mode: 'cors',
    })
      .then (res => res.json ())
      .then (res => {
        console.log ('[+] Start: ', start);
        handleResponse (res);
      })
      .catch (e => {
        failedPages.push (start);
        console.log (e);
      });
  }
}

run ();