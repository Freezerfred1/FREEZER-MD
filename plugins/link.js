const {
  zokou
} = require("../framework/zokou");
const {
  default: axios
} = require("axios");
zokou({
  'nomCom': "link",
  'aliases': ["session", "pair", "paircode", "qrcode"],
  'reaction': '♂️',
  'categorie': "General"
}, async (_0x2ce843, _0x1c44fd, _0x32de8a) => {
  const {
    repondre: _0x2e61d5,
    arg: _0x8621a4
  } = _0x32de8a;
  try {
    if (!_0x8621a4 || _0x8621a4.length === 0) {
      return _0x2e61d5("Example Usage: .code 25479875xxxx.");
    }
    await _0x2e61d5("*Please wait,Freezer is generating your link code ✅...*");
    const _0x386b0a = encodeURIComponent(_0x8621a4.join(" "));
    const _0x1ea92d = "" + _0x386b0a;
    const _0xb59e41 = await axios.get(_0x1ea92d);
    const _0x1b71f0 = _0xb59e41.data;
    if (_0x1b71f0 && _0x1b71f0.code) {
      const _0x40751a = _0x1b71f0.code;
      await _0x2e61d5('' + _0x40751a);
      await _0x2e61d5("Here is your pair code, copy and paste it to the notification above or link devices.\n\n> ʙᴇʟᴛᴀʜ ᴛᴇᴄʜ 👻");
    } else {
      throw new Error("Invalid response from API.");
    }
  } catch (_0x21fdc6) {
    console.error("Error getting API response:", _0x21fdc6.message);
    _0x2e61d5("Error getting response from API.");
  }
});
