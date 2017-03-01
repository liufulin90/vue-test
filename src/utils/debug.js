/**
 * Created by liufulin on 17-3-1.
 */
export default function debug () {
  if (arguments.length === 1) {
    console.log(arguments[0])
  } else {
    let args = Array.prototype.slice.call(arguments)
    args.unshift('IPC')
    console.log(args.join(' : '))
  }
}
