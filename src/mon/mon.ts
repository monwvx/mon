import { cookie } from '../cookie/cookie'
import { verify } from '../verify/verify'
import { date } from '../date/date'
import { pinyin } from '../pinyin/pinyin'

class Mon {
  cookie: object = cookie
  verify: object = verify
  date: object = date
  pinyin: object = pinyin
}

const mon = new Mon()

export default mon

export {
  mon,
  cookie,
  verify,
  date,
  pinyin
}
