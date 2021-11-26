const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.LIZA, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('https://i.imgur.com/9GOGBaF.jpeg'), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈ *ᴄᴊs* ≈≈≈≈≈≈≈≈*
 
*owner number wa.me/994406512288*
   
*owner number wa.me/919496682736*


*whatsapp group : https://chat.whatsapp.com/DY9Pk6Cy0zj1smbPBQIRqg*


*githublink       _no*


*audio commads    _https://tinyurl.com/ydvlpbol_*

*.*

*sticker commads  _https://tinyurl.com/yfpd23yn_*     
`}) 

})); 
