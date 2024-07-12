const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Dark_Love_MD,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function Dark_Love_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Dark_Love_MD = Dark-Love-MD({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Dark-Love-MD.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Dark-Love-MD.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Dark-Love-MD.ev.on('creds.update', saveCreds)
            Pair_Code_By_Dark-Love-MD.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Dark-Love-MD.sendMessage(Pair_Code_By_Dark-Love-MD.user.id, { text: '' + b64data });

               let GIFTED_MD_TEXT = `
*_Pair Code Connected by Dark-Love-MD*
*_Made With Love*
______________________________________
╔════◇
║ *『 THANKS FOR CHOOSING Dark-Love-MD 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 More Update And 𝗛𝗲𝗹𝗽 •••』
║❒ *Owner:* _https://wa.me/2348122441244_
║❒ *Repo:* _https://github.com/ayodejibot/Dark-Love-MD.git
║❒ *WaGroup:* _https://whatsapp.com/L6dT7pVhXYG9hvh3aneai2
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37
╚════════════════════════╝
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Dark-Love-MD.sendMessage(Pair_Code_By_Dark-Love-MD.user.id,{text:Dark-Love-MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Dark-Love-MD.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    Dark-Love-MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await Dark-Love-MD_PAIR_CODE()
});
module.exports = router
