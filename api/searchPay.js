import http from 'k6/http';

export function searchPay() {
  const url = 'https://api-obec68.thaijobjob.com/api/searchpay/pay';
  const payload = JSON.stringify({
    Form: {
      CustomerID: '1102002481999',
      birth_date: '08-01-2539',
      telmobile: '0982856421',
    },
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 300000
  };

  const res = http.post(url, payload, params);
  //console.log(res.body);
  return res;
}
