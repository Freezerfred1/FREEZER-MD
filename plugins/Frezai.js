//freezer
//freezer
const {
  zokou
} = require("../framework/zokou");
const traduire = require('../framework/traduction');
const {
  default: axios
} = require("axios");
zokou({
  'nomCom': "bot",
  'reaction': '🥷',
  'categorie': 'AI'
}, async (_0x551f98, _0x13d4f3, _0x45dc6a) => {
  const {
    repondre: _0x559c5a,
    ms: _0x42e758,
    arg: _0x13678d
  } = _0x45dc6a;
  if (!_0x13678d || !_0x13678d[0x0]) {
    return _0x559c5a("Hii, im Freezer md ,a whatsapp bot developed by Richardgag.How are you today?");
  }
  try {
    const _0x526e2f = await traduire(_0x13678d.join(" "), {
      'to': 'en'
    });
    console.log(_0x526e2f);
    fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x526e2f).then(_0xe73ed8 => _0xe73ed8.json()).then(_0x13396d => {
      const _0x4ba9ad = _0x13396d.cnt;
      console.log(_0x4ba9ad);
      traduire(_0x4ba9ad, {
        'to': 'en'
      }).then(_0x2663f2 => {
        _0x559c5a(_0x2663f2);
      })["catch"](_0x5ce2ee => {
        console.error("Error when translating into French :", _0x5ce2ee);
        _0x559c5a("Error when translating into French");
      });
    })['catch'](_0x2fdc75 => {
      console.error("Error requesting BrainShop :", _0x2fdc75);
      _0x559c5a("Error requesting BrainShop");
    });
  } catch (_0xdf510b) {
    _0x559c5a("oops an error : " + _0xdf510b);
  }
});
zokou({
  'nomCom': 'dalle',
  'reaction': '🤡',
  'categorie': 'AI'
}, async (_0x1016c6, _0x454458, _0x346531) => {
  const {
    repondre: _0x59b3cb,
    arg: _0x1999b7,
    ms: _0x159e4f
  } = _0x346531;
  try {
    if (!_0x1999b7 || _0x1999b7.length === 0x0) {
      return _0x59b3cb("Please enter the necessary information to generate the image.");
    }
    const _0x5311fb = _0x1999b7.join(" ");
    const _0x123565 = await axios.get("https://vihangayt.me/tools/photoleap?q=" + _0x5311fb);
    const _0xd24ada = _0x123565.data;
    if (_0xd24ada.status && _0xd24ada.owner && _0xd24ada.data) {
      const _0x593fc2 = _0xd24ada.data;
      _0x454458.sendMessage(_0x1016c6, {
        'image': {
          'url': _0x593fc2
        },
        'caption': "*powered by gaga*"
      }, {
        'quoted': _0x159e4f
      });
    } else {
      _0x59b3cb("Error during image generation.");
    }
  } catch (_0x4e65ae) {
    console.error("Erreur:", _0x4e65ae.message || "Une erreur s'est produite");
    _0x59b3cb("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "gpt",
  'reaction': '🎃',
  'categorie': 'AI'
}, async (_0x13d017, _0x11b93c, _0x3c0eaf) => {
  const {
    repondre: _0x42f6d0,
    arg: _0x792e02,
    ms: _0x27c976
  } = _0x3c0eaf;
  try {
    if (!_0x792e02 || _0x792e02.length === 0x0) {
      return _0x42f6d0("Please ask a question and Gaga md will answer.");
    }
    const _0x266b70 = _0x792e02.join(" ");
    const _0x60561f = "https://ultimetron.guruapi.tech/gpt3?prompt=" + _0x266b70;
    const _0x5cee63 = _0x60561f.data;
    if (_0x5cee63) {
      _0x42f6d0(_0x5cee63.data);
    } else {
      _0x42f6d0("Error during response generation.");
    }
  } catch (_0x508fbe) {
    console.error("Erreur:", _0x508fbe.message || "Une erreur s'est produite");
    _0x42f6d0("Oops, an error occurred while processing your request.");
  }
});
