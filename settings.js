const chalk = require('chalk');
const fs = require('fs');
global.diky_key = ''; // bikin apikey disini https://api.diky.my.id/
global.grupWa = 'https://chat.whatsapp.com/H7c8XGQ69ud7roETPsdiid';
global.linkRestApi = 'https://api.diky.my.id/';
global.openaiKey = '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';
global.hituet = 0;
global.gopayno = 'YG BENEEERRR';
global.danano = 'YG BNR';
global.shopeepayno = 'SEMUA SCAN QR AJJ';
global.creator = '6289518024098@s.whatsapp.net';
global.thumb = fs.readFileSync(`./image/thumb.png`);
global.qrisdonate = fs.readFileSync(`./image/qris.jpg`);
global.fake = `© LUXZX000`;
global.packname = `©`;
global.author = `LUXZZ000`;
global.antilink = false;
global.antiwame = false;
global.autodltt = false;
global.autosticker = false;
global.ownerNomor = '6289518024098';
global.ownerName = 'LUXZZZ00';
global.ownerNumber = '6289518024098';
global.cek1 = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '60',
  '61',
  '62',
  '63',
  '64',
  '65',
  '66',
  '67',
  '68',
  '69',
  '70',
  '71',
  '72',
  '73',
  '74',
  '75',
  '76',
  '77',
  '78',
  '79',
  '80',
  '81',
  '82',
  '83',
  '84',
  '85',
  '86',
  '87',
  '88',
  '89',
  '90',
  '91',
  '92',
  '93',
  '94',
  '95',
  '96',
  '97',
  '98',
  '99',
  '100',
];
global.mess = {
  wait: 'Wait, Please be patient',
  succes: 'Succes !!!',
  admin: 'Group Admin Special Features!!!',
  botAdmin: 'Bot harus menjadi admin !!!',
  owner: 'Owner Special Features!!!',
  creator: 'Kamu bukan pemilik bot !!!.',
  group: 'Features Used Only For Groups!!!',
  private: 'Features Used Only For Private Chat!!!',
  bot: 'Bot Number User Special Features!!!',
  error: 'Error , Please Chat Owner...',
  premium:
    'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
};

global.bapak = [
  'Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs',
  'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda',
  'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v',
  'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID',
];

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
