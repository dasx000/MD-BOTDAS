// =_=_=_=_ CONVERTER _=_=_=_=
// FUNCTION CONVERTER DOCUMENT
const convert = async (s) => {
  // miemtype
  if (args[0] === 'pdf') {
    mimeType = 'application/pdf';
  } else if (args[0] === 'doc') {
    mimeType = 'application/msword';
  } else if (args[0] === 'zip') {
    mimeType = 'application/zip';
  } else if (args[0] === 'jpg') {
    mimeType = 'image/jpg';
  } else if (args[0] === 'png') {
    mimeType = 'image/png';
  } else if (args[0] === 'jpeg') {
    mimeType = 'image/jpeg';
  } else if (args[0] === 'docx') {
    mimeType =
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  } else if (args[0] === 'xlsx') {
    mimeType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  } else if (args[0] === 'xls') {
    mimeType = 'application/vnd.ms-excel';
  }

  convertapi
    .convert(args[0], {
      File: media,
    })
    .then(function (result) {
      result.saveFiles(`./media/result.${args[0]}`);
    })
    .catch((err) => {
      return reply(err.message);
    });

  await sleep(s);
  kayla.sendMessage(
    m.chat,
    {
      document: {
        url: `./media/result.${args[0]}`,
      },
      mimetype: mimeType,
      fileName: `${fileName.split('.')[0]}.${args[0]}`,
    },
    { quoted: m }
  );
  await sleep(s);
  await fs.unlinkSync(`./media/result.${args[0]}`);
  console.log('succcess');
};

// EXPORT MODULS
module.exports = {
  convert,
};
