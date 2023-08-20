const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'V19', // ISI APIKEY LU
}

global.namabot = "𝙳𝚊𝚛𝚔" // UBAH JADI NAMA LU
global.namaowner = "𝙳𝚊𝚛𝚔" // NAMA OWNER
global.footer_text = "© 𝙳𝚊𝚛𝚔𝙱𝚘𝚝𝚣" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['628971507809'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("𝚐𝚔 𝚝𝚊𝚞") // ISI HARGA SEWA BOT LU
global.fakelink = "https://s.id/jeraja" // bebas asal jan hapus
global.grubbot = (`*𝚗𝚒𝚑 𝚕𝚒𝚗𝚔 𝚐𝚌 𝚐𝚠*\n\nhttps://chat.whatsapp.com/DilAplHr8eo42u0Ote9LVQ`) // GANTI LINK GRUB BOT LU \\
// -- \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = true // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS
global.autoblok212 = true // BEBAS
global.autoread = false // BEBAS
global.autorespon = true // BEBAS
global.onlyprem = true // BEBAS
global.onlygrub = true // BEBAS
global.onlypc = false // BEBAS
// - \\
// PEMISAH \\
global.packname = '© 𝙳𝚊𝚛𝚔' //sticker wm ubah
global.author = '𝙱𝚢 𝙳𝚊𝚛𝚔𝙱𝚘𝚝𝚣' //sticker wm ganti nama kalian

// BUG MENU \\
global.jumlah = "5"
global.audionya = fs.readFileSync("./sound.mp3")

// 
global.musicmenu = "./RANDOM/MUSIC/menu.mp3"

global.caption_pay = `Qris All Pay
Ovo :
Dana : 08971507809
Gopay :
`

global.ytname = "𝙶𝚔 𝚊𝚍"
global.socialm = "INSTA: @sean_d1456"
global.location = "𝙸𝚗𝚍𝚘𝚗𝚎𝚜𝚒𝚊"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})