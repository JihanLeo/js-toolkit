/**
 * 
 * @param {*需要转换的16进制颜色码，如：#000000；} color 
 */
export function colorToRgb(color) {
    if (!/^#([a-f0-9]{6}|[a-f0-9]{3})$/i.test(color)) {
        throw new Error(`16进制颜色码错误：${color}`)
    }
    let str = color.substring(1)
    let arr = ['', '', '']
    let res = []
    if (str.length === 3) {
        res = arr.map((val, index) => {
            let tmp = str.substr(index, 1)
            tmp += tmp
            return parseInt(`0x${tmp}`)
        })
    } else {
        res = arr.map((val, index) => {
            let tmp = str.substr(index * 2, 2)
            return parseInt(`0x${tmp}`)
        })
    }
    let [r, g, b] = res
    return `rgb(${r}, ${g}, ${b})`
}