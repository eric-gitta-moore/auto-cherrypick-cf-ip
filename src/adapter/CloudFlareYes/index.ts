export default function () {
  return fetch("https://api.hostmonit.com/get_optimization_ip", {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en",
      "content-type": "application/json",
      "sec-ch-ua":
        '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      Referer: "https://stock.hostmonit.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: '{"key":"iDetkOys"}',
    method: "POST",
  }).then((e) => e.json());
}
