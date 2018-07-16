//  保存cookie
function CookieConfig() {}

CookieConfig.prototype.saveCookie = function(param) {
    const exdate = new Date();
    exdate.setMinutes(exdate.getMinutes() + 10);
    document.cookie = `${param.name}=${escape(param.value)};expires=${exdate.toGMTString()}`;
    return true;
};
//  更新cookie
CookieConfig.prototype.setCookie = function() {
    const exdate = new Date();
    const cookie = document.cookie;
    let cookieString = '';
    exdate.setMinutes(exdate.getMinutes() + 10);
    if (cookie.length > 0) {
        let cookieList = [];
        cookieList = cookie.split(';');
        for (let i = 0; i < cookieList.length; i++) {
            cookieString += cookieString + cookieList[i];
        }
        cookieString = `${cookieString};expires=${exdate.toGMTString()}`;
        document.cookie = cookieString;
        return true;
    }
    return false;
};
//  获取cookie
CookieConfig.prototype.getCookie = function(param) {
    let c_start = -1;
    let c_end = -1;
    let cookie;
    cookie = document.cookie;
    if (cookie.length > 0) {
        c_start = cookie.indexOf(`${param.name}=`);
        if (c_start !== -1) {
            c_start = c_start + param.name.length + 1;
            c_end = cookie.indexOf(';', c_start);
            if (c_end === -1) {
                c_end = cookie.length;
                return unescape(cookie.substring(c_start, c_end));
            }
        }
    }
    return null;
};
// 删除cookie
CookieConfig.prototype.delCookie = function() {
    document.cookie = escape('-1');
    return true;
};
CookieConfig.prototype.isLogin = function() {
    return this.getCookie({ name: 'token' }) !== null;
};
const cookieConfig = new CookieConfig();
export default cookieConfig;
