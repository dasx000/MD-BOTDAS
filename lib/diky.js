const request = require('request-promise');
const fs = require('fs');

// ambil data html dari url

const getHTML = async () => {
  try {
    const html = await request.post(
      'https://siakadu.unila.ac.id/siakad/login',
      {
        form: {
          sessdata:
            'dlpGTFN3TXhGSVgveXBCMUswMDZVKzJzSEJpS2cvaW90WUtJaTlDa015R3ZrbVFzVXZyZnZhbVpSUkZjdUhENzNaTno3ems1SUcxWnIxQjVRTDNuVGpCVUludzFuK0ZMTkRvUlF6V1BiSTV6UE1NVE1rMmNjYjhCWGplM3IxbFZONnZxY2YzOFZNRlFVUitVYllXQktaa1FNc1prVFBJTVQ4b2lMNmNGS0xpbUFqWWlKdVNucDdzK09BckM0cnFOL0dKak5XZ0UyL0dXN3FsQXBlbVZHcUZnSlRlRDcwMGQrdG85YjRKYnJKY3pMTm5xSVcvcTNkcFR0YmpQbHk5Z0lDM2p6cXA0dSs0OEFBaENFN2lqSGZYQzcrbHBrYWRCY2djWUFzYU02WEZ2UkRpRDBTREJxblhXV0MyU05GV0l2S0NTc2lRZDRFcjR3SFhXbUsxMUd0Wm1GV2k0RmpJdUI2ajRObHFTQWlmZ1JOdDlFeExyNUI5Y0RiZEVhN0ViS2pGQ24vL01jWVE2dUVCNjdsSDVkdmkzRHY0UTQ4Zi8vcHJyL2ZnRg==',
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent':
            'Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1',
          Host: 'siakadu.unila.ac.id',
          Referer: 'https://siakadu.unila.ac.id/gate/login',
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          Cookie: 'SIAKAD_CLOUD_ACCESS_UNILA=o46f58ji4d8qmvs7eqmua0ie82',
        },
        simple: false,
      }
    );
    fs.writeFileSync('login.html', html);
    return html;
  } catch (error) {
    console.log(error);
  }
};

//export moduls
module.exports = { getHTML };
