import { cookie } from '../cookie/cookie'
import { verify } from '../verify/verify'
import { date } from '../date/date'
import { pinyin } from '../pinyin/pinyin'
import { resize } from '../resize/resize'
import { uid } from '../uid/uid'
import { request } from '../request/request'

class Mon {
  cookie: object = cookie
  verify: object = verify
  date: object = date
  pinyin: object = pinyin
  resize: object = resize
  UID: object = uid
  request: object = request
}

const mon = new Mon()

export default mon

export {
  mon,
  cookie,
  verify,
  date,
  pinyin,
  resize,
  uid,
  request
}
