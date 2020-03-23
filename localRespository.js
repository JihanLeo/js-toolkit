/**
 * 本地存储
 * @param {*存储位置：local/session} target 
 * @param {*操作方式：get/set/remove} mode 
 * @param {*存储key名：自定义} key 
 * @param {*存储的值} value 
 */
export function localRespository(target, mode, key, value) {
    //参数检验
    if (target) {
        if (target == 'local' || target == 'session') {
            if (target == 'local') {
                if (mode == 'get') {
                    return targetLocal(mode, key, value);
                } else {
                    targetLocal(mode, key, value);
                }
            }
            if (target == 'session') {
                if (mode == 'get') {
                    return targetSession(mode, key, value);
                } else {
                    targetSession(mode, key, value);
                }

            }
        } else {
            throw new Error("参数target错误")
        }
    } else {
        throw new Error("参数为空");
    }
}

//LocalStorage
function targetLocal(mode, key, value) {
    //参数校验
    if (mode) {
        if (mode == 'get' || mode == 'set' || mode == 'remove') {
            if (mode == 'get') {
                return getMode('local', key);
            }
            if (mode == 'set') {
                setMode('local', key, value)
            }
            if (mode == 'remove') {
                removeMode('local', key)
            }
        } else {
            throw new Error("参数mode错误")
        }
    } else {
        throw new Error("找不到mode值");
    }
}

//sessionStorage
function targetSession(mode, key, value) {
    //参数校验
    if (mode) {
        if (mode == 'get' || mode == 'set' || mode == 'remove') {
            if (mode == 'get') {
                return getMode('session', key);
            }
            if (mode == 'set') {
                setMode('session', key, value)
            }
            if (mode == 'remove') {
                removeMode('session', key)
            }
        } else {
            throw new Error("参数mode错误")
        }
    } else {
        throw new Error("找不到mode值");
    }
}

//get
function getMode(target, key) {
    if (key) {
        const keyStr = String(key)
        const getValue = window.eval(target + 'Storage').getItem(keyStr);
        return getValue;
    } else {
        throw new Error("找不到key值");
    }

}

//set
function setMode(target, key, value) {
    if (key) {
        const keyStr = String(key)
        value ? value : '';
        window.eval(target + 'Storage').setItem(keyStr, value);
    } else {
        throw new Error("找不到key值");
    }

}

//remove
function removeMode(target, key) {
    if (key) {
        const keyStr = String(key)
        window.eval(target + 'Storage').removeItem(keyStr);
    } else {
        throw new Error("找不到key值");
    }

}