export default function () {
  return fetch("https://api.hostmonit.com/get_optimization_ip", {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en",
      "content-type": "application/json",
      Referer: "https://stock.hostmonit.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: '{"key":"iDetkOys"}',
    method: "POST",
  }).then((e) => e.json());
}
