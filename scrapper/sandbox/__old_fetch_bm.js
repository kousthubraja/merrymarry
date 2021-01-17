const fetch = require ('node-fetch');
var fs = require ('fs');
const https = require ('https');

const download = function (uri, filename, callback) {
  const file = fs.createWriteStream (filename);
  const request = https.get (uri, function (response) {
    response.pipe (file);
  });
};

function handleResponse (res) {
  res.SEARCHRES.PROFILE.map (p => {
    let photoUrl = p.PHOTOS[0];
    // console.log (p.NAME, p.AGE, p.OCCUPATION, photoUrl);
    if (photoUrl !== undefined && photoUrl.includes ('.webp')) {
      let photoPath =
        'photos/' + p.AGE + '_' + p.NAME + '_' + p.MATRIID + '.png';
      download (photoUrl, photoPath, function () {});
    }
  });
}

var failedPages = [];

async function run () {
  for (var start = 4540; start <= 10000; start += 20) {
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

// Promise.all(promises)
// .then(res => res.json())
// .catch(function handleError(error) {
//   console.log("Error" + error);
// });;

run ();
