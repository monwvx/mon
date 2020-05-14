class Request {
  xhr: any = new XMLHttpRequest()

  public sync (url: string) {
    this.xhr.open('GET', url, false)
    this.xhr.send()
    if (this.xhr.status == 200) {
      return this.xhr.response
    } else {
      return false
    }
  }
}

const request = new Request()
export { request }