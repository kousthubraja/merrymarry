const fetch = require ('node-fetch');
var fs = require ('fs');
const https = require ('https');

const outfile = 'ashi_profiles.json';
const MID = 'E5454228';

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
  for (var start = 1460; start <= 10000; start += 20) {
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
      body: 'START=' + start + '&APPVERSIONCODE=0&SORT=1&REFINE=0&APPVERSION=6.1&ID='+MID+'&LIMIT=20&BLOCKED=1&IGNORED=1&EXCLUDEIDS=null&SHORTLISTED=1&VIEWED=1&CONTACTED=1&ALLRESULTS=0&PRIMETAG=null&ANCESTRALSTATE=&APPTYPE=300&Lang=en&ENCID=f538ee0ee8eff17b10c4ce1486dac2007&TOKENID=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDk0MjE5NTcsImp0aSI6IlJUVTBOVFF5TWpneE5qQTVOREl4T1RVM0xqa3pNalk9IiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iaGFyYXRtYXRyaW1vbnkuY29tXC8iLCJuYmYiOjE2MDk0MjE5NTcsImV4cCI6MTYxMjAxMzk1NywiZGF0YSI6eyJpZCI6IkU1NDU0MjI4IiwiZW5jbWF0cmlpZCI6IjVtQVFTQXFwSE90MWtCY1ElMkJSV2ZRZ2RFZzdsNVhpZ1dmVlpaNUhjazYwQSUzRCIsImVuY3B3ZCI6ImVPWmw5Nm9XNWY1bU00bzF1cmhvdGdPeDRCaGJaejhaSmZ4QkwyclVtaDQlM0QifX0.jTrH7I0SSQruTS7R2FssQ9p0iB1Iq7YgfCULvNNwhRc&APIVERSION=1.2&TIMECREATED=2020-06-27 19:27:43&UIVERSION=NEW&WEBPFLAG=1',
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