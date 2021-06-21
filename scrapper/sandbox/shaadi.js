const fetch = require ('node-fetch');

fetch("https://web-api.shaadi.com/proxy/web/v1/api/search/2SH96725541?search_type=pagination&results_id=search:5d5d928fa51d794bc5d87f83b857ed8d&viewed=N&format=list&per_page=20&page=6&changes=%7B%22page%22:%226%22%7D&isMobile=true&_t=1611170753531&request_id=eyJzZWFyY2hfdHlwZSI6InBhZ2luYXRpb24iLCJyZXN1bHRzX2lkIjoic2VhcmNoOjVkNWQ5MjhmYTUxZDc5NGJjNWQ4N2Y4M2I4NTdlZDhkIiwidmlld2VkIjoiTiIsImZvcm1hdCI6Imxpc3QiLCJwZXJfcGFnZSI6IjIwIiwicGFnZSI6NiwiY2hhbmdlcyI6eyJwYWdlIjo2fSwiaXNNb2JpbGUiOnRydWUsIl90IjoxNjExMTcwNzUzNTMxfQ%3D%3D&file_extension=webp&preferred_count=1580&xyz_serve=true", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-access-token": "5CAF41D62364D5B41A893ADC1A9DD5D41611170004|2SH96725541|",
    "x-app-key": "69c3f1c1ea31d60aa5516a439bb65949cf3f8a1330679fa7ff91fc9a5681b564",
    "x-device-browser-name": "chrome",
    "x-device-browser-version": "87",
    "x-device-id": "chrome",
    "x-device-os": "Mac/iOS",
    "x-device-platform": "mobile",
    "x-platform": "wap"
  },
  "referrer": "https://my.malayaleeshaadi.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
})
.then(res => res.text())
.then(res => console.log(res));