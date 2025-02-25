const { zokou } = require("../framework/zokou");
const ai = require('unlimited-ai');
const fs = require('fs');

zokou({
  nomCom: "darkgpt",
  aliases: ["gpt4", "ai"],
  reaction: '🚇',
  categorie: "AI"
}, async (dest, zk, params) => {
  const { repondre, arg } = params;
  const alpha = arg.join(" ").trim();

  if (!alpha) {
    return repondre("Please provide a message.");
  }

  const text = alpha;

  // Load previous conversation from store.json, if it exists
  let conversationData = [];
  try {
    const rawData = fs.readFileSync('store.json');
    conversationData = JSON.parse(rawData);
  } catch (err) {
    console.log('No previous conversation found, starting new one.');
  }

  try {
    const model = 'gpt-4-turbo-2024-04-09';
    const userMessage = { role: 'user', content: text };
    const systemMessage = { role: 'system', content: 'You are an assistant in WhatsApp. You are called Keith. You respond to user commands.' };

    // Add user input and system message to the conversation data
    conversationData.push(userMessage);
    conversationData.push(systemMessage);

    // Get AI response from the model
    const aiResponse = await ai.generate(model, conversationData);

    // Add AI response to the conversation data
    conversationData.push({ role: 'assistant', content: aiResponse });

    // Write the updated conversation data to store.json
    fs.writeFileSync('store.json', JSON.stringify(conversationData, null, 2));

    await zk.sendMessage(dest, {
      text: aiResponse,
      contextInfo: {
        externalAdReply: {
          title: "DARKGPT AI TOOL",
          body: `Enjoy`,
          thumbnailUrl: "https://files.catbox.moe/oznlsw.jpg", // Replace with your bot profile photo URL
          sourceUrl: "https://whatsapp.com/channel/0029VasnifMFi8xW4Mqysn2F", // Your channel URL
          mediaType: 1,
          showAdAttribution: true, // Verified badge
        },
      },
    });

  } catch (error) {
    console.error("Error generating AI response:", error);
    await repondre("Sorry, I couldn't process your request.");
  }
});

zokou({
  nomCom: "chatgpt",
  aliases: ["gpt4", "ai"],
  reaction: '🚇',
  categorie: "AI"
}, async (dest, zk, params) => {
  const { repondre, arg } = params;  // Use args for the command arguments
  const alpha = arg.join(" ").trim(); // Assuming args is an array of command parts

  if (!alpha) {
    return repondre("Please provide a song name.");
  }

  const text = alpha;  // Set the text that will be passed to the AI

  try {
    const model = 'gpt-4-turbo-2024-04-09'; 

    const messages = [
      { role: 'user', content: text },
      { role: 'system', content: 'You are an assistant in WhatsApp. You are called Keith. You respond to user commands.' }
    ];

    const response = await ai.generate(model, messages);

    await zk.sendMessage(dest, {
      text: response,
      contextInfo: {
        externalAdReply: {
          title: "XGAGA BOTS AI SEARCH",
          body: `keep learning`, // Format the uptime before sending
          thumbnailUrl: "https://files.catbox.moe/oznlsw.jpg", // Replace with your bot profile photo URL
          sourceUrl: "https://whatsapp.com/channel/0029VasnifMFi8xW4Mqysn2F", // Your channel URL
          mediaType: 1,
          showAdAttribution: true, // Verified badge
        },
      },
    });

  } catch (error) {
    console.error("Error generating AI response:", error);
    await repondre("Sorry, I couldn't process your request.");
  }
});

zokou({
  nomCom: "gemini2",
  aliases: ["gpto4", "gemni", "gpt2", "gpt3"],
  reaction: '🚇',
  categorie: "AI"
}, async (dest, zk, params) => {
  const { repondre, arg } = params;
  const elementQuery = arg.join(" ").trim(); // Use 'arg' to capture the user query

  // Check if elementQuery is empty
  if (!elementQuery) {
    return repondre("Please provide a song name.");
  }

  try {
    // Dynamically import Gemini AI
    const { default: Gemini } = await import('gemini-ai');
    const gemini = new Gemini("AIzaSyCFn-iaA6z0A_doO7hxKhGbIZtCpxZDycE");

    const chat = gemini.createChat();

    // Ask Gemini AI for a response
    const res = await chat.ask(elementQuery);

    await zk.sendMessage(dest, {
      text: res,
      contextInfo: {
        externalAdReply: {
          title: "XGAGA-BOTS GEMINI",
          body: `Keep using AI`, // Format the uptime before sending
          thumbnailUrl: "https://files.catbox.moe/oznlsw.jpg", // Replace with your bot profile photo URL
          sourceUrl: "https://whatsapp.com/channel/0029VasnifMFi8xW4Mqysn2F", // Your channel URL
          mediaType: 1,
          showAdAttribution: true, // Verified badge
        },
      },
    });

  } catch (e) {
    // Handle errors by sending a message to the user
    await repondre("I am unable to generate responses\n\n" + e.message);
  }
});
zokou({
  nomCom: "gemini",
  : ["gpto4", "gemni", "gpt2", "gpt3"],
  reaction: '🚇',
  categorie: "AI"
},async (_0x459d0f, _0x58b776, _0x13dd55) => {
  const {
    repondre: _0x375278,
    arg: _0x57e406,
    ms: _0x381fb4
  } = _0x13dd55;
  try {
    if (!_0x57e406 || _0x57e406.length === 0) {
      return _0x375278("Hello, I am *GEMINI AI*.\n\n How can I assist you today?");
    }
    const _0x3ecfb3 = _0x57e406.join(" ");
    const _0x5d81d9 = await fetch("https://api.diioffc.web.id/api/ai/gemini?query=" + encodeURIComponent(_0x3ecfb3));
    const _0x5b2adb = await _0x5d81d9.json();
    if (_0x5b2adb.status && _0x5b2adb.result && _0x5b2adb.result.message) {
      const _0x58c38d = _0x5b2adb.result.message;
      const _0x138484 = {
        deviceListMetadata: {},
        deviceListMetadataVersion: 0x2
      };
      const _0x313a56 = {
        text: _0x58c38d
      };
      const _0x5c8ed3 = {
        title: '',
        subtitle: '',
        hasMediaAttachment: false
      };
      const _0x128a35 = {
        buttons: []
      };
      const _0xd1fe97 = generateWAMessageFromContent(_0x459d0f, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': _0x138484,
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create(_0x313a56),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "> *POWERED BY GAGA-MD*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create(_0x5c8ed3),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x128a35),
              'contextInfo': {
                'forwardingScore': 0x5,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363238139244263@newsletter",
                  'newsletterName': "GAGA-MD",
                  'serverMessageId': 0x8f,
                  'sourceUrl': ""
                }
              }
            })
          }
        }
      }, {});
      await _0x58b776.relayMessage(_0x459d0f, _0xd1fe97.message, {
        'messageId': _0xd1fe97.key.id
      });
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (_0xd45488) {
    console.error("Error getting response:", _0xd45488.message);
    _0x375278("Error getting response.");
  }
});


zokou({
  nomCom: "ilama",
  aliases: ["llama"],
  reaction: '🤗',
  categorie: 'AI'
};
 async (_0x28aa27, _0x7dfe40, _0x123970) => {
  const {
    repondre: _0x5e622d,
    arg: _0x33cb7c,
    ms: _0x389bc6
  } = _0x123970;
  try {
    if (!_0x33cb7c || _0x33cb7c.length === 0) {
      return _0x5e622d("Hello am *GAGA-MD.* an AI developed by Gaga.\n\n What help can I offer you today?");
    }
    const _0x1a66fc = _0x33cb7c.join(" ");
    const _0x49794f = await fetch("https://api.gurusensei.workers.dev/llama?prompt=" + _0x1a66fc);
    const _0x405b7a = await _0x49794f.json();
    if (_0x405b7a && _0x405b7a.response && _0x405b7a.response.response) {
      const _0x2da44f = _0x405b7a.response.response;
      const _0x20c797 = {
        deviceListMetadata: {},
        deviceListMetadataVersion: 0x2
      };
      const _0xc1d67e = {
        text: _0x2da44f
      };
      const _0x1d89a4 = {
        title: '',
        subtitle: '',
        hasMediaAttachment: false
      };
      const _0x52fd13 = {
        buttons: []
      };
      const _0x5c8da7 = generateWAMessageFromContent(_0x28aa27, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': _0x20c797,
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create(_0xc1d67e),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "> *POWERED BY GAGA-MD*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create(_0x1d89a4),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x52fd13),
              'contextInfo': {
                'forwardingScore': 0x5,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363238139244263@newsletter",
                  'newsletterName': "GAGA-MD",
                  'serverMessageId': 0x8f,
                  'sourceUrl': ""
                }
              }
            })
          }
        }
      }, {});
      await _0x7dfe40.relayMessage(_0x28aa27, _0x5c8da7.message, {
        'messageId': _0x5c8da7.key.id
      });
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (_0x49bf10) {
    console.error("Error getting response:", _0x49bf10.message);
    _0x5e622d("Error getting response.");
              }
             }); 
