const fetch = require ('node-fetch');
var fs = require ('fs');
const https = require ('https');

function handleResponse (res) {
  // let profilesInPage = res.SEARCHRES.PROFILE.filter(p => {
  //   p.PHOTOS.length > 0 
  // })
  // profilesInPage.map(p => console.log(p.PHOTOS.length))

  let profilesInPage = res.SEARCHRES.PROFILE;

  var allProfiles = JSON.parse(fs.readFileSync('profiles.json', 'utf8'));
  allProfiles = allProfiles.concat(profilesInPage);
  var json = JSON.stringify(allProfiles);
  fs.writeFile('profiles.json', json, 'utf8', ()=>{});
}

var failedPages = [];

async function run () {
  for (var start = 0; start <= 10000; start += 20) {
    await fetch ('https://mg.bharatmatrimony.com/search/matches/E5652436', {
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
      body: 'START=' +
        start +
        '&APPVERSIONCODE=0&SORT=1&REFINE=0&APPVERSION=6.1&ID=E5652436&LIMIT=20&BLOCKED=1&IGNORED=1&EXCLUDEIDS=null&SHORTLISTED=1&VIEWED=1&CONTACTED=1&ALLRESULTS=8350&PRIMETAG=null&APPTYPE=300&Lang=en&ENCID=c7e3f1d5f6d61564aff22dd13f67b2f32&TOKENID=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDU4ODg1NTcsImp0aSI6IlJUVTJOVEkwTXpZeE5qQTFPRGc0TlRVM0xqa3dNZz09IiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iaGFyYXRtYXRyaW1vbnkuY29tXC8iLCJuYmYiOjE2MDU4ODg1NTcsImV4cCI6MTYwODQ4MDU1NywiZGF0YSI6eyJpZCI6IkU1NjUyNDM2IiwiZW5jbWF0cmlpZCI6InMwJTJGeGVsZk9BcCUyQmcyeldEeGtLWVQlMkJmRTlsWmtUcWpLVnJSU2lCTml6dFElM0QiLCJlbmNwd2QiOiJtMUclMkZOY3BEa0d0R2lPS2NDemRpaWJFdmRFYXdNJTJCRVNlckdOS3VJZnlyayUzRCJ9fQ.2vFRxfkYcFvu44urBCpMlD9GjUIk_Mkt_Uok2v_wcSQ&APIVERSION=1.2&TIMECREATED=2020-10-24 17:18:12&UIVERSION=NEW&WEBPFLAG=1',
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