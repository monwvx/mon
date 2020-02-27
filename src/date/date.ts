class DateFormat {

  public format (formatStr: any, date: any) {
    date = new Date(date)
    if (isNaN(date)) {
      date = new Date()
    }
    let yyyy = date.getFullYear().toString()
    let MM = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1)
    let dd = date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate()
    let HH = date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours()
    let mm = date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes()
    let ss = date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds()
    let M = date.getDate().toString()

    if(formatStr.includes('yyyy')) formatStr = formatStr.replace('yyyy', yyyy)
    if(formatStr.includes('MM')) formatStr = formatStr.replace('MM', MM)
    if(formatStr.includes('dd')) formatStr = formatStr.replace('dd', dd)
    if(formatStr.includes('HH')) formatStr = formatStr.replace('HH', HH)
    if(formatStr.includes('mm')) formatStr = formatStr.replace('mm', mm)
    if(formatStr.includes('ss')) formatStr = formatStr.replace('ss', ss)
    if(formatStr.includes('M')) formatStr = formatStr.replace('M', M)
    return formatStr
  }

}

let date = new DateFormat()
export { date }