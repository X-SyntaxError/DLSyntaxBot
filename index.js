// Start Module
const { Telegraf } = require('telegraf')
const hxz = require ("hxz-api")
const NodeID3 = require('node-id3')
const fs = require("fs")
const yts = require( 'yt-search' )
const xfar = require("xfarr-api")
const figlet = require('figlet')
const lolcatjs = require('lolcatjs')



// END MODULE
const {getBuffer, color} = require("./lib/function.js")
const eng = require("./lib/help.js")
const {yt} = require("./lib/yt.js")

const token = "5457064942:AAEvjF2X5ifxl0FyVwythLQhjmT6-l5UfP4"// GET TELEGRAM TOKEN FROM BOT FATHER


// Console Log

(function(_0x130b15,_0x517b40){const _0x55fc31=_0x130b15();function _0xcfbe32(_0x2802b3,_0x8ea93c,_0x3532ef,_0x1e3412){return _0x2279(_0x2802b3-0xf,_0x8ea93c);}function _0x55405c(_0x1af36b,_0x20d4af,_0x5d238f,_0x5a39a0){return _0x2279(_0x5a39a0- -0x52,_0x1af36b);}while(!![]){try{const _0x111402=-parseInt(_0xcfbe32(0xf8,0xff,0x103,0xf8))/(0xc7a+0x4c1*0x7+-0x2dc0)*(-parseInt(_0x55405c(0x9b,0xab,0xa8,0x9a))/(-0x34e+0x1d*-0x5f+0x4b1*0x3))+-parseInt(_0xcfbe32(0x106,0x108,0xfe,0x118))/(-0x1309+0x107*0x2+0x10fe)+-parseInt(_0xcfbe32(0x10b,0x11e,0xff,0x114))/(0x4d5*0x7+-0x8*-0x41c+-0x2b*0x18d)*(parseInt(_0x55405c(0x92,0xa5,0x90,0x9b))/(-0x2233+-0x1*-0xec3+0x1375))+parseInt(_0x55405c(0x9b,0xa1,0x8a,0x98))/(0x158c+0x10f*0xb+0x212b*-0x1)*(-parseInt(_0x55405c(0xae,0x96,0x99,0xa7))/(-0x51e+0x25*0xa2+-0x1245))+parseInt(_0xcfbe32(0xef,0x101,0xde,0xe3))/(-0x2520+0x2031+0x4f7)*(parseInt(_0xcfbe32(0xed,0xf7,0xee,0xe9))/(-0x2522*0x1+-0x1806+0x3d31))+-parseInt(_0xcfbe32(0xfd,0x10f,0x10d,0x10e))/(0x2b6*0xe+-0xdc0+-0x182a)*(parseInt(_0x55405c(0x99,0x92,0x9b,0x9d))/(0x12e3+0xd12+-0x1fea))+parseInt(_0x55405c(0xa3,0x9e,0xa1,0x93))/(0x1223*-0x1+-0x73b*0x5+0x1*0x3656)*(parseInt(_0xcfbe32(0x104,0x110,0x10b,0x107))/(-0x1*-0x1b64+-0x13e6+-0x3*0x27b));if(_0x111402===_0x517b40)break;else _0x55fc31['push'](_0x55fc31['shift']());}catch(_0x7575f5){_0x55fc31['push'](_0x55fc31['shift']());}}}(_0x1524,-0x11e86f+-0xf6023+0x2f533b*0x1));function _0x1524(){const _0x52a833=['Bg9N','mtnOuez0rgq','ls0Tls0Tls0Tlq','ndq2otC2tNPlBNrn','C2vHCMnO','mJm5nhjdrw5Sqq','C3rHCNq','CM9Y','mJi5mde0ohfIEw5gqW','ls0Tls0Tls0','DgvKiq','Dg9tDhjPBMC','BgfZDf9Uyw1L','BwvZC2fNzq','y2HHDa','zMLYC3rFBMfTzq','otiYnwLYDw9psq','wc1tEw50yxHfCG','mJq4uK9ItKvm','kcGOlISPkYKRkq','D1POyNK','tgf5B3v0','y29UC3rYDwn0BW','ndmZodqYmdbkqxH4sMK','Dvvsrvq','tujYv1y','Dgv4Dfn5BMm','ntu2nZa4refJr01N','mJe3nZrtB1vuCKC','zxj2zxiGu3rHCG','mNDswxbMuq','nwPhA0fPsG','mtbsB01LyNG','mtq1mZa0odndzffrwNa','w1nfuLzfuL0GuW','Awv4u3e','zNjVBvn0CMLUzW','BfnKsNi'];_0x1524=function(){return _0x52a833;};return _0x1524();}const _0xd2df3e=(function(){function _0x4baa2b(_0x31e912,_0x18af27,_0x39af45,_0x37efad){return _0x2279(_0x39af45- -0x1,_0x18af27);}const _0x10ebcb={};function _0x213b52(_0x232c1b,_0x59e0c2,_0x485184,_0x244f4c){return _0x2279(_0x59e0c2-0xee,_0x485184);}_0x10ebcb[_0x4baa2b(0xdc,0xef,0xe5,0xe1)]=_0x4baa2b(0xe3,0xdd,0xe0,0xee)+'+$',_0x10ebcb[_0x4baa2b(0xd8,0xd3,0xe1,0xd1)]=function(_0x17d622,_0x2d4d1f){return _0x17d622!==_0x2d4d1f;},_0x10ebcb[_0x213b52(0x1e8,0x1e1,0x1d1,0x1f3)]='qGyhI';const _0x3055fb=_0x10ebcb;let _0x38fed8=!![];return function(_0x5e9754,_0x334831){function _0x2be135(_0x50f26d,_0x2ede80,_0x3ff07d,_0x59a9cc){return _0x4baa2b(_0x50f26d-0x60,_0x2ede80,_0x50f26d-0x11c,_0x59a9cc-0x7e);}function _0x2cae09(_0x164251,_0x1cf332,_0xf03ac7,_0x3392fc){return _0x213b52(_0x164251-0x87,_0x164251- -0x65,_0xf03ac7,_0x3392fc-0xc1);}if(_0x3055fb['wZhby'](_0x3055fb[_0x2be135(0x20e,0x216,0x1fb,0x21f)],_0x3055fb[_0x2be135(0x20e,0x20a,0x205,0x204)]))return _0x59d02e['toString']()[_0x2be135(0x213,0x226,0x217,0x205)](_0x3055fb[_0x2be135(0x201,0x1f8,0x1fc,0x204)])[_0x2cae09(0x162,0x16f,0x15d,0x160)]()['constructo'+'r'](_0x382885)[_0x2be135(0x213,0x204,0x21a,0x222)](_0x2be135(0x1fc,0x1e9,0x206,0x207)+'+$');else{const _0x39addc=_0x38fed8?function(){if(_0x334831){const _0x1a730a=_0x334831['apply'](_0x5e9754,arguments);return _0x334831=null,_0x1a730a;}}:function(){};return _0x38fed8=![],_0x39addc;}};}()),_0x5765a5=_0xd2df3e(this,function(){function _0x223ea8(_0x591b5b,_0x20177f,_0x3d087a,_0x4b8372){return _0x2279(_0x4b8372- -0x94,_0x20177f);}const _0x4f67a0={};function _0x3faa81(_0x40d172,_0x5f1d58,_0x28b74a,_0x5d53af){return _0x2279(_0x28b74a- -0x35,_0x5d53af);}_0x4f67a0[_0x3faa81(0xb9,0xc0,0xb2,0xa8)]=_0x3faa81(0x9d,0xa3,0xac,0xb2)+'+$';const _0x1ec3e1=_0x4f67a0;return _0x5765a5['toString']()['search'](_0x3faa81(0xb1,0xb8,0xac,0xb4)+'+$')['toString']()[_0x223ea8(0x42,0x52,0x5a,0x50)+'r'](_0x5765a5)['search'](_0x1ec3e1[_0x223ea8(0x51,0x66,0x59,0x53)]);});function _0x9f6132(_0x3511e9,_0x482930,_0x54544a,_0x585bee){return _0x2279(_0x54544a-0x265,_0x3511e9);}function _0x2279(_0x597a09,_0x564041){const _0x57174f=_0x1524();return _0x2279=function(_0x52c303,_0xd59f4e){_0x52c303=_0x52c303-(0x1208*0x2+-0x11ac+-0x118c);let _0x394354=_0x57174f[_0x52c303];if(_0x2279['iueHxY']===undefined){var _0x2f9d87=function(_0x3c0ffa){const _0xec4d76='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x923576='',_0x2ac3f0='',_0x5192d4=_0x923576+_0x2f9d87;for(let _0x1eb90b=-0xb*0xfc+-0x5cb*-0x1+0x509,_0x2aec48,_0x2148fd,_0x1cca19=0xd*-0x104+-0x1cd7+0x2f*0xe5;_0x2148fd=_0x3c0ffa['charAt'](_0x1cca19++);~_0x2148fd&&(_0x2aec48=_0x1eb90b%(-0x218f+0x3a*0x1+0x2159)?_0x2aec48*(-0x12d0*0x2+-0xf02+0x34e2*0x1)+_0x2148fd:_0x2148fd,_0x1eb90b++%(-0x48*-0x51+0x1*0xdd3+-0x2497))?_0x923576+=_0x5192d4['charCodeAt'](_0x1cca19+(0x13*-0x29+-0xe9a*-0x2+0x1a1f*-0x1))-(0x203c+0x1d9+-0x4dd*0x7)!==0x1*0x473+0x2284+-0x26f7?String['fromCharCode'](0x1174+0x1a42+-0x2ab7&_0x2aec48>>(-(-0x1bd3+0x3c9+0x180c)*_0x1eb90b&-0x15*-0xeb+-0x1*0x436+-0xf0b)):_0x1eb90b:0x69d*0x2+0x7f1*-0x2+0x44*0xa){_0x2148fd=_0xec4d76['indexOf'](_0x2148fd);}for(let _0x4f9642=-0x181b+0x1dfc+-0x5e1,_0x1f2540=_0x923576['length'];_0x4f9642<_0x1f2540;_0x4f9642++){_0x2ac3f0+='%'+('00'+_0x923576['charCodeAt'](_0x4f9642)['toString'](-0x1b6e+-0x24f*-0x8+-0xa*-0xe7))['slice'](-(0xa61*0x3+0x15*0x143+-0x39a0));}return decodeURIComponent(_0x2ac3f0);};_0x2279['JfnkDG']=_0x2f9d87,_0x597a09=arguments,_0x2279['iueHxY']=!![];}const _0x41dae0=_0x57174f[0x1706*0x1+0xc88+-0x238e],_0x13cd37=_0x52c303+_0x41dae0,_0x1379c9=_0x597a09[_0x13cd37];if(!_0x1379c9){const _0x5ab66b=function(_0x3e78ea){this['GelAmc']=_0x3e78ea,this['INCjYQ']=[-0x219+-0x24b+0x465,0x1*0x3bf+-0x1*-0x238+-0x5f7,0x25b6+-0x1baa+-0x4*0x283],this['IEIxRQ']=function(){return'newState';},this['WsISil']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['MziYwP']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x5ab66b['prototype']['aIlJyl']=function(){const _0x2d54cd=new RegExp(this['WsISil']+this['MziYwP']),_0x1707b2=_0x2d54cd['test'](this['IEIxRQ']['toString']())?--this['INCjYQ'][-0x160a+-0x20*-0xe4+-0x675]:--this['INCjYQ'][0x1*0x986+-0x5*0x5db+0xd*0x185];return this['rtXsGx'](_0x1707b2);},_0x5ab66b['prototype']['rtXsGx']=function(_0x10ebcb){if(!Boolean(~_0x10ebcb))return _0x10ebcb;return this['biUMbb'](this['GelAmc']);},_0x5ab66b['prototype']['biUMbb']=function(_0x3055fb){for(let _0x38fed8=-0x2*0xc1d+-0x1*0xdae+0x25e8,_0x17d622=this['INCjYQ']['length'];_0x38fed8<_0x17d622;_0x38fed8++){this['INCjYQ']['push'](Math['round'](Math['random']())),_0x17d622=this['INCjYQ']['length'];}return _0x3055fb(this['INCjYQ'][0x7*-0x395+0x3*-0xb99+-0x4f*-0xc2]);},new _0x5ab66b(_0x2279)['aIlJyl'](),_0x394354=_0x2279['JfnkDG'](_0x394354),_0x597a09[_0x13cd37]=_0x394354;}else _0x394354=_0x1379c9;return _0x394354;},_0x2279(_0x597a09,_0x564041);}_0x5765a5(),console[_0x435642(0x31b,0x31b,0x316,0x311)](_0x435642(0x31d,0x32d,0x30f,0x310)+'----------'+'----------'+_0x9f6132(0x365,0x34d,0x35b,0x34a)+_0x435642(0x324,0x327,0x332,0x319));const _0x2d54cd={};_0x2d54cd['horizontal'+_0x9f6132(0x34f,0x342,0x348,0x341)]='full',lolcatjs[_0x435642(0x319,0x308,0x30a,0x31d)](color(figlet[_0x9f6132(0x344,0x344,0x34d,0x34c)](_0x435642(0x306,0x303,0x2f4,0x2fd)+_0x435642(0x322,0x32e,0x318,0x315),_0x2d54cd))),console[_0x435642(0x31b,0x308,0x317,0x31e)](_0x435642(0x31d,0x31b,0x30c,0x30c)+'----------'+_0x9f6132(0x36d,0x355,0x35b,0x35b)+_0x435642(0x31d,0x310,0x314,0x312)+'--------'),lolcatjs[_0x435642(0x319,0x318,0x308,0x310)](_0x9f6132(0x34c,0x34e,0x355,0x349)+_0x9f6132(0x362,0x34d,0x350,0x356)+_0x9f6132(0x345,0x34a,0x33d,0x34b));const bot=new Telegraf(''+token);function _0x435642(_0x467d47,_0x309d9f,_0x2579e2,_0x4b80fb){return _0x2279(_0x467d47-0x227,_0x309d9f);}bot[_0x435642(0x321,0x32f,0x32e,0x31e)](_0x22b7b0=>{function _0x1d1ffe(_0x27b4a2,_0x330a2b,_0x4d4f4b,_0x4a5298){return _0x435642(_0x27b4a2- -0x40,_0x330a2b,_0x4d4f4b-0x1a,_0x4a5298-0x3);}const _0xbc2e5f={};_0xbc2e5f['iexSq']=function(_0x5af0d8,_0x2924fe){return _0x5af0d8+_0x2924fe;};const _0x30442c=_0xbc2e5f;function _0x3b6646(_0x2e5d4e,_0x18c0e1,_0x2cadd6,_0x2f92a5){return _0x435642(_0x2f92a5- -0x54f,_0x18c0e1,_0x2cadd6-0x1f,_0x2f92a5-0x168);}const _0x5544f3=_0x30442c['iexSq'](_0x30442c[_0x1d1ffe(0x2d8,0x2eb,0x2d3,0x2eb)](_0x22b7b0[_0x1d1ffe(0x2c2,0x2c7,0x2c4,0x2d4)][_0x1d1ffe(0x2c3,0x2d4,0x2d2,0x2bc)][_0x1d1ffe(0x2c4,0x2b7,0x2c7,0x2c2)],'\x20'),_0x22b7b0[_0x1d1ffe(0x2c2,0x2d2,0x2c6,0x2d5)]['chat'][_0x1d1ffe(0x2c1,0x2c6,0x2d3,0x2b9)]);return eng[_0x1d1ffe(0x2e1,0x2e4,0x2db,0x2d9)](_0x22b7b0,_0x5544f3);});


bot.on("callback_query", async (ctx) => {
    var body = ctx.callbackQuery.data
    const chatss = ctx.update.callback_query.message.text || ctx.update.callback_query.message.caption || ""
var prefixx = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&<`™©®Δ^βα¦|/\\©^]/.test(chatss) ? chatss.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ_&<!`™©®Δ^βα¦|/\\©^]/gi) : '.'
    switch (body) {
        case "dl":
       // console.log(ctx.message)    
       return ctx.editMessageText(eng.menudl(ctx.update.callback_query.message.chat.first_name+" "+ctx.update.callback_query.message.chat.last_name, prefixx),{parse_mode: "Markdown"})
        break
        case "sc":
        return ctx.editMessageText("Source Code!\nhttps://github.com/X-SyntaxError/DLSyntaxBot",{parse_mode: "Markdown"}).then(a => {
            ctx.editMessageText("Give Credits Please!")
        })
        break
    }
})

bot.on("message", async(syntax) => {
try {
// Start Variabel
const chats = syntax.message.text || syntax.message.caption || ""
var prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&<`™©®Δ^βα¦|/\\©^]/.test(chats) ? chats.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ_&<!`™©®Δ^βα¦|/\\©^]/gi) : '.'

    command = chats.trim().split(" ").shift().toLowerCase()
const ownerUsername = "X-SyntaxError" // Change Your Username
const isOwner = syntax.message.from.username == ownerUsername
const pushname = syntax.message.from.first_name+" "+syntax.message.from.last_name
const from = syntax.message.from.id.toString()
const quotedMsg = syntax.message.reply_to_message
const isCmd = chats.startsWith(prefix)
const args = chats.trim().split(/ +/).slice(1)
const q = args.join(' ')
//End Variabel
var today = new Date();
const time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
if (isCmd) {
	console.log(color('[CMD]', 'green'), color(time, 'blue'), color(chats.split(" ")[0] || chats, 'cyan'), color("By", "green"), color(pushname, 'white'))
	}
	
async function help(anu, name) {

    text = `Hello ${name}! Here are the available commands you can use :`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Downloader', callback_data: 'dl' },
                    { text: 'Whatsapp Bot', callback_data: 'maker' },
                    { text: 'Source Code', callback_data: 'sc' }
                ]
            ]
        }
    }
    try {
        await anu.editMessageText(text, options, {parse_mode: "Markdown"})
    } catch {
        await anu.reply(text, options)
    }

}

switch (command) {

case ">":
    if (!isOwner) return 
try {
    let evaled = await eval(chats.slice(2))
    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
    syntax.reply(`${evaled}`)
} catch (err) {
    syntax.reply(`${err}`)
}
break

case prefix+"help": 
   await help(syntax, pushname, from)
break

case prefix+"tiktok":
case prefix+"tt":
if (!q) return syntax.reply(eng.false(prefix), {parse_mode: "Markdown"})
if (q.includes("tiktok.com") == false) return syntax.reply(eng.false(prefix), {parse_mode: "Markdown"})
try {
const {nowm} = await hxz.ttdownloader(q)
const buffert = await getBuffer(nowm)
syntax.replyWithVideo({
    source: buffert,
    filename: pushname+".mp4"
  })
} catch (err){
    syntax.replyWithText(err)
}
break

case prefix+"ytmp4":
case prefix+"yt":
if (!q) return syntax.reply(eng.false(prefix), {parse_mode: "Markdown"})
try {
if (q.includes("you") == false) return syntax.reply(eng.false(prefix), {parse_mode: "Markdown"})
const ytmp4 = await yt(q)
const adjhasgfy = `「 *YTMP4* 」
=> *Title:* ${ytmp4.title}`
buffer = await getBuffer(ytmp4.thumb)
await syntax.replyWithPhoto({source: buffer}, {caption: adjhasgfy, parse_mode: "Markdown"})
syntax.replyWithVideo({source: ytmp4.file, filename: ytmp4.title+".mp4"}, {caption: "*Request By:* "+pushname, parse_mode: "Markdown"})
} catch (err) {
    syntax.replyWithText(err)
}
break

case prefix+"ytmp3":
case prefix+"yt3":
    try {
if (!q) return syntax.reply(eng.false(prefix), {parse_mode: "Markdown"})
if (q.includes("you") == false) return syntax.reply(eng.false(prefix), {parse_mode: "Markdown"})
const ytmp3 = await hxz.youtube(q)
const adjhasgfya = `「 *YTMP3* 」
=> *Title:* ${ytmp3.title}`
buffer = await getBuffer(ytmp3.thumb)
const 
buffer2 = await getBuffer(ytmp3.mp3)
await fs.writeFileSync("./temp/ytmp3.png", buffer)
const filebuffer = await Buffer.from(buffer2)
const tags = {
    title: ytmp3.title,
    artist: "t.me/@DLSyntaxBot",
    album: "Created With X-SyntaxError",
    APIC: "./temp/ytmp3.png",
    TRCK: "27"
}

const success = await NodeID3.write(tags, filebuffer)
await syntax.replyWithPhoto({source: buffer}, {caption: adjhasgfya, parse_mode: "Markdown"})
syntax.replyWithAudio({source: success, filename: ytmp3.title+".mp3"})
} catch (err) {
    syntax.replyWithText(err)
}
break

case prefix+"play":
case prefix+"ytplay":
if (!q) return syntax.reply(eng.false(prefix), {parse_mode: "Markdown"})
try {
const waitget = await  yts(q)
const play = await hxz.youtube(waitget.all[0].url)
const adjhasgfyaa = `「 *PLAY* 」
=> *Title:* ${play.title}`
buffer = await getBuffer(play.thumb)
buffer22 = await getBuffer(play.mp3)
await fs.writeFileSync("./temp/play.png", buffer)
const filebuffers = await Buffer.from(buffer22)
const tagss = {
    title: play.title,
    artist: "t.me/@DLSyntaxBot",
    album: "Created With X-SyntaxError",
    APIC: "./temp/play.png",
    TRCK: "27"
}

const successs = await NodeID3.write(tagss, filebuffers)
await syntax.replyWithPhoto({source: buffer}, {caption: adjhasgfyaa, parse_mode: "Markdown"})
syntax.replyWithAudio({source: successs, filename: play.title+".mp3"})
} catch (err) {
    syntax.replyWithText(err)
}
break

case prefix+"igstory":
case prefix+"igs":
if (!q) return syntax.reply(eng.false(prefix), {parse_mode: "Markdown"})
try {
hxz.igstory(q).then(igs => {
for (let i=0;i<igs.medias.length;i++) {
    if (igs.medias[i].type = 'video') {
        getBuffer(igs.medias[i].url).then(buff => {
        syntax.replyWithVideo({source: buff})
    })
    } else {
getBuffer(igs.medias[i].url).then(buff => {
        syntax.replyWithPhoto({url: buff})
  })  }
}
})
} catch (err) {
    syntax.replyWithText(err)
}
break
case prefix+"ig":
case prefix+"igdl":
case prefix+"instagram":
if (!q) return syntax.reply(eng.false(prefix), {parse_mode: "Markdown"})
if (!q.includes("instagram.com")) return syntax.reply(eng.false(prefix), {parse_mode: "Markdown"})
try {
xfar.Instagram(q).then(igs => {
for (let i=0;i<igs.medias.length;i++) {
    if (igs.medias[i].extension = 'jpg') {
        getBuffer(igs.medias[i].url).then(buff => {
        syntax.replyWithPhoto({source: buff})
    })
    } else {
getBuffer(igs.medias[i].url).then(buff => {
        syntax.replyWithvideo({url: buff})
  })  }
}
})
} catch (err) {
    syntax.replyWithText(err)
}
break
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

} catch (err) {
    console.log(err)
}
	
})



bot.launch()
// Gatau Buat Apa
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

