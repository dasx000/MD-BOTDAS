const chalk = require('chalk');
const fs = require('fs');
global.diky_key = 'diky'; //https://api.diky.my.id/
global.grupWa = 'https://u.diky.my.id/gc';
global.gcCode = 'CfF9ehZcKrMJl8EXpYd11Q';
global.footer = `\n\n------------------------------------\n\nTutor install bot sekali klik : https://u.diky.my.id/yt\n\nGrup Bot: https://u.diky.my.id/gc\n\n`;
global.linkRestApi = 'https://api.diky.my.id/';
global.openaiKey = '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';
global.hituet = 0;
global.gopayno = '6285768966412';
global.danano = '6285768966412';
global.shopeepayno = '6285768966412';
global.creator = '6285216024226@s.whatsapp.net';
global.thumb = fs.readFileSync(`./image/thumb.png`);
global.qrisdonate = fs.readFileSync(`./image/qris.jpg`);
global.fake = `© DASX000`;
global.packname = `©`;
global.author = `DASX000`;
global.antilink = false;
global.antiwame = false;
global.autodltt = false;
global.autosticker = false;
global.ownerNomor = '6285768966412';
global.ownerName = 'dasx000';
global.ownerNumber = '6285768966412@s.whatsapp.net';
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
