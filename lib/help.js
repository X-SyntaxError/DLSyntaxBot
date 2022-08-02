exports.menudl = (nama, prefix) => {
    return `┌──「 *DOWNLOADER* 」
    │
    ├ Hai ${nama}!
    │
    ├ *${prefix}Ytmp3:* Link
    ├ *${prefix}Ytmp4:* link
    ├ *${prefix}Play:* Query
    ├ *${prefix}Tiktok:* Link
    ├ *${prefix}Instagram:* Link
    ├ *${prefix}Igstory:* Username
    │
    └──「 X-SyntaxError Team 」 `
    
    }
exports.false = (br) => {
return `Wrong Format!\nCheck ${br}*Help!*`
}

exports.start = async(icc, name) => {
    text = `Hello ${name}! Im a social media downloader bot build with ❤️ by  [X-SyntaxError](https://github.com/X-SyntaxError).`
    await icc.replyWithMarkdown(text, { disable_web_page_preview: true })
}