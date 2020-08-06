class Verify {

  public empty (value: any) {
    if ((value === '' || !value) && (value != 0)) {
      return false
    }
    return true
  }

  public space (value: any) {
    if (value.includes(' ')) {
      return false
    }
    return true
  }

  public password (value: string) {
    if (/^\w{6,16}$/.test(value)) {
      return true
    }
    return false
  }

  public account (value: string) {
    if (/^\w{4,16}$/.test(value)) {
      return true
    }
    return false
  }

  public email (value: string) {
    let pattern = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
    if (pattern.test(value)) {
      return true
    }
    return false
  }

  public tel (value: string) {
    let pattern = /^1[3456789]\d{9}$/
    if (pattern.test(value)) {
      return true
    }
    return false
  }

  public name (value: string) {
    let pattern = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,4}$/
    if (pattern.test(value)) {
      return true
    }
    return false
  }

  // 邮箱验证
  isEmail = (s: string) => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
  }

  // 手机号码验证
  isMobile = (s: string) => {
    return /^1[0-9]{10}$/.test(s)
  }

  // 电话号码验证
  isPhone = (s: string) => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
  }

  // url验证
  isURL = (s: string) => {
    return /^http[s]?:\/\/.*/.test(s)
  }

  //ip验证
  isIP = (s: string) => {
    return /^(?:(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:1[0-9][0-9]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:2[0-4][0-9])|(?:25[0-5])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))$/.test(s)
  }
}

let verify = new Verify()
export { verify }
