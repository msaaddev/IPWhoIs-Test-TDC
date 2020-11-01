// importing axios in the file
const axios = require('axios');

// an asychronous function to make the API call
(async () => {
    await axios
        .get('http://ipwhois.app/json/')
        .then(({ data }) => console.log(data))
        .catch(err => console.log(err));
})();

/*

RESPONSE

{
  ip: '8.8.4.4',
  success: true,
  type: 'IPv4',
  continent: 'Asia',
  continent_code: 'AS',
  country: 'Pakistan',
  country_code: 'PK',
  country_flag: 'https://cdn.ipwhois.io/flags/pk.svg',
  country_capital: 'Islamabad',
  country_phone: '+92',
  country_neighbours: 'CN,AF,IR,IN',
  region: 'Punjab',
  city: 'Lahore',
  latitude: '31.5546061',
  longitude: '74.3571581',
  asn: 'AS45595',
  org: 'Pakistan Telecommuication company limited',
  isp: 'Pakistan Telecommuication company limited',
  timezone: 'Asia/Karachi',
  timezone_name: 'Pakistan Standard Time',
  timezone_dstOffset: '0',
  timezone_gmtOffset: '18000',
  timezone_gmt: 'GMT +5:00',
  currency: 'Pakistani Rupee',
  currency_code: 'PKR',
  currency_symbol: 'Re (мн. Rs)',
  currency_rates: '160.45',
  currency_plural: 'Pakistani rupees',
  completed_requests: 22
}

*/
