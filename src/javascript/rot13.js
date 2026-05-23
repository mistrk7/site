// rot13 decoder
function decode(a) {
    return a.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    })
};
// function to get called
function openCrypt(type, element) {
    if (type === "mail") {var y = decode("znvygb:zrermxunna@tznvy.pbz")};
    if (type === "lkin") {var y = decode("uggcf://jjj.yvaxrqva.pbz/va/xunna-zrerm-204463291")};
    element.setAttribute("href", y);
    element.setAttribute("onclick", "");
};

// adapted from https://www.ionos.com/digitalguide/e-mail/e-mail-security/protecting-your-email-address-how-to-do-it/