export default function (str, start, end) {
  if (!str) {
    return ''
  }
  const s = str.toString()
  let endposition
  let x = ''
  if (!end || end > s.length) {
    endposition = s.length
  } else {
    endposition = end
  }
  for (let i = 0; i < endposition - start + 1; i++) {
    x += '*'
  }
  return s.substring(0, start - 1) + x + s.substring(endposition)
}
