import kpinyin from 'kpinyin'
class Pinyin {

  public format (text: string) {
    let newText = ''
    for (let i = 0; i < text.length; i++) {
      newText += kpinyin(text[i])
    }
    return newText
  }

}

let pinyin = new Pinyin()
export { pinyin }