class Resize {
  private elementMap: any = new Map()

  public add (element: object, callback: any) {
    let re: any = new ResizeObserver((res: any) => callback(res[0].contentRect))
    re.observe(element)
    this.elementMap.set(element, re)
  }

  public remove (element: object) {
    let item = this.elementMap.get(element)
    item.unobserve(element)
    this.elementMap.delete(element)
  }

  public clear () {
    this.elementMap.forEach((item: any, key: any) => {
      item.unobserve(key)
    })
    this.elementMap.clear()
  }
}

let resize = new Resize()
export { resize }