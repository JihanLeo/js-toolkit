/**
 * 时间戳转换为自定义时间格式
 * @param {*需要转换的时间戳} date 
 * @param {*需要转换的目标时间格式：年-yyyy,月-MM，日-dd,时-hh,分-mm,秒-ss} fmt 
 * 
 */

export function formatDate(date, fmt) {
    if (date && fmt) {
        if (date.toString().length == 10) {
            date = new Date(date * 1000); //如果时间戳是10位，所以需要乘以1000转换为13位
        } else {
            date = new Date(date);
        }
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        } else {
            throw new Error("参数错误,年份格式应为yyyy")
        }
        let o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        };
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                let str = o[k] + '';
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
            }
        }
        return fmt;
    } else {
        throw new Error("参数缺失")
    }


}
//填充0
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}