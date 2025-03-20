/* FREEZER MD BOT */

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
        const repo = 'Richgagamidush/XG-MD'; // Replace with your repo
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

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
    let greeting = "ʟᴇᴛ's ᴋɪᴄᴋsᴛᴀʀᴛ ʏᴏᴜʀ ᴅᴀʏ ✨";
    if (hour >= 0 && hour <= 11) {
        greeting = "ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ 🌄, ʟᴇᴛ's ᴋɪᴄᴋsᴛᴀʀᴛ ʏᴏᴜʀ ᴅᴀʏ ✨";
    } else if (hour >= 12 && hour <= 16) {
        greeting = "ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌅, ʜᴏᴡ ɪs ʏᴏᴜʀ ᴅᴀʏ ɢᴏɪɴɢ 🎍";
    } else if (hour >= 16 && hour <= 21) {
        greeting = "ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌃, ɪ ʜᴏᴘᴇ ʏᴏᴜʀ ᴅᴀʏ ᴡᴀs ɢᴏᴏᴅ 🦋 ";
    } else if (hour >= 21 && hour <= 23) {
        greeting = "ɢᴏᴏᴅ ɴɪɢʜᴛ🌘, sᴡᴇᴇᴛ ᴅʀᴇᴀᴍs 💫";
    }

    // Fetch GitHub stats
    const { totalUsers } = await fetchGitHubStats();
    const formattedTotalUsers = totalUsers.toLocaleString();

    let infoMsg = `
> *${greeting}*
╭━━━〔 FREEZER 𝐁𝐎𝐓𝐒 〕━━━
┌════════════════⊷
╭─────────────────
 ࿇ *Bot name :* FREEZER BOTS
 ࿇ *User:*  ${nomAuteurMessage}  
 ࿇ *Time :*  ${temps}
 ࿇ *Date :* ${date} 
 ࿇ *Prefix :* .
 ࿇ *Uptime :*  ${runtime(process.uptime())}  
 ࿇ *plugins :* ${cm.length}
└───────────────────
 ━〔 𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 FREEZER 𝐌𝐃 〕━`;

    let menuMsg =`
> © regards\n${readmore} `;

    // Sort categories alphabetically and generate menu
    const sortedCategories = Object.keys(coms).sort();
    let commandNumber = 1; 

    for (const cat of sortedCategories) {
        menuMsg += `
╭━━━〔  ${cat.toUpperCase()} 〕━━━
`;

        // Sort commands alphabetically within the category
        const sortedCommands = coms[cat].sort();

        for (const cmd of sortedCommands) {
            menuMsg += ` 
🚇 ${cmd}`;
        }
        menuMsg += `
└───────────────────
╰═════════════════⊷\n`;
    }

    menuMsg += `
> © 𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 FREEZER 𝐌𝐃`;

    
    try {
        await zk.sendMessage(dest, { 
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [nomAuteurMessage],
               showAdAttribution: true,
                externalAdReply: {
                    title: "𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 FREEZER 𝐌𝐃",
                    body: "𝚁𝙴𝙶𝙰𝚁𝙳𝚂 𝚃𝙾 ICONIC-FREEZER",
                    thumbnailUrl: "https://files.catbox.moe/oznlsw.jpg",
                    sourceUrl: 'https://whatsapp.com/channel/0029Vb5mxL6F1YlTPss80Y2t',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
});

zokou({ nomCom: "list", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
    let greeting = "ʟᴇᴛ's ᴋɪᴄᴋsᴛᴀʀᴛ ʏᴏᴜʀ ᴅᴀʏ ✨";
    if (hour >= 0 && hour <= 11) {
        greeting = "ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ 🌄, ʟᴇᴛ's ᴋɪᴄᴋsᴛᴀʀᴛ ʏᴏᴜʀ ᴅᴀʏ ✨";
    } else if (hour >= 12 && hour <= 16) {
        greeting = "ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌅, ʜᴏᴡ ɪs ʏᴏᴜʀ ᴅᴀʏ ɢᴏɪɴɢ 🎍";
    } else if (hour >= 16 && hour <= 21) {
        greeting = "ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌃, ɪ ʜᴏᴘᴇ ʏᴏᴜʀ ᴅᴀʏ ᴡᴀs ɢᴏᴏᴅ 🦋 ";
    } else if (hour >= 21 && hour <= 23) {
        greeting = "ɢᴏᴏᴅ ɴɪɢʜᴛ🌘, sᴡᴇᴇᴛ ᴅʀᴇᴀᴍs 💫";
    }

    // Fetch GitHub stats
    const { totalUsers } = await fetchGitHubStats();
    const formattedTotalUsers = totalUsers.toLocaleString();

    let infoMsg = `
> *${greeting}*
╭━━━〔 FREEZER 𝐁𝐎𝐓𝐒 〕━━━
┌════════════════⊷
╭─────────────────
 ࿇ *Bot name :* FREEZER BOTS
 ࿇ *User:*  ${nomAuteurMessage}  
 ࿇ *Time :*  ${temps}
 ࿇ *Date :* ${date} 
 ࿇ *Prefix :* ${settings.PREFIXE} 
 ࿇ *Uptime :*  ${runtime(process.uptime())}  
 ࿇ *plugins :* ${cm.length}
└───────────────────
 ━〔 𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 FREEZER 𝐌𝐃 〕━`;

    let menuMsg =`
> © regards\n${readmore} `;

    // Sort categories alphabetically and generate menu
    const sortedCategories = Object.keys(coms).sort();
    let commandNumber = 1; 

    for (const cat of sortedCategories) {
        menuMsg += `
╭━━━〔  ${cat.toUpperCase()} 〕━━━
`;

        // Sort commands alphabetically within the category
        const sortedCommands = coms[cat].sort();

        for (const cmd of sortedCommands) {
            menuMsg += ` 
🚇 ${cmd}`;
        }
        menuMsg += `
└───────────────────
╰═════════════════⊷\n`;
    }

    menuMsg += `
> © 𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 FREEZER 𝐌𝐃`;

    
    try {
        await zk.sendMessage(dest, { 
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [nomAuteurMessage],
               showAdAttribution: true,
                externalAdReply: {
                    title: "𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 FREEZER 𝐌𝐃",
                    body: "𝚁𝙴𝙶𝙰𝚁𝙳𝚂 𝚃𝙾 ICONIC-FREEZER",
                    thumbnailUrl: "https://files.catbox.moe/oznlsw.jpg",
                    sourceUrl: 'https://whatsapp.com/channel/0029Vb5mxL6F1YlTPss80Y2t',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
});
zokou({ nomCom: "dashboard", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
    let greeting = "ʟᴇᴛ's ᴋɪᴄᴋsᴛᴀʀᴛ ʏᴏᴜʀ ᴅᴀʏ ✨";
    if (hour >= 0 && hour <= 11) {
        greeting = "ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ 🌄, ʟᴇᴛ's ᴋɪᴄᴋsᴛᴀʀᴛ ʏᴏᴜʀ ᴅᴀʏ ✨";
    } else if (hour >= 12 && hour <= 16) {
        greeting = "ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌅, ʜᴏᴡ ɪs ʏᴏᴜʀ ᴅᴀʏ ɢᴏɪɴɢ 🎍";
    } else if (hour >= 16 && hour <= 21) {
        greeting = "ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌃, ɪ ʜᴏᴘᴇ ʏᴏᴜʀ ᴅᴀʏ ᴡᴀs ɢᴏᴏᴅ 🦋 ";
    } else if (hour >= 21 && hour <= 23) {
        greeting = "ɢᴏᴏᴅ ɴɪɢʜᴛ🌘, sᴡᴇᴇᴛ ᴅʀᴇᴀᴍs 💫";
    }

    // Fetch GitHub stats
    const { totalUsers } = await fetchGitHubStats();
    const formattedTotalUsers = totalUsers.toLocaleString();

    let infoMsg = `
> *${greeting}*
╭━━━〔 FREEZER 𝐁𝐎𝐓𝐒 〕━━━
┌════════════════⊷
╭─────────────────
 ࿇ *Bot name :* FREEZER BOTS
 ࿇ *User:*  ${nomAuteurMessage}  
 ࿇ *Time :*  ${temps}
 ࿇ *Date :* ${date} 
 ࿇ *Prefix :* ${settings.PREFIXE} 
 ࿇ *Uptime :*  ${runtime(process.uptime())}  
 ࿇ *plugins :* ${cm.length}
└───────────────────
 ━〔 𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 FREEZER 𝐌𝐃 〕━`;

    let menuMsg =`
> © regards\n${readmore} `;

    // Sort categories alphabetically and generate menu
    const sortedCategories = Object.keys(coms).sort();
    let commandNumber = 1; 

    for (const cat of sortedCategories) {
        menuMsg += `
╭━━━〔  ${cat.toUpperCase()} 〕━━━
`;

        // Sort commands alphabetically within the category
        const sortedCommands = coms[cat].sort();

        for (const cmd of sortedCommands) {
            menuMsg += ` 
🚇 ${cmd}`;
        }
        menuMsg += `
└───────────────────
╰═════════════════⊷\n`;
    }

    menuMsg += `
> © 𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 FREEZER 𝐌𝐃`;

    
    try {
        await zk.sendMessage(dest, { 
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [nomAuteurMessage],
               showAdAttribution: true,
                externalAdReply: {
                    title: "𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 FREEZER 𝐌𝐃",
                    body: "𝚁𝙴𝙶𝙰𝚁𝙳𝚂 𝚃𝙾 ICONIC-FREEZER",
                    thumbnailUrl: "https://files.catbox.moe/oznlsw.jpg",
                    sourceUrl: 'https://whatsapp.com/channel/0029Vb5mxL6F1YlTPss80Y2t',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
});
