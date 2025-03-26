/* FREEZER-MD BOT */

const util = require('util');
const fs = require('fs-extra');
const axios = require('axios');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

const runtime = function (seconds) { 
    seconds = Number(seconds); 
    var d = Math.floor(seconds / (3600 * 24)); 
    var h = Math.floor((seconds % (3600 * 24)) / 3600); 
    var m = Math.floor((seconds % 3600) / 60); 
    var s = Math.floor(seconds % 60); 
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
    return dDisplay + hDisplay + mDisplay + sDisplay; 
};

// Function to fetch GitHub repo data
const fetchGitHubStats = async () => {
    try {
        const repo = 'Beltah254/XBOT'; // Replace with your repo
        const response = await axios.get(`https://api.github.com/repos/${repo}`);
        const forks = response.data.forks_count;
        const stars = response.data.stargazers_count;
        const totalUsers = (forks * 2) + (stars * 2);
        return {
            forks,
            stars,
            totalUsers
        };
    } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        return { forks: 0, stars: 0, totalUsers: 0 };
    }
};

zokou({ nomCom: "channel", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    var coms = {};
    var mode = "public";

    if ((s.MODE).toLocaleLowerCase() != "public") {
        mode = "Private";
    }

    // Normalize category to uppercase and organize commands by category
    cm.map(async (com, index) => {
        const categoryUpper = com.categorie.toUpperCase();
        if (!coms[categoryUpper])
            coms[categoryUpper] = [];
        coms[categoryUpper].push(com.nomCom);
    });

    // Set the default timezone from the configuration
    moment.tz.setDefault('Africa/Nairobi');

    // Create a date and time in the configured timezone
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    // Determine the greeting based on the current time
    const hour = moment().hour();
    let greeting = "Merry Christmas🎄";
    if (hour >= 0 && hour <= 11) {
        greeting = "Happy Festive 🎅";
    } else if (hour >= 12 && hour <= 16) {
        greeting = "Merry Xmas 🎄";
    } else if (hour >= 16 && hour <= 21) {
        greeting = "Happy December 🎄";
    } else if (hour >= 21 && hour <= 23) {
        greeting = "Santa Time 🎅";
    }

    // Fetch GitHub stats
    const { totalUsers } = await fetchGitHubStats();
    const formattedTotalUsers = totalUsers.toLocaleString();

    let infoMsg = `
*${greeting} ${nomAuteurMessage}* Welcome to FREEZER-MD BOT official WhatsApp channel.Click on the button Below to follow our channel.

CURRENT TIME IS ${temps} AND THE CURRENT DATE IS ${date}.`;

    let menuMsg = `
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 FREEZER 𝐇𝐀𝐂𝐊𝐈𝐍𝐆 𝐓𝐄𝐀𝐌`;

    // Sort categories alphabetically and generate menu
  //const sortedCategories = Object.keys(coms).sort();
    //let commandNumber = 1; 

   // for (const cat of sortedCategories) {
      //  menuMsg += `
//┌══⊷✰❒⁠${cat.toUpperCase()} ❒⁠⁠⁠⁠✰
//┊┌─────────────`;

        // Sort commands alphabetically within the category
       // const sortedCommands = coms[cat].sort();

     //   for (const cmd of sortedCommands) {
     //       menuMsg += ` 
//┊┊➪︎︎ ${commandNumber++}. ${cmd}`;
  //      }
    //    menuMsg += `
//┊└─────────────
//╰═════════════════⊷\n`;
   // }

   // menuMsg += `
   // ┏┻━━━━━━━━━━━━━━━┻┓
 //   > © FREEZER TECH 254
  //  ┗━━━━━━━━━━━━━━━━━┛`;


        /*// URLs and configurations
    const fullImageUrl = "https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg"; // Full image URL
    const smallThumbnailUrl = "https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg"; // Small thumbnail URL
    const randomAudio = "https://files.catbox.moe/wdap4t.mp3"; // Voice note URL
    const sourceUrl = "https://whatsapp.com/channel/0029Vb5mxL6F1YlTPss80Y2t"; // Channel link
    const contactName = commandeOptions?.ms?.pushName || "Unknown Contact"; // Sender's name or "Unknown Contact"

    try {
      // Send the custom message
      await zk.sendMessage(dest, {
         text: infoMsg + menuMsg,
        image: { url: fullImageUrl }, // Full image displayed at the top
        caption: `💫 Always Active 🔥\n\n✨ Contact: ${contactName}\n🙏 [Visit Channel](${sourceUrl})`,
        audio: { url: randomAudio }, // Voice note URL
        mimetype: "audio/mpeg", // Correct MIME type for audio
        ptt: true, // Send as a voice note
        contextInfo: {
          externalAdReply: {
            title: `💦 Adios ${contactName}\nFreezer Tech 254 🇰🇪`, // Your contact in WhatsApp status format
            body: "Yoh don't disturb am active🥱 Tap here",
            thumbnailUrl: smallThumbnailUrl, // Small thumbnail displayed below
            mediaType: 1, // Indicate this is an image
            renderLargerThumbnail: true, // Ensure thumbnail is displayed in full
            sourceUrl: sourceUrl, // Channel link
            showAdAttribution: true, // Attribution for the channel
          },
          forwardingScore: -1, // Prevent message forwarding
        }*/

    try {
        await zk.sendMessage(dest, { 
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [nomAuteurMessage],
               showAdAttribution: true,
                externalAdReply: {
                    title: "⭕🛑 FREEZER-MD BOT ⭕🛑 ",
                    body: "TAP HERE TO FOLLOW OUR CHANNEL",
                    sourceUrl: 'https://whatsapp.com/channel/0029Vb5mxL6F1YlTPss80Y2t',
                    mediaType: 0x1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
});
