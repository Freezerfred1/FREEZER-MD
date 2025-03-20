//gaga

const {
  zokou
} = require(__dirname + '/../framework/zokou');
const {
  format
} = require(__dirname + '/../framework/mesfonctions');
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({
  'nomCom': "menu2",
  'categorie': "General"
}, async (_0x48d603, _0x4ee850, _0x3ea708) => {
  let {
    ms: _0x170501,
    repondre: _0x568ebc,
    prefixe: _0xfe1133,
    nomAuteurMessage: _0x14e85c,
    mybotpic: _0x553074
  } = _0x3ea708;
  let {
    cm: _0xd029dc
  } = require(__dirname + "/../framework//zokou");
  var _0x556c57 = {};
  var _0x3a755b = "public";
  if (s.MODE.toLocaleLowerCase() != 'yes') {
    _0x3a755b = "private";
  }
  _0xd029dc.map(async (_0x525567, _0x54da91) => {
    if (!_0x556c57[_0x525567.categorie]) {
      _0x556c57[_0x525567.categorie] = [];
    }
    _0x556c57[_0x525567.categorie].push(_0x525567.nomCom);
  });
  moment.tz.setDefault('Asia/Karachi');
  let _0x2313df = "\n╭────〖 *FREEZER-BOTS* 〗────╮\n│﹄ *Prefix* : " + s.PREFIXE + "\n│﹄ *Owner* : " + s.OWNER_NAME + "\n│﹄ *Mode* : " + _0x3a755b + "\n│﹄ *Commands* : " + _0xd029dc.length + " \n│﹄ *Ram* : " + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + "\n│﹄ *Developer* : Gaga\n│﹄ *Version* : freeyond\n╰─────{ *FREEZER BOTS* }─────o: \n\n";
  let _0x7a5179 = "  \n\n*GAGA.BOTZ Commands :*\n◇                             ◇\n";
  for (const _0x7b5d9 in _0x556c57) {
    _0x7a5179 += "*o:* *" + _0x7b5d9 + "* *o:*";
    for (const _0x4bd5be of _0x556c57[_0x7b5d9]) {
      _0x7a5179 += "\n *|* " + s.PREFIXE + " " + _0x4bd5be;
    }
    _0x7a5179 += "\n*╰═════════════⊷* \n";
  }
  _0x7a5179 += "\n\n*—— Channel link: ——*\n\nhttps://whatsapp.com/channel/0029Vb5mxL6F1YlTPss80Y2t\n  \n*——————————————————————————————*\n";
  var _0x2f3fd2 = _0x553074();
  if (_0x2f3fd2.match(/\.(mp4|gif)$/i)) {
    try {
      _0x4ee850.sendMessage(_0x48d603, {
        'video': {
          'url': "https://files.catbox.moe/sfk02i.jpg"
        },
        'caption': _0x2313df + _0x7a5179,
        'footer': "*Powered by FREEZER-MD bots*",
        'gifPlayback': true
      }, {
        'quoted': _0x170501
      });
    } catch (_0x28d32b) {
      console.log("Awhhhhh Menu Error " + _0x28d32b);
      _0x568ebc("Awhhhhh Menu Error " + _0x28d32b);
    }
  } else {
    if (_0x2f3fd2.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x4ee850.sendMessage(_0x48d603, {
          'image': {
            'url': _0x2f3fd2
          },
          'caption': _0x2313df + _0x7a5179,
          'footer': "*FREEZER-MD BOTS*"
        }, {
          'quoted': _0x170501
        });
      } catch (_0x4001eb) {
        console.log("Awhhhhh Menu Error " + _0x4001eb);
        _0x568ebc("Awhhhhh Menu Error " + _0x4001eb);
      }
    } else {
      _0x568ebc(_0x2313df + _0x7a5179);
    }
  }
});
