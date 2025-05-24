const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu4",
    desc: "Show interactive menu system",
    category: "menu4",
    react: "🧾",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const menuCaption = `╭━━━〔 *${config.BOT_NAME}* 〕━━━┈⊷
┃◈╭──❍「 *USER INFO* 」❍
┃◈├• 👑 Owner : *${config.OWNER_NAME}*
┃◈├• 🤖 Baileys : *Multi Device*
┃◈├• 🖥️ Type : *NodeJs*
┃◈├• 🚀 Platform : *Heroku*
┃◈├• ⚙️ Mode : *[${config.MODE}]*
┃◈├• 🔣 Prefix : *[${config.PREFIX}]*
┃◈├• 🏷️ Version : *4.0.0 Bᴇᴛᴀ*
┃◈╰─┬─★─☆──♪♪─❍
┃◈╭─┴❍「 *BOT STATUS* 」❍
┃◈├• 📥 *Download Menu* - Media downloads
┃◈├• 👥 *Group Menu* - Group management
┃◈├• 🤣 *Fun Menu* - Entertainment
┃◈├• 👑 *Owner Menu* - Bot owner tools
┃◈├• 🤖 *AI Menu* - AI features
┃◈├• 🎎 *Anime Menu* - Anime content
┃◈├• ♻️ *Convert Menu* - File conversion
┃◈├• 📌 *Other Menu* - Utilities
┃◈├• 💔 *Reactions Menu* - Expressive actions
┃◈├• 🏫 *Main Menu* - Core commands
┃◈╰─┬─★─☆──♪♪─❍
╰━━━〔 *FREE PALASTINE* 〕━━━┈⊷
> ${config.DESCRIPTION}`;

        const buttons = [
            { buttonId: '1', buttonText: { displayText: '📥 Download' }, type: 1 },
            { buttonId: '2', buttonText: { displayText: '👥 Group' }, type: 1 },
            { buttonId: '3', buttonText: { displayText: '🤣 Fun' }, type: 1 },
            { buttonId: '4', buttonText: { displayText: '👑 Owner' }, type: 1 },
            { buttonId: '5', buttonText: { displayText: '🤖 AI' }, type: 1 },
            { buttonId: '6', buttonText: { displayText: '🎎 Anime' }, type: 1 },
            { buttonId: '7', buttonText: { displayText: '♻️ Convert' }, type: 1 },
            { buttonId: '8', buttonText: { displayText: '📌 Other' }, type: 1 },
            { buttonId: '9', buttonText: { displayText: '💔 Reactions' }, type: 1 },
            { buttonId: '10', buttonText: { displayText: '🏫 Main' }, type: 1 }
        ];

        const buttonMessage = {
            text: menuCaption,
            footer: `Reply with the number or click the button\n${config.DESCRIPTION}`,
            buttons: buttons,
            headerType: 1,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true
            }
        };

        // Send the interactive message with buttons
        await conn.sendMessage(from, buttonMessage, { quoted: mek });

        // Menu data for each section
        const menuData = {
            '1': {
                title: "📥 *Download Menu* 📥",
                content: `╭━━━〔 *Download Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  🌐 *Social Media*
┃◈├• • facebook [url]
┃◈├• • mediafire [url]
┃◈├•  • tiktok [url]
┃◈├•  • twitter [url]
┃◈├•  • Insta [url]
┃◈├•  • apk [app]
┃◈├•  • img [query]
┃◈├•  • tt2 [url]
┃◈├•  • pins [url]
┃◈├•  • apk2 [app]
┃◈├•  • fb2 [url]
┃◈├•  • pinterest [url]
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🎵 *Music/Video*
┃◈├•  • spotify [query]
┃◈├•  • play [song]
┃◈├•  • play2-10 [song]
┃◈├•  • audio [url]
┃◈├•  • video [url]
┃◈├•  • video2-10 [url]
┃◈├•  • ytmp3 [url]
┃◈├•  • ytmp4 [url]
┃◈├•  • song [name]
┃◈├•  • darama [name]
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                buttons: [
                    { buttonId: 'back', buttonText: { displayText: '🔙 Back' }, type: 1 },
                    { buttonId: 'close', buttonText: { displayText: '❌ Close' }, type: 1 }
                ]
            },
            '2': {
                title: "👥 *Group Menu* 👥",
                content: `╭━━━〔 *Group Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  🛠️ *Management*
┃◈├•  • grouplink
┃◈├•  • kickall
┃◈├•  • kickall2
┃◈├•  • kickall3
┃◈├•  • add @user
┃◈├•  • remove @user
┃◈├•  • kick @user
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  ⚡ *Admin Tools*
┃◈├•  • promote @user
┃◈├•  • demote @user
┃◈├•  • dismiss 
┃◈├•  • revoke
┃◈├•  • mute [time]
┃◈├•  • unmute
┃◈├•  • lockgc
┃◈├•  • unlockgc
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🏷️ *Tagging*
┃◈├•  • tag @user
┃◈├•  • hidetag [msg]
┃◈├•  • tagall
┃◈├•  • tagadmins
┃◈├•  • invite
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                buttons: [
                    { buttonId: 'back', buttonText: { displayText: '🔙 Back' }, type: 1 },
                    { buttonId: 'close', buttonText: { displayText: '❌ Close' }, type: 1 }
                ]
            },
            '3': {
                title: "😄 *Fun Menu* 😄",
                content: `╭━━━〔 *Fun Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  🎭 *Interactive*
┃◈├•  • shapar
┃◈├•  • rate @user
┃◈├•  • insult @user
┃◈├•  • hack @user
┃◈├•  • ship @user1 @user2
┃◈├•  • character
┃◈├•  • pickup
┃◈├•  • joke
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  😂 *Reactions*
┃◈├•  • hrt
┃◈├•  • hpy
┃◈├•  • syd
┃◈├•  • anger
┃◈├•  • shy
┃◈├•  • kiss
┃◈├•  • mon
┃◈├•  • cunfuzed
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                buttons: [
                    { buttonId: 'back', buttonText: { displayText: '🔙 Back' }, type: 1 },
                    { buttonId: 'close', buttonText: { displayText: '❌ Close' }, type: 1 }
                ]
            },
            '4': {
                title: "👑 *Owner Menu* 👑",
                content: `╭━━━〔 *Owner Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  ⚠️ *Restricted*
┃◈├•  • block @user
┃◈├•  • unblock @user
┃◈├•  • fullpp [img]
┃◈├•  • setpp [img]
┃◈├•  • restart
┃◈├•  • shutdown
┃◈├•  • updatecmd
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  ℹ️ *Info Tools*
┃◈├•  • gjid
┃◈├•  • jid @user
┃◈├•  • listcmd
┃◈├•  • allmenu
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                buttons: [
                    { buttonId: 'back', buttonText: { displayText: '🔙 Back' }, type: 1 },
                    { buttonId: 'close', buttonText: { displayText: '❌ Close' }, type: 1 }
                ]
            },
            '5': {
                title: "🤖 *AI Menu* 🤖",
                content: `╭━━━〔 *AI Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  💬 *Chat AI*
┃◈├•  • ai [query]
┃◈├•  • gpt3 [query]
┃◈├•  • gpt2 [query]
┃◈├•  • gptmini [query]
┃◈├•  • gpt [query]
┃◈├•  • meta [query]
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🖼️ *Image AI*
┃◈├•  • imagine [text]
┃◈├•  • imagine2 [text]
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🔍 *Specialized*
┃◈├•  • blackbox [query]
┃◈├•  • luma [query]
┃◈├•  • dj [query]
┃◈├•  • khan [query]
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                buttons: [
                    { buttonId: 'back', buttonText: { displayText: '🔙 Back' }, type: 1 },
                    { buttonId: 'close', buttonText: { displayText: '❌ Close' }, type: 1 }
                ]
            },
            '6': {
                title: "🎎 *Anime Menu* 🎎",
                content: `╭━━━〔 *Anime Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  🖼️ *Images*
┃◈├•  • fack
┃◈├•  • dog
┃◈├•  • awoo
┃◈├•  • garl
┃◈├•  • waifu
┃◈├•  • neko
┃◈├•  • megnumin
┃◈├•  • maid
┃◈├•  • loli
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🎭 *Characters*
┃◈├•  • animegirl
┃◈├•  • animegirl1-5
┃◈├•  • anime1-5
┃◈├•  • foxgirl
┃◈├•  • naruto
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                buttons: [
                    { buttonId: 'back', buttonText: { displayText: '🔙 Back' }, type: 1 },
                    { buttonId: 'close', buttonText: { displayText: '❌ Close' }, type: 1 }
                ]
            },
            '7': {
                title: "🔄 *Convert Menu* 🔄",
                content: `╭━━━〔 *Convert Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  🖼️ *Media*
┃◈├•  • sticker [img]
┃◈├•  • sticker2 [img]
┃◈├•  • emojimix 😎+😂
┃◈├•  • take [name,text]
┃◈├•  • tomp3 [video]
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  📝 *Text*
┃◈├•  • fancy [text]
┃◈├•  • tts [text]
┃◈├•  • trt [text]
┃◈├•  • base64 [text]
┃◈├•  • unbase64 [text]
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                buttons: [
                    { buttonId: 'back', buttonText: { displayText: '🔙 Back' }, type: 1 },
                    { buttonId: 'close', buttonText: { displayText: '❌ Close' }, type: 1 }
                ]
            },
            '8': {
                title: "📌 *Other Menu* 📌",
                content: `╭━━━〔 *Other Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  🕒 *Utilities*
┃◈├•  • timenow
┃◈├•  • date
┃◈├•  • count [num]
┃◈├•  • calculate [expr]
┃◈├•  • countx
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🎲 *Random*
┃◈├•  • flip
┃◈├•  • coinflip
┃◈├•  • rcolor
┃◈├•  • roll
┃◈├•  • fact
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🔍 *Search*
┃◈├•  • define [word]
┃◈├•  • news [query]
┃◈├•  • movie [name]
┃◈├•  • weather [loc]
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                buttons: [
                    { buttonId: 'back', buttonText: { displayText: '🔙 Back' }, type: 1 },
                    { buttonId: 'close', buttonText: { displayText: '❌ Close' }, type: 1 }
                ]
            },
            '9': {
                title: "💞 *Reactions Menu* 💞",
                content: `╭━━━〔 *Reactions Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  ❤️ *Affection*
┃◈├•  • cuddle @user
┃◈├•  • hug @user
┃◈├•  • kiss @user
┃◈├•  • lick @user
┃◈├•  • pat @user
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  😂 *Funny*
┃◈├•  • bully @user
┃◈├•  • bonk @user
┃◈├•  • yeet @user
┃◈├•  • slap @user
┃◈├•  • kill @user
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  😊 *Expressions*
┃◈├•  • blush @user
┃◈├•  • smile @user
┃◈├•  • happy @user
┃◈├•  • wink @user
┃◈├•  • poke @user
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                buttons: [
                    { buttonId: 'back', buttonText: { displayText: '🔙 Back' }, type: 1 },
                    { buttonId: 'close', buttonText: { displayText: '❌ Close' }, type: 1 }
                ]
            },
            '10': {
                title: "🏠 *Main Menu* 🏠",
                content: `╭━━━〔 *Main Menu* 〕━━━┈⊷
┃◈╭──────────────
┃◈├•  ℹ️ *Bot Info*
┃◈├•  • ping
┃◈├•  • live
┃◈├•  • alive
┃◈├•  • runtime
┃◈├•  • uptime
┃◈├•  • repo
┃◈├•  • owner
┃◈╰──────────────
┃◈╭──────────────
┃◈├•  🛠️ *Controls*
┃◈├•  • menu
┃◈├•  • menu2
┃◈├•  • restart
┃◈╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`,
                buttons: [
                    { buttonId: 'back', buttonText: { displayText: '🔙 Back' }, type: 1 },
                    { buttonId: 'close', buttonText: { displayText: '❌ Close' }, type: 1 }
                ]
            },
            'back': {
                title: "🏠 *Main Menu* 🏠",
                content: menuCaption,
                buttons: buttons
            },
            'close': {
                title: "❌ Menu Closed",
                content: `Menu closed. Type *${config.PREFIX}menu4* to open it again.\n\n> ${config.DESCRIPTION}`,
                buttons: []
            }
        };

        // Button interaction handler
        conn.ev.on('messages.upsert', async ({ messages }) => {
            const msg = messages[0];
            if (!msg?.message?.buttonsResponseMessage) return;
            
            const buttonId = msg.message.buttonsResponseMessage.selectedButtonId;
            const sender = msg.key.remoteJid;
            const isFromUser = msg.key.fromMe === false;
            
            if (isFromUser && menuData[buttonId]) {
                const selectedMenu = menuData[buttonId];
                
                try {
                    await conn.sendMessage(sender, {
                        text: selectedMenu.content,
                        footer: config.DESCRIPTION,
                        buttons: selectedMenu.buttons || [],
                        headerType: 1
                    });
                    
                    // Add reaction to show success
                    await conn.sendMessage(sender, {
                        react: {
                            text: '✅',
                            key: msg.key
                        }
                    });
                } catch (e) {
                    console.error('Error handling button:', e);
                    await conn.sendMessage(sender, {
                        text: `❌ Error processing your request. Please try again.\n\n> ${config.DESCRIPTION}`
                    });
                }
            }
        });

    } catch (e) {
        console.error('Menu4 Error:', e);
        await conn.sendMessage(
            from,
            { text: `❌ Menu4 system is currently busy. Please try again later.\n\n> ${config.DESCRIPTION}` },
            { quoted: mek }
        );
    }
});