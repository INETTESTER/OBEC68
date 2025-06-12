import http from 'k6/http';

export function getMajorArea() {
  const url = 'https://api-obec68.thaijobjob.com/api/customers/getAllArea';

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 300000
  };

  const res = http.get(url, params);
  console.log(res.body);
  return res;
}
