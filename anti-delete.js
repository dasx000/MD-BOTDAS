/**
 * Create By FERDIZ -AFK
 * Contact Me on wa.me/6287877173955
 * Follow https://github.com/FERDIZ-afk
 */
const { delay } = require('@adiwajshing/baileys');

module.exports = async (fdz, m) => {
  console.log(m);
  if (!m) m = false;
  const isGroup = m.remoteJid.endsWith('@g.us');
  if (!isGroup) return;
  try {
    const dataChat = global.dbChatUpsert;
    let mess = dataChat.find((a) => a.id == m.id);

    let mek = mess.msg;
    let participant = mek.key.remoteJid.endsWith('@g.us')
      ? mek.key.participant
      : mek.key.remoteJid;
    let froms = mek.key.remoteJid;
    const moment = require('moment-timezone');
    await fdz.sendMessage(
      froms,
      {
        text: `「 *Anti delete Message* 」
    
    🤠 *Name* : ${mek.pushName}
    👾 *User* : @${mek.sender.split('@')[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
    💫 *MessageType* : ${mek.mtype}
    `,
        mentions: [participant],
      },
      {
        quoted: mek,
      }
    );

    await fdz.copyNForward(froms, mek, true);
    //  await fdz.relayMessage(froms, mek, { messageId: mek.key.id });
    await delay(4000);
    let messek = dataChat.find((a) => a.id == m.id);
    for (let [i, te] of dataChat.entries()) {
      if (te.id === m.id) {
        dataChat.splice(i, 1); // Tim is now removed from "users"
        console.log('[ PROSES DELETE PESAN DI DB ]');
      }
    }
  } catch (err) {}
};
