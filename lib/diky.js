const cheerio = require('cheerio');
const fs = require('fs');
const https = require('https');
const fetch = require('node-fetch');

// fungsi ini untuk mendapatkan header yang dibutuhkan untuk login
const getHeader = async () => {
  await fetch('https://siakadu.unila.ac.id/siakad/list_mahasiswa', {
    credentials: 'include',
    // method: 'POST',
    // headers: h,
    agent: new https.Agent({
      rejectUnauthorized: false,
    }),
  })
    .then((result) => {
      let res = result.headers.raw()['set-cookie'][0].split(';')[0];
      console.log(res);
      fs.writeFileSync('cookie.json', JSON.stringify(res));
      let h = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent':
          'Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1',
        Host: 'siakadu.unila.ac.id',
        'Content-Length': '581',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        // SIAKAD_CLOUD_ACCESS_UNILA: 'o46f58ji4d8qmvs7eqmua0ie82',
        Cookie: res,
      };

      console.log(h);
      return h;
    })
    .catch((err) => {
      console.log(err);
    });
  // return h;
  // }; return h;
};

const cari_mahasiswa = async (q, f = 'm.nim') => {
  const h = getHeader();
  console.log(h);
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
      credentials: 'include',
      headers: h,
      body: params,
      redirect: 'follow',
      agent: new https.Agent({
        rejectUnauthorized: false,
      }),
    }
  );
  // convert response to text
  // console.log(response.headers.get('set-cookie'));
  const res = await response.text();

  console.log(res);
  // gambil element td yang ada dalam element table

  const $ = cheerio.load(res);
  const table = $('form table tbody').html();
  // fs.writeFileSync('login.html', res);
  fs.writeFileSync('result.html', String(table));
  // console.log(table);

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
  console.log(tr);
  return tr;
};

//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=__=_= INI ADALAH FUNGSI UNTUK DOWNLOAD SERTIFIKAT_=_=_=__=_=_=_=__=_=_=_=__=_=_=_=__=_=_=_=__=_=_=_=_
const esertifikat = async (npm) => {
  // url tujuan
  const url = 'https://uptbahasa.unila.ac.id/eSertifikat/';

  // membuat parameter untuk body
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
    // ini digunakan untuk mengabaikan sertifikat ssl
    agent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  // convert response to text : hasilnya berupa html dari url tujuan
  const res = await response.text();

  // gambil element td yang ada dalam element table
  const $ = cheerio.load(res);
  const name = $('.modal-header').html().trim();
  const tr = [];
  const trLength = $('table tbody tr').length;

  // jika tidak ada data maka return false
  if (trLength < 1) return false;

  // jika ada data maka push ke array tr
  $('table tbody tr').each((i, el) => {
    tr.push({
      no: i + 1,
      date: $(el).find('td:nth-child(2)').text(),
      score: $(el).find('td:nth-child(3)').text(),
      link: url + $(el).find('td:nth-child(4) a').attr('href'),
    });
  });

  return { name, td: tr };
};
//=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=__=_=_=_=__=_=_=_=_=_=_=_=__=_=_=_=__=_=_=_=__=_=_=_=__=_=_=_=__=_=_=_=_

///////////////////////////
module.exports = { cari_mahasiswa, esertifikat };
// const request = require('request');
