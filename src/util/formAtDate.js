export default function (date,showTime = false){
  const time = new Date(+date)
  const mouth = (time.getMonth()+1).toString().padStart(2,'0')
  const day = time.getDay().toString().padStart(2,'0')
  let str = ''
  if(!showTime){
    str = `${time.getFullYear()}-${mouth}-${day}`
  }else {
    const minute = time.getMinutes().toString().padStart(2,'0')
    const second = time.getSeconds().toString().padStart(2,'0')
    str = `${time.getFullYear()}-${mouth}-${day} ${minute}:${second}`
  }
  return str
}
