// What are you doing mothe fucker 🖕 find codes to another bot
// Non visible script 
// Prepare yourself men don't disturb others

const { zokou } = require("../framework/zokou");
const axios = require("axios");

zokou({ nomCom: "videologo", categorie: "Ai", reaction: "🔖" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
  const text = arg.join(" ");

  if (!text) {
    repondre("🤦Please provide a search thing.");
    return;
  }

  try {
    // Message content
    const messageText = `😁Reply with below alphabet to generate *${text}* logo

A ☞ sweet love 💞😻
B ☞ lightning pubg🕯️
C ☞ intro video 🎬
D ☞ tiger 🐯 video logo

*ʙᴇʟᴛᴀʜ ᴛᴇᴄʜ 👻*`;

    const contextInfo = {
      mentionedJid: [ms.sender], // Mention the sender
      externalAdReply: {
        title: "ʙᴇʟᴛᴀʜ ᴛᴇᴄʜ 👻",
        body: "ᴛᴀᴘ ʜᴇʀᴇ ᴛᴏ ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ",
        thumbnailUrl: "https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg",
        sourceUrl: "https://whatsapp.com/channel/0029Vb5mxL6F1YlTPss80Y2t",
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    };

    const messageToSend = {
      text: messageText,
      contextInfo,
    };

    // Send the message
    const sentMessage = await zk.sendMessage(dest, messageToSend, { quoted: ms });

    // Event listener for message responses
    zk.ev.on('messages.upsert', async (update) => {
      const message = update.messages[0];
      if (!message.message || !message.message.extendedTextMessage) {
        return;
      }

      const responseText = message.message.extendedTextMessage.text.trim();
      if (message.message.extendedTextMessage.contextInfo && message.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
        // Handle different logo choices based on alphabet
        let logoUrl;
        switch (responseText) {
          case 'A':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-sweet-love-video-cards-online-734.html", text);
            break;
          case 'B':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html", text);
            break;
          case 'C':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/free-logo-intro-video-maker-online-558.html", text);
            break;
          case 'D':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-digital-tiger-logo-video-effect-723.html", text);
            break;
          
          // Add additional cases as required
          default:
            return repondre("🚫*_Invalid alphabet. Please reply with a valid alphabet._*");
        }

        // Send the logo if URL is found
        if (logoUrl) {
          await zk.sendMessage(dest, {
            video: { url: logoUrl },
            mimetype: "video/mp4",
            caption: `> ʙᴇʟᴛᴀʜ ᴛᴇᴄʜ 👻`,
          }, { quoted: ms });
        }
      }
    });
  } catch (error) {
    console.log(error);
    repondre(`Error: ${error}`);
  }
});

// Function to fetch the logo URL using axios
const fetchLogoUrl = async (url, name) => {
  try {
    const response = await axios.get(`https://api-pink-venom.vercel.app/api/logo`, {
      params: { url, name }
    });
    return response.data.result.download_url; // Ensure this is the correct path for the download URL in the API response
  } catch (error) {
    console.error("❌Error fetching logo:", error);
    return null;
  }
       }
