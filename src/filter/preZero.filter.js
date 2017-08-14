export default function (value) {
    let str = value.toString()
    return str.length > 1 ? str : ('0' + str)
}
