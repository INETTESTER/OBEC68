import http from 'k6/http';

export  function getNewsByProvinceID() {
  const url = 'https://api-obec68.thaijobjob.com/api/news/getNewsByProvinceID';
  const payload = JSON.stringify({
    ProvinceID: 30,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 300000
  };

  const res = http.post(url, payload, params);
  //console.log(res.body);
  return res
}
