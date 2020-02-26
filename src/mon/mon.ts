import { cookie } from '../cookie/cookie'
import { verify } from '../verify/verify'

class Mon {
  cookie: object = cookie
  verify: object = verify
}

const mon = new Mon()

export default mon

export {
  mon,
  cookie,
  verify
}
