import * as moment from 'moment'

export default function (str, format) {
  let $date = typeof str === 'string' ? parseInt(str) : str
  return moment && moment($date).format(format)
}
