(function (_0x25502f, _0x212439) {
  const _0x4e019b = _0x25502f();
  while (true) {
    try {
      const _0x4f2f34 = parseInt(_0x5015(1248, 0x6c1)) / 1 * (parseInt(_0x5015(500, -0x21e)) / 2) + parseInt(_0x5015(557, 0x77c)) / 3 * (-parseInt(_0x5015(1296, 0x1e7)) / 4) + -parseInt(_0x5015(1535, 0x7f0)) / 5 + -parseInt(_0x5015(815, -0xd8)) / 6 * (parseInt(_0x5015(1900, 0xa11)) / 7) + -parseInt(_0x5015(1469, 0x465)) / 8 * (-parseInt(_0x5015(1425, 0xa25)) / 9) + -parseInt(_0x5015(1843, 0x978)) / 10 + parseInt(_0x5015(951, 0x61c)) / 11 * (parseInt(_0x5015(1563, 0x78c)) / 12);
      if (_0x4f2f34 === _0x212439) {
        break;
      } else {
        _0x4e019b.push(_0x4e019b.shift());
      }
    } catch (_0x3e3dd9) {
      _0x4e019b.push(_0x4e019b.shift());
    }
  }
})(_0x482f, 726267);
const _0x2a46f5 = function () {
  let _0x2b5b5e = true;
  return function (_0x562182, _0xd2c55c) {
    const _0x290ca5 = _0x2b5b5e ? function () {
      if (_0xd2c55c) {
        const _0x3cf85b = _0xd2c55c.apply(_0x562182, arguments);
        _0xd2c55c = null;
        return _0x3cf85b;
      }
    } : function () {};
    _0x2b5b5e = false;
    return _0x290ca5;
  };
}();
const _0x4d9795 = _0x2a46f5(this, function () {
  return _0x4d9795.toString().search("(((.+)+)+)+$").toString().constructor(_0x4d9795).search("(((.+)+)+)+$");
});
_0x4d9795();
const _0x233729 = function () {
  let _0x33bf53 = true;
  return function (_0x4e9e19, _0x21cd8f) {
    const _0x701598 = _0x33bf53 ? function () {
      if (_0x21cd8f) {
        const _0x58d758 = _0x21cd8f.apply(_0x4e9e19, arguments);
        _0x21cd8f = null;
        return _0x58d758;
      }
    } : function () {};
    _0x33bf53 = false;
    return _0x701598;
  };
}();
(function () {
  _0x233729(this, function () {
    const _0x12ea34 = new RegExp("function *\\( *\\)");
    const _0x462bd3 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x3b5f29 = _0x5e1229("init");
    if (!_0x12ea34.test(_0x3b5f29 + "chain") || !_0x462bd3.test(_0x3b5f29 + "input")) {
      _0x3b5f29('0');
    } else {
      _0x5e1229();
    }
  })();
})();
const _0xdf7ed7 = function () {
  let _0x3141bb = true;
  return function (_0xbb7171, _0xe3cd28) {
    const _0x41499b = _0x3141bb ? function () {
      if (_0xe3cd28) {
        const _0x3d0018 = _0xe3cd28.apply(_0xbb7171, arguments);
        _0xe3cd28 = null;
        return _0x3d0018;
      }
    } : function () {};
    _0x3141bb = false;
    return _0x41499b;
  };
}();
const _0x1b1ed5 = _0xdf7ed7(this, function () {
  const _0x26d5a0 = function () {
    let _0x345856;
    try {
      _0x345856 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x1a9e93) {
      _0x345856 = window;
    }
    return _0x345856;
  };
  const _0x34e536 = _0x26d5a0();
  const _0xd2d8d6 = _0x34e536.console = _0x34e536.console || {};
  const _0x3d793a = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x2645bf = 0; _0x2645bf < _0x3d793a.length; _0x2645bf++) {
    const _0x1cac4a = _0xdf7ed7.constructor.prototype.bind(_0xdf7ed7);
    const _0x4117ab = _0x3d793a[_0x2645bf];
    const _0x19b019 = _0xd2d8d6[_0x4117ab] || _0x1cac4a;
    _0x1cac4a.__proto__ = _0xdf7ed7.bind(_0xdf7ed7);
    _0x1cac4a.toString = _0x19b019.toString.bind(_0x19b019);
    _0xd2d8d6[_0x4117ab] = _0x1cac4a;
  }
});
_0x1b1ed5();
const {
  zokou
} = require("../framework/zokou");
const {
  default: axios
} = require("axios");
const pkg = require("@whiskeysockets/baileys");
const {
  generateWAMessageFromContent,
  proto
} = pkg;
const _0x22fb16 = {
  nomCom: "gemini2",
  aliases: ["gemini-ai"],
  reaction: '🌟',
  categorie: 'AI'
};
zokou(_0x22fb16, async (_0x459d0f, _0x58b776, _0x13dd55) => {
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
                'text': "> *POWERED BY FREEZER-MD*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create(_0x5c8ed3),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x128a35),
              'contextInfo': {
                'forwardingScore': 0x5,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363238139244263@newsletter",
                  'newsletterName': "FREEZER-MD",
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
const _0x2b8880 = {
  nomCom: "ilama",
  aliases: ["llama"],
  reaction: '🤗',
  categorie: 'AI'
};
zokou(_0x2b8880, async (_0x28aa27, _0x7dfe40, _0x123970) => {
  const {
    repondre: _0x5e622d,
    arg: _0x33cb7c,
    ms: _0x389bc6
  } = _0x123970;
  try {
    if (!_0x33cb7c || _0x33cb7c.length === 0) {
      return _0x5e622d("Hello am *FREEZER-MD.* an AI developed by Freezer.\n\n What help can I offer you today?");
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
                'text': "> *POWERED BY FREEZER-MD*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create(_0x1d89a4),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x52fd13),
              'contextInfo': {
                'forwardingScore': 0x5,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363238139244263@newsletter",
                  'newsletterName': "FREEZER-MD",
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
const _0x24b8e5 = {
  nomCom: "number",
  aliases: ["checknum", "validate", "numinfo", "valid"],
  reaction: '📞',
  categorie: "General"
};
king(_0x24b8e5, async (_0x49f105, _0x4357a7, _0xfb7ef8) => {
  const {
    repondre: _0x267236,
    arg: _0x4cff92,
    ms: _0x271552
  } = _0xfb7ef8;
  try {
    if (!_0x4cff92 || _0x4cff92.length === 0) {
      return _0x267236("Please enter a phone number to validate.");
    }
    const _0x4fef66 = _0x4cff92.join(" ");
    const _0x310baa = await fetch("https://tajammalmods.xyz/Validater.php?num=" + _0x4fef66);
    const _0x5ac348 = await _0x310baa.json();
    if (_0x5ac348.valid) {
      const _0x4f30f3 = _0x5ac348.carrier;
      const _0xebb9bf = _0x5ac348.country;
      const _0x9659f0 = _0x5ac348.international_format;
      const _0x5dc601 = _0x5ac348.national_format;
      const _0x3287f4 = _0x5ac348.line_type === 1 ? "Mobile" : "Landline";
      const _0x540f2e = _0x5ac348.location;
      const _0x567643 = _0x5ac348.time_zones[0];
      await _0x267236("Phone Number Validation:\n\n*Carrier:* " + _0x4f30f3 + "\n*Country:* " + _0xebb9bf + "\n*International Format:* " + _0x9659f0 + "\n*National Format:* " + _0x5dc601 + "\n*Line Type:* " + _0x3287f4 + "\n*Location:* " + _0x540f2e + "\n*Time Zone:* " + _0x567643 + "\n\n> *POWERED BY FLASH-MD*");
    } else {
      await _0x267236("The phone number is invalid!");
    }
  } catch (_0x2978c9) {
    _0x267236("There was an error processing your request. Please try again later.");
  }
});
const _0x1f4e54 = {
  nomCom: "technews",
  reaction: '📰',
  categorie: "News"
};
zokou(_0x1f4e54, async (_0x28ef9a, _0x366231, _0x4c269a) => {
  const {
    repondre: _0x1f9ffb,
    ms: _0x1c0d44
  } = _0x4c269a;
  try {
    const _0x17477f = await axios.get("https://fantox001-scrappy-api.vercel.app/technews/random");
    const _0x266529 = _0x17477f.data;
    const {
      thumbnail: _0x12cf19,
      news: _0x220547
    } = _0x266529;
    const _0x3e56df = "*FREEZER-MD TECH NEWS*\n\n" + _0x220547 + "\n\n*Powered by © Iconic *";
    const _0x443c13 = {
      url: _0x12cf19
    };
    const _0x45841d = {
      image: _0x443c13,
      caption: _0x3e56df
    };
    const _0x2b8772 = {
      quoted: _0x1c0d44
    };
    await _0x366231.sendMessage(_0x28ef9a, _0x45841d, _0x2b8772);
  } catch (_0x180abc) {
    console.error("Error fetching tech news:", _0x180abc);
    await _0x1f9ffb("Sorry, there was an error retrieving the news. Please try again later.\n" + _0x180abc);
  }
});
const _0x5b25f4 = {
  nomCom: "pair",
  aliases: ["pairing", "generatecode"],
  reaction: '🔗',
  categorie: "user",
  desc: "Generates a pairing code for a phone number."
};
zokou(_0x5b25f4, async (_0x6ad15c, _0x57e88d, _0x37c0f7) => {
  const {
    repondre: _0x2cfe25,
    arg: _0x2c32f2,
    ms: _0xbfb4dc
  } = _0x37c0f7;
  try {
    if (!_0x2c32f2 || _0x2c32f2.length === 0) {
      return _0x2cfe25("Please provide a phone number to generate a pairing code.");
    }
    const _0x427ddf = _0x2c32f2.join(" ");
    const _0x31f341 = await fetch("https://the-fh-md-sessions.onrender.com/code?number=" + encodeURIComponent(_0x427ddf));
    if (!_0x31f341.ok) {
      return _0x2cfe25("Failed to generate pairing code. Please try again later.");
    }
    await _0x2cfe25("*A MOMENT FREEZER-MD IS GETTING YOUR PAIRING CODE*");
    const _0x5ea553 = await _0x31f341.json();
    if (_0x5ea553 && _0x5ea553.code) {
      const _0x181f5f = _0x5ea553.code;
      await _0x2cfe25("Your pairing code for number *" + _0x427ddf + "* is:");
      await _0x2cfe25("```" + _0x181f5f + "```");
      await _0x2cfe25("> *Powered by FREEZER-MD);
    } else {
      await _0x2cfe25("Could not retrieve the pairing code. Please check the number and try again.");
    }
  } catch (_0x3302e8) {
    console.error(_0x3302e8);
    await _0x2cfe25("There was an error processing your request. Please try again later.");
  }
});
const _0x1c3b19 = {
  nomCom: "mail",
  aliases: ["tempmail", "temp"],
  reaction: '📧',
  categorie: "General"
};
zokou(_0x1c3b19, async (_0x3217e6, _0x294d5e, _0x2c3f2d) => {
  const {
    repondre: _0x442590,
    prefixe: _0x373006,
    ms: _0x1f3bef
  } = _0x2c3f2d;
  try {
    const _0x2d0d99 = Math.random().toString(36).substring(2, 12);
    const _0x734404 = _0x2d0d99 + "@1secmail.com";
    const _0x5829ec = {
      text: "Your temporary email is: " + _0x734404 + "\n\nYou can use this email for temporary purposes. I will notify you if you receive any emails."
    };
    const _0x39d0e8 = {
      quoted: _0x1f3bef
    };
    await _0x294d5e.sendMessage(_0x3217e6, _0x5829ec, _0x39d0e8);
    const _0x19475e = _0x569f4f => {
      const _0x1b37f1 = /(https?:\/\/[^\s]+)/g;
      return _0x569f4f.match(_0x1b37f1);
    };
    const _0xbc9f29 = async () => {
      const _0x19e7a8 = {
        fuuzR: "cta_copy"
      };
      _0x19e7a8.EqCkD = "📋 COPY RESULTS";
      _0x19e7a8.MuOpe = "copy_code";
      try {
        const _0x3633c2 = await fetch("https://www.1secmail.com/api/v1/?action=getMessages&login=" + _0x2d0d99 + "&domain=1secmail.com");
        const _0x18fd94 = await _0x3633c2.json();
        if (_0x18fd94 && _0x18fd94.length > 0) {
          for (const _0x2d0c42 of _0x18fd94) {
            const _0x49e0cc = await fetch("https://www.1secmail.com/api/v1/?action=readMessage&login=" + _0x2d0d99 + "&domain=1secmail.com&id=" + _0x2d0c42.id);
            const _0x49b4b6 = await _0x49e0cc.json();
            const _0x23143f = _0x19475e(_0x49b4b6.textBody);
            const _0x5a43ee = _0x23143f ? _0x23143f.join("\n") : "No links found in the email content.";
            const _0xb53b6f = {
              text: "You have received a new email!\n\nFrom: " + _0x49b4b6.from + "\nSubject: " + _0x49b4b6.subject + "\n\n" + _0x49b4b6.textBody + "\n\nLinks found:\n" + _0x5a43ee
            };
            const _0x23339d = {
              quoted: _0x1f3bef
            };
            await _0x294d5e.sendMessage(_0x3217e6, _0xb53b6f, _0x23339d);
          }
        }
      } catch (_0x3b49eb) {
        console.error("Error checking temporary email:", _0x3b49eb.message);
      }
    };
    const _0x1b8331 = setInterval(_0xbc9f29, 30000);
    setTimeout(() => {
      clearInterval(_0x1b8331);
      const _0x4c055f = {
        text: "Your temporary email session has ended. Please create a new temporary email if needed."
      };
      const _0x27fe00 = {
        quoted: _0x1f3bef
      };
      _0x294d5e.sendMessage(_0x3217e6, _0x4c055f, _0x27fe00);
    }, 600000);
  } catch (_0x5cb110) {
    console.error("Error generating temporary email:", _0x5cb110.message);
    const _0x134964 = {
      text: "Error generating temporary email. Please try again later."
    };
    const _0x2251cc = {
      quoted: _0x1f3bef
    };
    await _0x294d5e.sendMessage(_0x3217e6, _0x134964, _0x2251cc);
  }
});
const _0x5f47c8 = {
  nomCom: "FREEZER",
  reaction: '📡',
  categorie: 'AI'
};
zokou(_0x5f47c8, async (_0x335619, _0x285cb4, _0x55e8a2) => {
  const {
    repondre: _0xc88d5f,
    ms: _0x27c8c5,
    arg: _0x5a50b8
  } = _0x55e8a2;
  if (!_0x5a50b8 || !_0x5a50b8[0]) {
    return _0xc88d5f("YEES!\n _I'm listening to you._");
  }
  try {
    const _0x52f171 = _0x5a50b8.join(" ");
    const _0x5e0470 = await fetch("http://api.brainshop.ai/get?bid=181821&key=ltFzFIXrtj2SVMTX&uid=[uid]&msg=" + _0x52f171);
    const _0x2ed20d = await _0x5e0470.json();
    await _0xc88d5f(_0x2ed20d.cnt);
  } catch {
    _0xc88d5f("something went wrong...");
  }
});
const _0x1db11b = {
  nomCom: "dall",
  aliases: ["dall", "dal"],
  reaction: '📡',
  categorie: 'AI'
};
zokou(_0x1db11b, async (_0x4db48a, _0x4255e6, _0x2b68b2) => {
  const {
    repondre: _0x3556ad,
    arg: _0x2a0820,
    ms: _0x5f250d
  } = _0x2b68b2;
  try {
    if (!_0x2a0820 || _0x2a0820.length === 0) {
      return _0x3556ad("Please enter the necessary information to generate the image.");
    }
    const _0x240375 = _0x2a0820.join(" ");
    const _0x4c73c7 = "https://widipe.com/dalle?text=" + _0x240375;
    const _0x5b1ca9 = {
      url: _0x4c73c7
    };
    const _0x19d47c = {
      image: _0x5b1ca9,
      caption: "*Powered by FREEZER-MD*"
    };
    const _0x2916aa = {
      quoted: _0x5f250d
    };
    _0x4255e6.sendMessage(_0x4db48a, _0x19d47c, _0x2916aa);
  } catch (_0x1c3347) {
    console.error("Erreur:", _0x1c3347.message || "Une erreur s'est produite");
    _0x3556ad("Oops, an error occurred while processing your request");
  }
});
const _0x5e8a0d = {
  nomCom: "gpt3",
  aliases: ["chatgpt"],
  reaction: '🤖',
  categorie: 'AI',
  desc: "Fetches AI responses from the Gemini API based on a provided prompt."
};
zokou(_0x5e8a0d, async (_0x2054ca, _0x40ee01, _0xd2dbfd) => {
  const {
    repondre: _0x48da1d,
    arg: _0x2c30f8,
    ms: _0x3055e5
  } = _0xd2dbfd;
  try {
    if (!_0x2c30f8 || _0x2c30f8.length === 0) {
      return _0x48da1d("Please provide a prompt for the Gemini AI.");
    }
    const _0x1a3ee7 = _0x2c30f8.join(" ");
    const _0x38bf69 = await fetch("https://www.noobs-api.000.pe/dipto/gemini?prompt=" + encodeURIComponent(_0x1a3ee7));
    if (!_0x38bf69.ok) {
      return _0x48da1d("Failed to get a response from the Gemini AI. Please try again later.");
    }
    const _0x29ceeb = await _0x38bf69.json();
    if (_0x29ceeb && _0x29ceeb.dipto) {
      const _0x53bb41 = _0x29ceeb.dipto;
      await _0x48da1d(_0x53bb41);
    } else {
      await _0x48da1d("Could not retrieve a response from Gemini AI. Please try again later.");
    }
  } catch (_0x8f322a) {
    console.error(_0x8f322a);
    await _0x48da1d("There was an error processing your request. Please try again later.");
  }
});
const _0x3f7bb5 = {
  nomCom: "calc",
  aliases: ["cal", "calculate"],
  reaction: '🔢',
  categorie: "General"
};
zokou(_0x3f7bb5, async (_0x272ba7, _0x5a56d9, _0xd87e04) => {
  const {
    repondre: _0x27cabd,
    arg: _0x541a00,
    ms: _0x448004
  } = _0xd87e04;
  if (!_0x541a00 || _0x541a00.length === 0) {
    return _0x27cabd("Please insert math calculations like 100000+2024.\n\nNOTE: Use \"(/)\" for division and \"(*)\" for multiplication or letter x");
  }
  const _0x2ccfa4 = _0x541a00.join(" ");
  const _0x23d162 = await fetch("https://api.maher-zubair.tech/ai/mathssolve?q=" + _0x2ccfa4);
  const _0x1471be = await _0x23d162.json();
  await _0x27cabd(_0x1471be.result);
  console.log(_0x1471be.completion);
});
(function () {
  const _0x5bab0f = function () {
    let _0x79378d;
    try {
      _0x79378d = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x3d0c47) {
      _0x79378d = window;
    }
    return _0x79378d;
  };
  const _0x1997f8 = _0x5bab0f();
  _0x1997f8.setInterval(_0x5e1229, 4000);
})();
const _0x3321e6 = {
  nomCom: "best-wallp",
  aliases: ["bestwal", "best", 'bw'],
  reaction: '🙌',
  categorie: "FREEZER PICS"
};
zokou(_0x3321e6, async (_0x39514f, _0x373333, _0x5d4a6b) => {
  const {
    repondre: _0x26fce5,
    arg: _0x8158d5,
    ms: _0x47aa78
  } = _0x5d4a6b;
  const _0x467761 = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const _0x365dc6 = await _0x467761.json();
  const _0x2379c0 = _0x365dc6.urls.regular;
  const _0x258619 = {
    url: _0x2379c0
  };
  const _0x4d78d9 = {
    image: _0x258619
  };
  _0x4d78d9.caption = "*POWERED BY FREEZER-MD*";
  const _0xed4676 = {
    quoted: _0x47aa78
  };
