require('./settings'); //
const { modul } = require('./module');
const {
  baileys,
  boom,
  chalk,
  fs,
  figlet,
  FileType,
  path,
  pino,
  process,
  PhoneNumber,
} = modul;
const { Boom } = boom;
const {
  default: makeWaSocket,
  useMultiFileAuthState,
  DisconnectReason,
  jidNormalizedUser,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
  delay,
} = baileys;
const { color, bgcolor } = require('./lib/color');
const colors = require('colors');
const { uncache, nocache } = require('./lib/loader');
// const { state, saveCreds } = await useMultiFileAuthState('./session');
// const { state } = useSingleFileAuthState(`./session.json`);
const { start } = require('./lib/spinner');
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
} = require('./lib/exif');
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  sleep,
  reSize,
} = require('./lib/myfunc');

const owner = JSON.parse(fs.readFileSync('./database/owner.json'));

const store = makeInMemoryStore({
  logger: pino().child({ level: 'silent', stream: 'store' }),
});

require('./das.js');
nocache('../das.js', (module) =>
  console.log(
    color('[ UPDATE ]', 'cyan'),
    color(`'${module}'`, 'green'),
    'File Is Update!!!'
  )
);
require('./index.js');
nocache('../index.js', (module) =>
  console.log(
    color('[ UPDATE ]', 'cyan'),
    color(`'${module}'`, 'green'),
    'File Is Update!!!'
  )
);

//// =_=_=_=_=_=_=_=_=_=_=_FUNCTION MENJALANKAN KONEKSI=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_= //
const dasBot = async () => {
  const { state, saveCreds } = await useMultiFileAuthState(`./session`);
  const { version, isLatest } = await fetchLatestBaileysVersion();
  const das = makeWaSocket({
    version,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    browser: ['DASBOT Multi Device', 'Safari', '1.0.0'],
    auth: state,
  });

  das.ev.on('message.delete', async (anu) => {
    console.log('ANTI DELETE');
    das.sendMessage('6285216024226@s.whatsapp.net', {
      text: JSON.stringify(anu, null, 2),
    });
  });

  store.bind(das.ev);
  das.ev.on('creds.update', saveCreds);
  console.log(
    color(
      figlet.textSync(`DASX000`, {
        font: 'Standard',
        horizontalLayout: 'default',
        vertivalLayout: 'default',
        whitespaceBreak: false,
      }),
      'green'
    )
  );

  das.ws.on('CB:Blocklist', (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace('c.us', 's.whatsapp.net'));
    }
  });

  das.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator'];
    const idCall = json.content[0].attrs['call-id'];
    const Id = json.attrs.id;
    const T = json.attrs.t;
    das.sendNode({
      tag: 'call',
      attrs: {
        from: '6285768966412@s.whatsapp.net',
        id: Id,
        t: T,
      },
      content: [
        {
          tag: 'reject',
          attrs: {
            'call-creator': callerId,
            'call-id': idCall,
            count: '0',
          },
          content: null,
        },
      ],
    });

    /* AUTO BLOCK CALLER ID 
if (json.content[0].tag == 'offer') {
let qutsnya = await das.sendContact(callerId, owner)
await das.sendMessage(callerId, { text: `Sistem Otomatis Block!!!\nJangan Menelpon Bot!!!\nSilahkan Hubungi Owner Untuk Dibuka!!!`}, { quoted : qutsnya })
await sleep(8000)
await das.updateBlockStatus(callerId, "block")
}

 */
  });

  das.ev.on('messages.upsert', async (chatUpdate) => {
    try {
      kay = chatUpdate.messages[0];

      if (!kay.message) return;
      kay.message =
        Object.keys(kay.message)[0] === 'ephemeralMessage'
          ? kay.message.ephemeralMessage.message
          : kay.message;
      if (kay.key && kay.key.remoteJid === 'status@broadcast') return;
      // if (das.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
      if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return;
      m = smsg(das, kay, store);

      //menjalankan function dalam das.js
      require('./das')(das, m, chatUpdate, store);
    } catch (err) {
      console.log(err);
    }
  });

  das.ev.on('group-participants.update', async (anu) => {
    console.log(anu);
    // try {
    // let metadata = await das.groupMetadata(anu.id)
    // let participants = anu.participants
    // for (let num of participants) {
    // try {
    // ppuser = await das.profilePictureUrl(num, 'image')
    // } catch {
    // ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    // }
    // try {
    // ppgroup = await das.profilePictureUrl(anu.id, 'image')
    // } catch {
    // ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    // }

    /* UCAPAN WELCOME
if (anu.action == 'add') {
das.sendMessage(anu.id, { text : `*Halo @${num.split("@")[0]}* 😱🗿`, mentions : [num]},{ quoted : {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "status@broadcast" }) 
},
"message": {
"pollCreationMessage": {
"name": `Welcome Banh👋😁`,
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM DARI KAYLA BOT"
	}
],
"selectableOptionsCount": 5
}}}})
} else if (anu.action == 'remove') {
das.sendMessage(anu.id, { text : `*Selamat tinggal @${num.split("@")[0]}* 👋🗿`, mentions : [num]},{ quoted : {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "status@broadcast" }) 
},
"message": {
"pollCreationMessage": {
"name": `Sayonara👋`,
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM DARI KAYLA BOT"
	}
],
"selectableOptionsCount": 5
}}}})
}
*/

    // }
    // } catch (err) {
    // console.log(err)
    // }
  });

  das.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + '@' + decode.server) ||
        jid
      );
    } else return jid;
  };

  das.ev.on('contacts.update', (update) => {
    for (let contact of update) {
      let id = das.decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[id] = { id, name: contact.notify };
    }
  });

  das.getName = (jid, withoutContact = false) => {
    id = das.decodeJid(jid);
    withoutContact = das.withoutContact || withoutContact;
    let v;
    if (id.endsWith('@g.us'))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = das.groupMetadata(id) || {};
        resolve(
          v.name ||
            v.subject ||
            PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber(
              'international'
            )
        );
      });
    else
      v =
        id === '0@s.whatsapp.net'
          ? {
              id,
              name: 'WhatsApp',
            }
          : id === das.decodeJid(das.user.id)
          ? das.user
          : store.contacts[id] || {};
    return (
      (withoutContact ? '' : v.name) ||
      v.subject ||
      v.verifiedName ||
      PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber(
        'international'
      )
    );
  };

  das.parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
      (v) => v[1] + '@s.whatsapp.net'
    );
  };

  das.sendContact = async (jid, kon, quoted = '', opts = {}) => {
    let list = [];
    for (let i of kon) {
      list.push({
        displayName: await das.getName(i + '@s.whatsapp.net'),
        vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await das.getName(i + '@s.whatsapp.net')}\n
FN:${await das.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:Faruqofc/.my.id\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`,
      });
    }
    das.sendMessage(
      jid,
      {
        contacts: { displayName: `${list.length} Kontak`, contacts: list },
        ...opts,
      },
      { quoted }
    );
  };

  das.setStatus = (status) => {
    das.query({
      tag: 'iq',
      attrs: {
        to: '@s.whatsapp.net',
        type: 'set',
        xmlns: 'status',
      },
      content: [
        {
          tag: 'status',
          attrs: {},
          content: Buffer.from(status, 'utf-8'),
        },
      ],
    });
    return status;
  };

  das.public = true;

  das.sendImage = async (jid, path, caption = '', quoted = '', options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], 'base64')
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await das.sendMessage(
      jid,
      { image: buffer, caption: caption, ...options },
      { quoted }
    );
  };

  das.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], 'base64')
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options);
    } else {
      buffer = await imageToWebp(buff);
    }
    await das.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  das.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], 'base64')
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options);
    } else {
      buffer = await videoToWebp(buff);
    }
    await das.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  das.copyNForward = async (
    jid,
    message,
    forceForward = false,
    options = {}
  ) => {
    let vtype;
    if (options.readViewOnce) {
      message.message =
        message.message &&
        message.message.ephemeralMessage &&
        message.message.ephemeralMessage.message
          ? message.message.ephemeralMessage.message
          : message.message || undefined;
      vtype = Object.keys(message.message.viewOnceMessage.message)[0];
      delete (message.message && message.message.ignore
        ? message.message.ignore
        : message.message || undefined);
      delete message.message.viewOnceMessage.message[vtype].viewOnce;
      message.message = {
        ...message.message.viewOnceMessage.message,
      };
    }
    let mtype = Object.keys(message.message)[0];
    let content = await generateForwardMessageContent(message, forceForward);
    let ctype = Object.keys(content)[0];
    let context = {};
    if (mtype != 'conversation') context = message.message[mtype].contextInfo;
    content[ctype].contextInfo = {
      ...context,
      ...content[ctype].contextInfo,
    };
    const waMessage = await generateWAMessageFromContent(
      jid,
      content,
      options
        ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo
              ? {
                  contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo,
                  },
                }
              : {}),
          }
        : {}
    );
    await das.relayMessage(jid, waMessage.message, {
      messageId: waMessage.key.id,
    });
    return waMessage;
  };

  das.downloadAndSaveMediaMessage = async (
    message,
    filename,
    attachExtension = true
  ) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, '')
      : mime.split('/')[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    trueFileName = attachExtension ? filename + '.' + type.ext : filename;
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

  das.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, '')
      : mime.split('/')[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
  };

  das.getFile = async (PATH, save) => {
    let res;
    let data = Buffer.isBuffer(PATH)
      ? PATH
      : /^data:.*?\/.*?;base64,/i.test(PATH)
      ? Buffer.from(PATH.split`,`[1], 'base64')
      : /^https?:\/\//.test(PATH)
      ? await (res = await getBuffer(PATH))
      : fs.existsSync(PATH)
      ? ((filename = PATH), fs.readFileSync(PATH))
      : typeof PATH === 'string'
      ? PATH
      : Buffer.alloc(0);
    let type = (await FileType.fromBuffer(data)) || {
      mime: 'application/octet-stream',
      ext: '.bin',
    };
    filename = path.join(__filename, './lib' + new Date() * 1 + '.' + type.ext);
    if (data && save) fs.promises.writeFile(filename, data);
    return {
      res,
      filename,
      size: await getSizeMedia(data),
      ...type,
      data,
    };
  };

  das.sendMedia = async (
    jid,
    path,
    fileName = '',
    caption = '',
    quoted = '',
    options = {}
  ) => {
    let types = await das.getFile(path, true);
    let { mime, ext, res, data, filename } = types;
    if ((res && res.status !== 200) || file.length <= 65536) {
      try {
        throw { json: JSON.parse(file.toString()) };
      } catch (e) {
        if (e.json) throw e.json;
      }
    }
    let type = '',
      mimetype = mime,
      pathFile = filename;
    if (options.asDocument) type = 'document';
    if (options.asSticker || /webp/.test(mime)) {
      let { writeExif } = require('./lib/exif');
      let media = { mimetype: mime, data };
      pathFile = await writeExif(media, {
        packname: options.packname ? options.packname : global.packname,
        author: options.author ? options.author : global.author,
        categories: options.categories ? options.categories : [],
      });
      await fs.promises.unlink(filename);
      type = 'sticker';
      mimetype = 'image/webp';
    } else if (/image/.test(mime)) type = 'image';
    else if (/video/.test(mime)) type = 'video';
    else if (/audio/.test(mime)) type = 'audio';
    else type = 'document';
    await das.sendMessage(
      jid,
      { [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
      { quoted, ...options }
    );
    return fs.promises.unlink(pathFile);
  };

  das.sendText = (jid, text, quoted = '', options) =>
    das.sendMessage(jid, { text: text, ...options }, { quoted });

  das.serializeM = (m) => smsg(das, m, store);

  das.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;
    console.log(`Connection: ` + connection);
    if (connection === 'close') {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) {
        console.log(`Bad Session File, Please Delete Session and Scan Again`);
        das.logout();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log('Connection closed, reconnecting....');
        dasBot();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log('Connection Lost from Server, reconnecting...');
        dasBot();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log(
          'Connection Replaced, Another New Session Opened, Please Close Current Session First'
        );
        das.logout();
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(true);
        console.log(`Device Logged Out, Please Scan Again And Run.`);
        das.logout();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log('Restart Required, Restarting...');
        dasBot();
      } else if (reason === DisconnectReason.timedOut) {
        console.log('Connection TimedOut, Reconnecting...');
        dasBot();
      } else das.end(`Unknown DisconnectReason: ${reason}|${connection}`);
    }
    // console.log('Connected...', update);
  });

  start('2', colors.bold.white('\nMenunggu Pesan Baru..'));

  das.sendButtonText = (
    jid,
    buttons = [],
    text,
    footer,
    quoted = '',
    options = {}
  ) => {
    let buttonMessage = {
      text,
      footer,
      buttons,
      headerType: 2,
      ...options,
    };
    das.sendMessage(jid, buttonMessage, { quoted, ...options });
  };

  das.sendKatalog = async (jid, title = '', desc = '', gam, options = {}) => {
    let message = await prepareWAMessageMedia(
      { image: gam },
      { upload: das.waUploadToServer }
    );
    const tod = generateWAMessageFromContent(
      jid,
      {
        productMessage: {
          product: {
            productImage: message.imageMessage,
            productId: '9999',
            title: title,
            description: desc,
            currencyCode: 'IDR',
            priceAmount1000: '100000',
            url: `https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
            productImageCount: 1,
            salePriceAmount1000: '0',
          },
          businessOwnerJid: `6287705048235@s.whatsapp.net`,
        },
      },
      options
    );
    return das.relayMessage(jid, tod.message, { messageId: tod.key.id });
  };

  das.send5ButLoc = async (
    jid,
    text = '',
    footer = '',
    img,
    but = [],
    options = {}
  ) => {
    var template = generateWAMessageFromContent(
      jid,
      proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            hydratedContentText: text,
            locationMessage: {
              jpegThumbnail: img,
            },
            hydratedFooterText: footer,
            hydratedButtons: but,
          },
        },
      }),
      options
    );
    das.relayMessage(jid, template.message, { messageId: template.key.id });
  };

  das.sendButImg = async (jid, path, teks, fke, but) => {
    let img = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], 'base64')
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let fjejfjjjer = {
      image: img,
      jpegThumbnail: img,
      caption: teks,
      fileLength: '1',
      footer: fke,
      buttons: but,
      headerType: 4,
    };
    das.sendMessage(jid, fjejfjjjer, { quoted: m });
  };

  return das;
};

dasBot();

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});
