/*! For license information please see discord-widget.js.LICENSE.txt */
!(function (t, e) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define("DiscordWidget", [], e)
        : "object" == typeof exports
        ? (exports.DiscordWidget = e())
        : (t.DiscordWidget = e());
})(this, function () {
    return (() => {
        "use strict";
        var t = {
                331: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.detachStyle = e.attachStyle = void 0);
                    const n = "discord-widget-style";
                    let i = !1;
                    (e.attachStyle = function () {
                        if (!i && "undefined" != typeof window) {
                            const t = document.createElement("style");
                            (t.id = n),
                                (t.textContent =
                                    '\n    @import url(\'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap\');\n\n    .discord-widget {\n        width: 100%;\n        height: 500px;\n        max-width: 400px;\n        background-color: #202225;\n        border-radius: 5px;\n        overflow: hidden;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        -webkit-box-flex: 1;\n        -ms-flex: 1;\n        flex: 1;\n    }\n\n    .discord-widget * {\n        font-family: \'Manrope\', sans-serif;\n    }\n\n    .widget-header {\n        background-color: #7289da;\n        height: 100px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        padding: 0 1em;\n    }\n\n    .widget-logo {\n        background-image: url("data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMjQgMzQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyNCAzNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPGVsbGlwc2UgZmlsbD0iI0ZGRkZGRiIgY3g9IjE4IiBjeT0iMTYuMSIgcng9IjEuNyIgcnk9IjEuOSIvPgoJCTxlbGxpcHNlIGZpbGw9IiNGRkZGRkYiIGN4PSIxMS44IiBjeT0iMTYuMSIgcng9IjEuNyIgcnk9IjEuOSIvPgoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yNi4zLDBIMy41QzEuNiwwLDAsMS42LDAsMy41djIzQzAsMjguNCwxLjYsMzAsMy41LDMwaDE5LjNsLTAuOS0zLjFsMi4yLDJsMi4xLDEuOWwzLjcsMy4ydi03LjV2LTEuNwoJCQlWMy41QzI5LjgsMS42LDI4LjIsMCwyNi4zLDB6IE0xOS43LDIyLjJjMCwwLTAuNi0wLjctMS4xLTEuNGMyLjItMC42LDMuMS0yLDMuMS0yYy0wLjcsMC41LTEuNCwwLjgtMiwxYy0wLjgsMC40LTEuNywwLjYtMi41LDAuNwoJCQljLTEuNiwwLjMtMy4xLDAuMi00LjQsMGMtMS0wLjItMS44LTAuNS0yLjUtMC43Yy0wLjQtMC4xLTAuOC0wLjMtMS4yLTAuNmMtMC4xLDAtMC4xLTAuMS0wLjItMC4xYzAsMC0wLjEsMC0wLjEsMAoJCQljLTAuMy0wLjItMC41LTAuMy0wLjUtMC4zczAuOCwxLjQsMywyYy0wLjUsMC42LTEuMSwxLjQtMS4xLDEuNEM2LjUsMjIuMSw1LDE5LjYsNSwxOS42YzAtNS41LDIuNC05LjksMi40LTkuOQoJCQljMi40LTEuOCw0LjgtMS44LDQuOC0xLjhsMC4yLDAuMkM5LjQsOSw4LDEwLjQsOCwxMC40czAuNC0wLjIsMS0wLjVjMS44LTAuOCwzLjMtMSwzLjktMS4xYzAuMSwwLDAuMiwwLDAuMywwCgkJCWMxLTAuMSwyLjItMC4yLDMuNCwwYzEuNiwwLjIsMy40LDAuNyw1LjEsMS42YzAsMC0xLjMtMS4zLTQuMi0yLjJsMC4yLTAuM2MwLDAsMi4zLTAuMSw0LjgsMS44YzAsMCwyLjQsNC40LDIuNCw5LjkKCQkJQzI0LjksMTkuNiwyMy41LDIyLjEsMTkuNywyMi4yeiIvPgoJPC9nPgoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ1LjYsNy4zaC01Ljd2Ni40bDMuOCwzLjR2LTYuMmgyYzEuMywwLDEuOSwwLjYsMS45LDEuNnY0LjhjMCwxLTAuNiwxLjctMS45LDEuN2gtNS44djMuNmg1LjcKCQljMywwLDUuOS0xLjUsNS45LTV2LTUuMUM1MS40LDguOSw0OC42LDcuMyw0NS42LDcuM3ogTTc1LjMsMTcuNnYtNS4zYzAtMS45LDMuNC0yLjMsNC40LTAuNGwzLjEtMS4zYy0xLjItMi43LTMuNS0zLjUtNS4zLTMuNQoJCWMtMywwLTYsMS44LTYsNS4ydjUuM2MwLDMuNSwzLDUuMiw2LDUuMmMxLjksMCw0LjItMC45LDUuNS0zLjRsLTMuMy0xLjZDNzguNywxOS45LDc1LjMsMTkuNCw3NS4zLDE3LjZ6IE02NSwxMwoJCWMtMS4yLTAuMy0yLTAuNy0yLTEuNGMwLjEtMS44LDIuOC0xLjgsNC40LTAuMWwyLjUtMS45Yy0xLjYtMS45LTMuMy0yLjQtNS4yLTIuNGMtMi44LDAtNS41LDEuNi01LjUsNC42YzAsMi45LDIuMiw0LjUsNC43LDQuOAoJCWMxLjIsMC4yLDIuNiwwLjcsMi42LDEuNWMtMC4xLDEuNi0zLjUsMS42LTUtMC4zTDU5LDIwYzEuNCwxLjgsMy4zLDIuOCw1LjIsMi44YzIuOCwwLDUuOS0xLjYsNi00LjZDNzAuNCwxNC41LDY3LjcsMTMuNSw2NSwxM3oKCQkgTTUzLjUsMjIuNmgzLjhWNy4zaC0zLjhWMjIuNnogTTExOC4xLDcuM2gtNS43djYuNGwzLjgsMy40di02LjJoMmMxLjMsMCwxLjksMC42LDEuOSwxLjZ2NC44YzAsMS0wLjYsMS43LTEuOSwxLjdoLTUuOHYzLjZoNS43CgkJYzMsMCw1LjktMS41LDUuOS01di01LjFDMTI0LDguOSwxMjEuMSw3LjMsMTE4LjEsNy4zeiBNOTAuMiw3LjFjLTMuMiwwLTYuMywxLjctNi4zLDUuMnY1LjJjMCwzLjUsMy4yLDUuMiw2LjMsNS4yCgkJYzMuMiwwLDYuMy0xLjcsNi4zLTUuMnYtNS4yQzk2LjUsOC45LDkzLjQsNy4xLDkwLjIsNy4xeiBNOTIuNywxNy42YzAsMS4xLTEuMiwxLjctMi40LDEuN2MtMS4yLDAtMi41LTAuNS0yLjUtMS43di01LjIKCQljMC0xLjEsMS4yLTEuNywyLjQtMS43YzEuMiwwLDIuNSwwLjUsMi41LDEuN1YxNy42eiBNMTEwLjMsMTIuNGMtMC4xLTMuNi0yLjUtNS01LjYtNWgtNi4xdjE1LjJoMy45di00LjhoMC43bDMuNSw0LjhoNC44CgkJbC00LjEtNS4yQzEwOS4yLDE2LjgsMTEwLjMsMTUuMiwxMTAuMywxMi40eiBNMTA0LjcsMTQuNGgtMi4zdi0zLjVoMi4zQzEwNy4xLDEwLjksMTA3LjEsMTQuNCwxMDQuNywxNC40eiIvPgo8L2c+Cjwvc3ZnPgo=");\n        width: 124px;\n        height: 34px;\n        background-size: cover;\n    }\n\n    .widget-body {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        padding: 1em 0;\n        height: calc(100% - 2em);\n        overflow-y: scroll;\n    }\n\n    .widget-body::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    .widget-body::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    .widget-body::-webkit-scrollbar-thumb,\n    .widget-body::-webkit-scrollbar-track-piece {\n        background-clip: padding-box;\n        border: 3px solid transparent;\n        border-radius: 5px;\n    }\n\n    .widget-body::-webkit-scrollbar-thumb {\n        background-color: hsla(0, 0%, 100%, .1);\n    }\n\n    .widget-footer {\n        min-height: 30px;\n        background-color: #202225;\n        padding: 6px 6px 6px 20px;\n        -webkit-box-shadow: 0 -1px 18px rgb(0 0 0 / 20%), 0 -1px 0 rgb(0 0 0 / 20%);\n        box-shadow: 0 -1px 18px rgb(0 0 0 / 20%), 0 -1px 0 rgb(0 0 0 / 20%);\n        -ms-flex-negative: 0;\n        flex-shrink: 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n    }\n\n    .widget-footer-text {\n        font-weight: 500;\n        opacity: .1;\n        color: #fff;\n        font-size: 13px;\n        overflow: hidden;\n    }\n\n    .widget-join-button {\n        color: #fff;\n        text-decoration: none;\n        border: 1px solid #212325;\n        border-radius: 4px;\n        width: 120px;\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        background-color: hsla(0, 0%, 100%, .1);\n        font-size: 13px;\n        cursor: pointer;\n        -webkit-transition: background .1s;\n        -o-transition: background .1s;\n        transition: background .1s;\n    }\n\n    .widget-join-button:hover {\n        background-color: hsla(0, 0%, 100%, .2);\n    }\n\n    .widget-wrapper {\n        padding: 0 1em;\n    }\n\n    .widget-member {\n        height: 20px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n        margin: 6px 0;\n    }\n\n    .widget-member>div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n    }\n\n    .widget-member-avatar {\n        width: 16px;\n        height: 16px;\n        position: relative;\n        margin-right: 4px;\n    }\n\n    .widget-member-avatar img {\n        width: 100%;\n        border-radius: 50%;\n    }\n\n    .widget-member-status {\n        width: 6px;\n        height: 6px;\n        border-radius: 3px;\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        background-color: #f04747;\n    }\n\n    .widget-member-status[data-status="online"] {\n        background-color: #43b581;\n    }\n\n    .widget-member-status[data-status="idle"] {\n        background-color: #faa61a;\n    }\n\n    .widget-member-name {\n        font-size: 14px;\n        color: #8a8e94;\n    }\n\n    .widget-member-desc {\n        font-size: 14px;\n        color: #4f545c;\n    }\n\n    .widget-title {\n        margin-bottom: 12px;\n        color: #8a8e94;\n        font-size: 14px;\n        font-weight: 500;\n    }\n\n    .widget-channel {\n        font-weight: 600;\n        font-size: 18px;\n        margin-bottom: 18px;\n        color: #fff;\n    }\n\n    .widget-status {\n        color: #fff;\n        font-size: 14px;\n    }\n'),
                                document.head.appendChild(t),
                                (i = !0);
                        }
                    }),
                        (e.detachStyle = function () {
                            if (i && "undefined" != typeof window) {
                                const t = document.getElementById(n);
                                t &&
                                    t.parentNode &&
                                    (t.parentNode.removeChild(t), (i = !1));
                            }
                        });
                },
                704: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.template = void 0),
                        (e.template = function (t, e) {
                            return e(t);
                        });
                },
                363: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.fetchData = void 0),
                        (e.fetchData = async function (t) {
                            try {
                                return await (
                                    await fetch(
                                        `https://discord.com/api/guilds/${t}/widget.json`
                                    )
                                ).json();
                            } catch (t) {
                                throw new Error(t);
                            }
                        });
                },
                928: (t, e, n) => {
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    const i = n(655);
                    i.__exportStar(n(363), e), i.__exportStar(n(807), e);
                },
                807: (t, e) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.setStyle = void 0),
                        (e.setStyle = function (t, e) {
                            Object.keys(e).forEach((n) => {
                                t.style[
                                    n
                                        .split(/(?=[A-Z])/)
                                        .join("-")
                                        .toLowerCase()
                                ] = e[n];
                            });
                        });
                },
                891: (t, e, n) => {
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                        (e.Widget = void 0);
                    const i = n(704);
                    e.Widget = class {
                        constructor(t, e, n) {
                            (this.element = t),
                                (this.options = n),
                                (this.guild = e);
                            const o = document.createElement("div");
                            o.setAttribute("data-discord-widget", "true"),
                                (o.className = "discord-widget");
                            const r = i.template(this.guild, (t) =>
                                    t.members.map(
                                        (t) =>
                                            `\n                <div class="widget-member">                         \n                    <div>\n                        <div class="widget-member-avatar">\n                            <img src="${
                                                t.avatar_url
                                            }"\n                                alt="">\n                            <span class="widget-member-status" data-status="${
                                                t.status
                                            }"></span>\n                        </div>\n                        <span class="widget-member-name">${
                                                t.username
                                            }</span>\n                    </div>\n                    ${
                                                void 0 === t.game
                                                    ? ""
                                                    : `<span class="widget-member-desc">${t.game.name}</span>`
                                            }\n                </div>\n            `
                                    )
                                ),
                                a = i.template(
                                    this.guild,
                                    (t) =>
                                        `\n                <div class="widget-header">\n                    <a class="widget-logo" href="http://discord.com" target="_blank"></a>\n                    <span class="widget-status"><strong>${
                                            t.presence_count
                                        }</strong> Members Online</span>\n                </div>\n                <div class="widget-body">\n                    <div class="widget-wrapper">\n                        ${t.channels.map(
                                            (t) =>
                                                `<div class="widget-channel">${t.name}</div>`
                                        )}\n                    </div>\n                    <div class="widget-wrapper">\n                        <div class="widget-title">MEMBERS ONLINE</div>\n                        <div class="widget-wrapper">\n                            ${r}\n                        </div>\n                    </div>\n                </div>\n                <div class="widget-footer">\n                    <span class="widget-footer-text">Free voice chat from Discord</span>\n                    <a class="widget-join-button" href="${
                                            t.instant_invite
                                        }" target="_blank">Connect</a>\n                </div>\n            `
                                );
                            (o.innerHTML = a.replaceAll(",", "")),
                                this.element.appendChild(o);
                        }
                    };
                },
                655: (t, e, n) => {
                    n.r(e),
                        n.d(e, {
                            __extends: () =>
                                function (t, e) {
                                    function n() {
                                        this.constructor = t;
                                    }
                                    i(t, e),
                                        (t.prototype =
                                            null === e
                                                ? Object.create(e)
                                                : ((n.prototype = e.prototype),
                                                  new n()));
                                },
                            __assign: () => o,
                            __rest: () =>
                                function (t, e) {
                                    var n = {};
                                    for (o in t)
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            o
                                        ) &&
                                            e.indexOf(o) < 0 &&
                                            (n[o] = t[o]);
                                    if (
                                        null != t &&
                                        "function" ==
                                            typeof Object.getOwnPropertySymbols
                                    )
                                        for (
                                            var i = 0,
                                                o =
                                                    Object.getOwnPropertySymbols(
                                                        t
                                                    );
                                            i < o.length;
                                            i++
                                        )
                                            e.indexOf(o[i]) < 0 &&
                                                Object.prototype.propertyIsEnumerable.call(
                                                    t,
                                                    o[i]
                                                ) &&
                                                (n[o[i]] = t[o[i]]);
                                    return n;
                                },
                            __decorate: () =>
                                function (t, e, n, i) {
                                    var o,
                                        r = arguments.length,
                                        a =
                                            r < 3
                                                ? e
                                                : null === i
                                                ? (i =
                                                      Object.getOwnPropertyDescriptor(
                                                          e,
                                                          n
                                                      ))
                                                : i;
                                    if (
                                        "object" == typeof Reflect &&
                                        "function" == typeof Reflect.decorate
                                    )
                                        a = Reflect.decorate(t, e, n, i);
                                    else
                                        for (var s = t.length - 1; 0 <= s; s--)
                                            (o = t[s]) &&
                                                (a =
                                                    (r < 3
                                                        ? o(a)
                                                        : 3 < r
                                                        ? o(e, n, a)
                                                        : o(e, n)) || a);
                                    return (
                                        3 < r &&
                                            a &&
                                            Object.defineProperty(e, n, a),
                                        a
                                    );
                                },
                            __param: () =>
                                function (t, e) {
                                    return function (n, i) {
                                        e(n, i, t);
                                    };
                                },
                            __metadata: () =>
                                function (t, e) {
                                    if (
                                        "object" == typeof Reflect &&
                                        "function" == typeof Reflect.metadata
                                    )
                                        return Reflect.metadata(t, e);
                                },
                            __awaiter: () =>
                                function (t, e, n, i) {
                                    return new (n = n || Promise)(function (
                                        o,
                                        r
                                    ) {
                                        function a(t) {
                                            try {
                                                u(i.next(t));
                                            } catch (t) {
                                                r(t);
                                            }
                                        }
                                        function s(t) {
                                            try {
                                                u(i.throw(t));
                                            } catch (t) {
                                                r(t);
                                            }
                                        }
                                        function u(t) {
                                            var e;
                                            t.done
                                                ? o(t.value)
                                                : ((e = t.value) instanceof n
                                                      ? e
                                                      : new n(function (t) {
                                                            t(e);
                                                        })
                                                  ).then(a, s);
                                        }
                                        u((i = i.apply(t, e || [])).next());
                                    });
                                },
                            __generator: () =>
                                function (t, e) {
                                    var n,
                                        i,
                                        o,
                                        r,
                                        a = {
                                            label: 0,
                                            sent: function () {
                                                if (1 & o[0]) throw o[1];
                                                return o[1];
                                            },
                                            trys: [],
                                            ops: [],
                                        };
                                    return (
                                        (r = {
                                            next: s(0),
                                            throw: s(1),
                                            return: s(2),
                                        }),
                                        "function" == typeof Symbol &&
                                            (r[Symbol.iterator] = function () {
                                                return this;
                                            }),
                                        r
                                    );
                                    function s(r) {
                                        return function (s) {
                                            return (function (r) {
                                                if (n)
                                                    throw new TypeError(
                                                        "Generator is already executing."
                                                    );
                                                for (; a; )
                                                    try {
                                                        if (
                                                            ((n = 1),
                                                            i &&
                                                                (o =
                                                                    2 & r[0]
                                                                        ? i.return
                                                                        : r[0]
                                                                        ? i.throw ||
                                                                          ((o =
                                                                              i.return) &&
                                                                              o.call(
                                                                                  i
                                                                              ),
                                                                          0)
                                                                        : i.next) &&
                                                                !(o = o.call(
                                                                    i,
                                                                    r[1]
                                                                )).done)
                                                        )
                                                            return o;
                                                        switch (
                                                            ((i = 0),
                                                            (r = o
                                                                ? [
                                                                      2 & r[0],
                                                                      o.value,
                                                                  ]
                                                                : r)[0])
                                                        ) {
                                                            case 0:
                                                            case 1:
                                                                o = r;
                                                                break;
                                                            case 4:
                                                                return (
                                                                    a.label++,
                                                                    {
                                                                        value: r[1],
                                                                        done: !1,
                                                                    }
                                                                );
                                                            case 5:
                                                                a.label++,
                                                                    (i = r[1]),
                                                                    (r = [0]);
                                                                continue;
                                                            case 7:
                                                                (r =
                                                                    a.ops.pop()),
                                                                    a.trys.pop();
                                                                continue;
                                                            default:
                                                                if (
                                                                    !(o =
                                                                        0 <
                                                                            (o =
                                                                                a.trys)
                                                                                .length &&
                                                                        o[
                                                                            o.length -
                                                                                1
                                                                        ]) &&
                                                                    (6 ===
                                                                        r[0] ||
                                                                        2 ===
                                                                            r[0])
                                                                ) {
                                                                    a = 0;
                                                                    continue;
                                                                }
                                                                if (
                                                                    3 ===
                                                                        r[0] &&
                                                                    (!o ||
                                                                        (r[1] >
                                                                            o[0] &&
                                                                            r[1] <
                                                                                o[3]))
                                                                ) {
                                                                    a.label =
                                                                        r[1];
                                                                    break;
                                                                }
                                                                if (
                                                                    6 ===
                                                                        r[0] &&
                                                                    a.label <
                                                                        o[1]
                                                                ) {
                                                                    (a.label =
                                                                        o[1]),
                                                                        (o = r);
                                                                    break;
                                                                }
                                                                if (
                                                                    o &&
                                                                    a.label <
                                                                        o[2]
                                                                ) {
                                                                    (a.label =
                                                                        o[2]),
                                                                        a.ops.push(
                                                                            r
                                                                        );
                                                                    break;
                                                                }
                                                                o[2] &&
                                                                    a.ops.pop(),
                                                                    a.trys.pop();
                                                                continue;
                                                        }
                                                        r = e.call(t, a);
                                                    } catch (t) {
                                                        (r = [6, t]), (i = 0);
                                                    } finally {
                                                        n = o = 0;
                                                    }
                                                if (5 & r[0]) throw r[1];
                                                return {
                                                    value: r[0] ? r[1] : void 0,
                                                    done: !0,
                                                };
                                            })([r, s]);
                                        };
                                    }
                                },
                            __createBinding: () =>
                                function (t, e, n, i) {
                                    void 0 === i && (i = n), (t[i] = e[n]);
                                },
                            __exportStar: () =>
                                function (t, e) {
                                    for (var n in t)
                                        "default" === n ||
                                            e.hasOwnProperty(n) ||
                                            (e[n] = t[n]);
                                },
                            __values: () => r,
                            __read: () => a,
                            __spread: () =>
                                function () {
                                    for (
                                        var t = [], e = 0;
                                        e < arguments.length;
                                        e++
                                    )
                                        t = t.concat(a(arguments[e]));
                                    return t;
                                },
                            __spreadArrays: () =>
                                function () {
                                    for (
                                        var t = 0, e = 0, n = arguments.length;
                                        e < n;
                                        e++
                                    )
                                        t += arguments[e].length;
                                    var i = Array(t),
                                        o = 0;
                                    for (e = 0; e < n; e++)
                                        for (
                                            var r = arguments[e],
                                                a = 0,
                                                s = r.length;
                                            a < s;
                                            a++, o++
                                        )
                                            i[o] = r[a];
                                    return i;
                                },
                            __await: () => s,
                            __asyncGenerator: () =>
                                function (t, e, n) {
                                    if (!Symbol.asyncIterator)
                                        throw new TypeError(
                                            "Symbol.asyncIterator is not defined."
                                        );
                                    var i,
                                        o = n.apply(t, e || []),
                                        r = [];
                                    return (
                                        (i = {}),
                                        a("next"),
                                        a("throw"),
                                        a("return"),
                                        (i[Symbol.asyncIterator] = function () {
                                            return this;
                                        }),
                                        i
                                    );
                                    function a(t) {
                                        o[t] &&
                                            (i[t] = function (e) {
                                                return new Promise(function (
                                                    n,
                                                    i
                                                ) {
                                                    1 < r.push([t, e, n, i]) ||
                                                        u(t, e);
                                                });
                                            });
                                    }
                                    function u(t, e) {
                                        try {
                                            (n = o[t](e)).value instanceof s
                                                ? Promise.resolve(
                                                      n.value.v
                                                  ).then(c, l)
                                                : d(r[0][2], n);
                                        } catch (t) {
                                            d(r[0][3], t);
                                        }
                                        var n;
                                    }
                                    function c(t) {
                                        u("next", t);
                                    }
                                    function l(t) {
                                        u("throw", t);
                                    }
                                    function d(t, e) {
                                        t(e),
                                            r.shift(),
                                            r.length && u(r[0][0], r[0][1]);
                                    }
                                },
                            __asyncDelegator: () =>
                                function (t) {
                                    var e, n;
                                    return (
                                        (e = {}),
                                        i("next"),
                                        i("throw", function (t) {
                                            throw t;
                                        }),
                                        i("return"),
                                        (e[Symbol.iterator] = function () {
                                            return this;
                                        }),
                                        e
                                    );
                                    function i(i, o) {
                                        e[i] = t[i]
                                            ? function (e) {
                                                  return (n = !n)
                                                      ? {
                                                            value: s(t[i](e)),
                                                            done:
                                                                "return" === i,
                                                        }
                                                      : o
                                                      ? o(e)
                                                      : e;
                                              }
                                            : o;
                                    }
                                },
                            __asyncValues: () =>
                                function (t) {
                                    if (!Symbol.asyncIterator)
                                        throw new TypeError(
                                            "Symbol.asyncIterator is not defined."
                                        );
                                    var e,
                                        n = t[Symbol.asyncIterator];
                                    return n
                                        ? n.call(t)
                                        : ((t = r(t)),
                                          (e = {}),
                                          i("next"),
                                          i("throw"),
                                          i("return"),
                                          (e[Symbol.asyncIterator] =
                                              function () {
                                                  return this;
                                              }),
                                          e);
                                    function i(n) {
                                        e[n] =
                                            t[n] &&
                                            function (e) {
                                                return new Promise(function (
                                                    i,
                                                    o
                                                ) {
                                                    var r, a;
                                                    (e = t[n](e)),
                                                        (r = i),
                                                        (i = o),
                                                        (a = e.done),
                                                        (o = e.value),
                                                        Promise.resolve(o).then(
                                                            function (t) {
                                                                r({
                                                                    value: t,
                                                                    done: a,
                                                                });
                                                            },
                                                            i
                                                        );
                                                });
                                            };
                                    }
                                },
                            __makeTemplateObject: () =>
                                function (t, e) {
                                    return (
                                        Object.defineProperty
                                            ? Object.defineProperty(t, "raw", {
                                                  value: e,
                                              })
                                            : (t.raw = e),
                                        t
                                    );
                                },
                            __importStar: () =>
                                function (t) {
                                    if (t && t.__esModule) return t;
                                    var e = {};
                                    if (null != t)
                                        for (var n in t)
                                            Object.hasOwnProperty.call(t, n) &&
                                                (e[n] = t[n]);
                                    return (e.default = t), e;
                                },
                            __importDefault: () =>
                                function (t) {
                                    return t && t.__esModule
                                        ? t
                                        : { default: t };
                                },
                            __classPrivateFieldGet: () =>
                                function (t, e) {
                                    if (e.has(t)) return e.get(t);
                                    throw new TypeError(
                                        "attempted to get private field on non-instance"
                                    );
                                },
                            __classPrivateFieldSet: () =>
                                function (t, e, n) {
                                    if (e.has(t)) return e.set(t, n), n;
                                    throw new TypeError(
                                        "attempted to set private field on non-instance"
                                    );
                                },
                        });
                    var i = function (t, e) {
                            return (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e)
                                        e.hasOwnProperty(n) && (t[n] = e[n]);
                                })(t, e);
                        },
                        o = function () {
                            return (o =
                                Object.assign ||
                                function (t) {
                                    for (
                                        var e, n = 1, i = arguments.length;
                                        n < i;
                                        n++
                                    )
                                        for (var o in (e = arguments[n]))
                                            Object.prototype.hasOwnProperty.call(
                                                e,
                                                o
                                            ) && (t[o] = e[o]);
                                    return t;
                                }).apply(this, arguments);
                        };
                    function r(t) {
                        var e = "function" == typeof Symbol && Symbol.iterator,
                            n = e && t[e],
                            i = 0;
                        if (n) return n.call(t);
                        if (t && "number" == typeof t.length)
                            return {
                                next: function () {
                                    return {
                                        value:
                                            (t =
                                                t && i >= t.length
                                                    ? void 0
                                                    : t) && t[i++],
                                        done: !t,
                                    };
                                },
                            };
                        throw new TypeError(
                            e
                                ? "Object is not iterable."
                                : "Symbol.iterator is not defined."
                        );
                    }
                    function a(t, e) {
                        var n =
                            "function" == typeof Symbol && t[Symbol.iterator];
                        if (!n) return t;
                        var i,
                            o,
                            r = n.call(t),
                            a = [];
                        try {
                            for (
                                ;
                                (void 0 === e || 0 < e--) &&
                                !(i = r.next()).done;

                            )
                                a.push(i.value);
                        } catch (t) {
                            o = { error: t };
                        } finally {
                            try {
                                i && !i.done && (n = r.return) && n.call(r);
                            } finally {
                                if (o) throw o.error;
                            }
                        }
                        return a;
                    }
                    function s(t) {
                        return this instanceof s
                            ? ((this.v = t), this)
                            : new s(t);
                    }
                },
            },
            e = {};
        function n(i) {
            var o = e[i];
            return (
                void 0 !== o ||
                    ((o = e[i] = { exports: {} }), t[i](o, o.exports, n)),
                o.exports
            );
        }
        (n.d = (t, e) => {
            for (var i in e)
                n.o(e, i) &&
                    !n.o(t, i) &&
                    Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        }),
            (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
            (n.r = (t) => {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
            });
        var i = {};
        return (
            (() => {
                var t = i;
                const e = n(928),
                    o = n(891),
                    r = n(331);
                class a extends o.Widget {
                    static async init(t, n, i) {
                        if (
                            ((n = await e.fetchData(n)), !t || 1 !== t.nodeType)
                        )
                            throw new TypeError(
                                `exptect element to be DOM Element, but got ${t}`
                            );
                        if (!n)
                            throw new TypeError(
                                `exptect element to be Object, but got ${n}`
                            );
                        return r.attachStyle(), new o.Widget(t, n, i);
                    }
                    static attachStyle() {
                        return r.attachStyle();
                    }
                    static detachStyle() {
                        return r.detachStyle();
                    }
                }
                (t.default = a).version = "1.1.8";
            })(),
            i.default
        );
    })();
});
