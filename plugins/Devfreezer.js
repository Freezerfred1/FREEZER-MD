

const { zokou } = require("../framework/zokou");
const { getAllSudoNumbers, isSudoTableNotEmpty } = require("../bdd/sudo");
const conf = require("../set");

zokou({
  nomCom: "owner",
  desc: "to generate owner vcard number",
  categorie: "Support",
  reaction: "🥷"
}, async (dest, zk, commandeOptions) => {
  const { ms, mybotpic } = commandeOptions;

  const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
  const sudos = await getAllSudoNumbers();
  const mentionedJid = sudos.concat([ownerjid]);
  console.log(sudos);
  console.log(mentionedJid);

  if (await isSudoTableNotEmpty()) {
    zk.sendMessage(
      dest,
      {
        image: { url: mybotpic() },
        caption: `Hello @${mentionedJid.join(", ")}`,
        mentions: mentionedJid
      }
    );
  } else {
    const vcard =
      'BEGIN:VCARD\n' + // metadata of the contact card
      'VERSION:3.0\n' +
      'FN:' + conf.OWNER_NAME + '\n' + // full name
      'ORG:undefined;\n' + // the organization of the contact
      'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
      'END:VCARD';
    zk.sendMessage(dest, {
      contacts: {
        displayName: conf.OWNER_NAME,
        contacts: [{ vcard }],
      },
    }, { quoted: ms });
  }
});

zokou({
  nomCom: "dev",
  aliases: ["developer", "deve"],
  categorie: "Support",
  reaction: "⚠️"
}, async (dest, zk, commandeOptions) => {
  const { ms, mybotpic } = commandeOptions;

  // Define developer contacts with names
  const devContacts = [
    { name: 'Freezer', number: '254798757856' },
    { name: 'Fredric Sirengo', number: '254110642442' },
  ];

  // Inform about the developer contacts
  await zk.sendMessage(dest, {
    text: "Below are the developer contacts:",
  }, { quoted: ms });

  // Prepare VCards for developer contacts
  const vcards = devContacts.map(contact => (
    'BEGIN:VCARD\n' +
    'VERSION:3.0\n' +
    `FN:${contact.name}\n` +
    'ORG:undefined;\n' +
    `TEL;type=CELL;type=VOICE;waid=${contact.number}:${contact.number}\n` +
    'END:VCARD'
  ));

  // Send message with VCard contacts
  zk.sendMessage(dest, {
    contacts: {
      displayName: 'FREEZER-MD DEVELOPERS',
      contacts: vcards.map(vcard => ({ vcard })),
    },
  }, { quoted: ms });
});

zokou({
  nomCom: "participants",
  aliases: ["members", "groupmembers"],
  desc: "to list members vcard contacts in a group",
  categorie: "General",
  reaction: "🥏"
}, async (dest, zk, commandeOptions) => {
  const { ms, mybotpic, verifGroupe, repondre } = commandeOptions;

  if (!verifGroupe) {
    repondre("✋🏿 ✋🏿 This command is reserved for groups ❌");
    return;
  }

  // Get the group metadata
  const groupMetadata = await zk.groupMetadata(dest);
  const participants = groupMetadata.participants;

  // Inform about the group participants' contacts
  await zk.sendMessage(dest, {
    text: "Below are the group participants' contacts:",
  }, { quoted: ms });

  // Prepare VCards for group participants
  const vcards = participants.map(participant => {
    const contactName = participant.notify || participant.id.split('@')[0]; // Use notify property or fallback to id
    return (
      'BEGIN:VCARD\n' +
      'VERSION:3.0\n' +
      `FN:${contactName}\n` +
      'ORG:Group Participant;\n' +
      `TEL;type=CELL;type=VOICE;waid=${participant.id.split('@')[0]}:+${participant.id.split('@')[0]}\n` +
      'END:VCARD'
    );
  });

  // Send message with VCard contacts
  zk.sendMessage(dest, {
    contacts: {
      displayName: 'Group Participants',
      contacts: vcards.map(vcard => ({ vcard })),
    },
  }, { quoted: ms });
});
 
