class Cookie {

  public getItem (key: string) {
    let cookie = document.cookie
    let subStr = cookie.split(`${key}=`)[1]
    if (!subStr) return null
    return subStr.split(';')[0]
  }

  public setItem (key: string, value: any, expires: number) {
    let item = `${key}=${value}`
    let overdue = new Date(Date.now() + 86400000 * (expires || 7))
    document.cookie = `${item}; expires=${overdue}`
  }

  public removeItem (key: string) {
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }

  public clear () {
    let keys = document.cookie.split(';').map((e: any) => e.split('=')[0])
    keys.forEach((e: any) => this.removeItem(e))
  }

}

let cookie = new Cookie()
export { cookie }