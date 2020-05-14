class Verify {

  public empty (value: string) {
    if (value === '' || !value) {
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

  // public

}

let verify = new Verify()
export { verify }
