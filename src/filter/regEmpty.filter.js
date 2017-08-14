export default function (str, format) {
  let reg = new RegExp(format)
  return str.replace(reg, '')
}
