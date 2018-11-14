

export const getContent = async () =>
    await (await fetch(`http://test.qbst.com.ar/content.json`)).json()

export const getContentHard = async id =>
    await (await fetch(`http://test.qbst.com.ar/content_hard.json`)).json()
