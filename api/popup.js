import http from 'k6/http';

export function popup() {
  const url = 'https://api-obec68.thaijobjob.com/api/news/getPopup';

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 300000
  };

  const res = http.get(url, params);
  //console.log(res.body);
  return res;
}
