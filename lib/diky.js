const cheerio = require('cheerio');
const fs = require('fs');
const https = require('https');
const axios = require('axios');
const fetch = require('node-fetch');

const h = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'User-Agent':
    'Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1',
  Host: 'siakadu.unila.ac.id',
  'Content-Length': '581',
  Accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'Accept-Encoding': 'gzip, deflate, br',
  // SIAKAD_CLOUD_ACCESS_UNILA: 'o46f58ji4d8qmvs7eqmua0ie82',
  Cookie: 'SIAKAD_CLOUD_ACCESS_UNILA=o46f58ji4d8qmvs7eqmua0ie82',
};

const cari_mahasiswa = async (q, f = 'm.nim') => {
  // const params = new URLSearchParams();
  const params = new URLSearchParams(
    Object.entries({
      // example1_length: '50',
      act: 'filterall',
      cfilter: f,
      key: q,
      // act: 'limit',
      sessdata:
        'dlpGTFN3TXhGSVgveXBCMUswMDZVKzJzSEJpS2cvaW90WUtJaTlDa015R3ZrbVFzVXZyZnZhbVpSUkZjdUhENzNaTno3ems1SUcxWnIxQjVRTDNuVGpCVUludzFuK0ZMTkRvUlF6V1BiSTV6UE1NVE1rMmNjYjhCWGplM3IxbFZONnZxY2YzOFZNRlFVUitVYllXQktaa1FNc1prVFBJTVQ4b2lMNmNGS0xpbUFqWWlKdVNucDdzK09BckM0cnFOL0dKak5XZ0UyL0dXN3FsQXBlbVZHcUZnSlRlRDcwMGQrdG85YjRKYnJKY3pMTm5xSVcvcTNkcFR0YmpQbHk5Z0lDM2p6cXA0dSs0OEFBaENFN2lqSGZYQzcrbHBrYWRCY2djWUFzYU02WEZ2UkRpRDBTREJxblhXV0MyU05GV0l2S0NTc2lRZDRFcjR3SFhXbUsxMUd0Wm1GV2k0RmpJdUI2ajRObHFTQWlmZ1JOdDlFeExyNUI5Y0RiZEVhN0ViS2pGQ24vL01jWVE2dUVCNjdsSDVkdmkzRHY0UTQ4Zi8vcHJyL2ZnRg==',
    })
  );
  const response = await fetch(
    'https://siakadu.unila.ac.id/siakad/list_mahasiswa',
    {
      method: 'POST',
      headers: h,
      body: params,
      redirect: 'follow',
      agent: new https.Agent({
        rejectUnauthorized: false,
      }),
    }
  );
  // convert response to text
  const res = await response.text();

  // gambil element td yang ada dalam element table

  const $ = cheerio.load(res);
  const table = $('form table tbody').html();
  fs.writeFileSync('login.html', res);
  fs.writeFileSync('result.html', String(table));
  console.log(table);

  const tr = [];
  $('form table tbody tr').each((i, el) => {
    tr.push(
      $(el)
        .find('td')

        .map((i, el) => $(el).text())
        .get()
    );
  });
  // console.log(tr);
  // PUSH TO JSON FILE
  fs.writeFileSync('tr.json', JSON.stringify(tr));
  return tr;
};

//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=__=_=_=_=__=_=_=_=_=_=_=_=__=_=_=_=__=_=_=_=__=_=_=_=__=_=_=_=__=_=_=_=_
const esertifikat = async (npm) => {
  const url = 'https://uptbahasa.unila.ac.id/eSertifikat/';
  const params = new URLSearchParams(
    Object.entries({
      npm: npm,
    })
  );
  const response = await fetch(url, {
    method: 'POST',
    // headers: h,
    body: params,
    redirect: 'follow',
    agent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
  // convert response to text
  const res = await response.text();

  // gambil element td yang ada dalam element table

  const $ = cheerio.load(res);
  const name = $('.modal-header').html().trim();
  const tr = [];
  const trLength = $('table tbody tr').length;
  if (trLength < 1) return false;
  $('table tbody tr').each((i, el) => {
    tr.push({
      no: i + 1,
      date: $(el).find('td:nth-child(2)').text(),
      score: $(el).find('td:nth-child(3)').text(),
      link: url + $(el).find('td:nth-child(4) a').attr('href'),
    });
  });

  return { name, tr };
};
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=__=_=_=_=__=_=_=_=_=_=_=_=__=_=_=_=__=_=_=_=__=_=_=_=__=_=_=_=__=_=_=_=_

// esertifikat('1814161001');
///////////////////////////
module.exports = { cari_mahasiswa, esertifikat };
