const WIDGET_STYLE = `
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap');

    .discord-widget {
        width: 100%;
        height: 500px;
        max-width: 400px;
        background-color: #202225;
        border-radius: 5px;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    .discord-widget * {
        font-family: 'Manrope', sans-serif;
    }

    .widget-header {
        background-color: #7289da;
        height: 100px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 1em;
    }

    .widget-logo {
        background-image: url("data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMjQgMzQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyNCAzNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPGVsbGlwc2UgZmlsbD0iI0ZGRkZGRiIgY3g9IjE4IiBjeT0iMTYuMSIgcng9IjEuNyIgcnk9IjEuOSIvPgoJCTxlbGxpcHNlIGZpbGw9IiNGRkZGRkYiIGN4PSIxMS44IiBjeT0iMTYuMSIgcng9IjEuNyIgcnk9IjEuOSIvPgoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yNi4zLDBIMy41QzEuNiwwLDAsMS42LDAsMy41djIzQzAsMjguNCwxLjYsMzAsMy41LDMwaDE5LjNsLTAuOS0zLjFsMi4yLDJsMi4xLDEuOWwzLjcsMy4ydi03LjV2LTEuNwoJCQlWMy41QzI5LjgsMS42LDI4LjIsMCwyNi4zLDB6IE0xOS43LDIyLjJjMCwwLTAuNi0wLjctMS4xLTEuNGMyLjItMC42LDMuMS0yLDMuMS0yYy0wLjcsMC41LTEuNCwwLjgtMiwxYy0wLjgsMC40LTEuNywwLjYtMi41LDAuNwoJCQljLTEuNiwwLjMtMy4xLDAuMi00LjQsMGMtMS0wLjItMS44LTAuNS0yLjUtMC43Yy0wLjQtMC4xLTAuOC0wLjMtMS4yLTAuNmMtMC4xLDAtMC4xLTAuMS0wLjItMC4xYzAsMC0wLjEsMC0wLjEsMAoJCQljLTAuMy0wLjItMC41LTAuMy0wLjUtMC4zczAuOCwxLjQsMywyYy0wLjUsMC42LTEuMSwxLjQtMS4xLDEuNEM2LjUsMjIuMSw1LDE5LjYsNSwxOS42YzAtNS41LDIuNC05LjksMi40LTkuOQoJCQljMi40LTEuOCw0LjgtMS44LDQuOC0xLjhsMC4yLDAuMkM5LjQsOSw4LDEwLjQsOCwxMC40czAuNC0wLjIsMS0wLjVjMS44LTAuOCwzLjMtMSwzLjktMS4xYzAuMSwwLDAuMiwwLDAuMywwCgkJCWMxLTAuMSwyLjItMC4yLDMuNCwwYzEuNiwwLjIsMy40LDAuNyw1LjEsMS42YzAsMC0xLjMtMS4zLTQuMi0yLjJsMC4yLTAuM2MwLDAsMi4zLTAuMSw0LjgsMS44YzAsMCwyLjQsNC40LDIuNCw5LjkKCQkJQzI0LjksMTkuNiwyMy41LDIyLjEsMTkuNywyMi4yeiIvPgoJPC9nPgoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ1LjYsNy4zaC01Ljd2Ni40bDMuOCwzLjR2LTYuMmgyYzEuMywwLDEuOSwwLjYsMS45LDEuNnY0LjhjMCwxLTAuNiwxLjctMS45LDEuN2gtNS44djMuNmg1LjcKCQljMywwLDUuOS0xLjUsNS45LTV2LTUuMUM1MS40LDguOSw0OC42LDcuMyw0NS42LDcuM3ogTTc1LjMsMTcuNnYtNS4zYzAtMS45LDMuNC0yLjMsNC40LTAuNGwzLjEtMS4zYy0xLjItMi43LTMuNS0zLjUtNS4zLTMuNQoJCWMtMywwLTYsMS44LTYsNS4ydjUuM2MwLDMuNSwzLDUuMiw2LDUuMmMxLjksMCw0LjItMC45LDUuNS0zLjRsLTMuMy0xLjZDNzguNywxOS45LDc1LjMsMTkuNCw3NS4zLDE3LjZ6IE02NSwxMwoJCWMtMS4yLTAuMy0yLTAuNy0yLTEuNGMwLjEtMS44LDIuOC0xLjgsNC40LTAuMWwyLjUtMS45Yy0xLjYtMS45LTMuMy0yLjQtNS4yLTIuNGMtMi44LDAtNS41LDEuNi01LjUsNC42YzAsMi45LDIuMiw0LjUsNC43LDQuOAoJCWMxLjIsMC4yLDIuNiwwLjcsMi42LDEuNWMtMC4xLDEuNi0zLjUsMS42LTUtMC4zTDU5LDIwYzEuNCwxLjgsMy4zLDIuOCw1LjIsMi44YzIuOCwwLDUuOS0xLjYsNi00LjZDNzAuNCwxNC41LDY3LjcsMTMuNSw2NSwxM3oKCQkgTTUzLjUsMjIuNmgzLjhWNy4zaC0zLjhWMjIuNnogTTExOC4xLDcuM2gtNS43djYuNGwzLjgsMy40di02LjJoMmMxLjMsMCwxLjksMC42LDEuOSwxLjZ2NC44YzAsMS0wLjYsMS43LTEuOSwxLjdoLTUuOHYzLjZoNS43CgkJYzMsMCw1LjktMS41LDUuOS01di01LjFDMTI0LDguOSwxMjEuMSw3LjMsMTE4LjEsNy4zeiBNOTAuMiw3LjFjLTMuMiwwLTYuMywxLjctNi4zLDUuMnY1LjJjMCwzLjUsMy4yLDUuMiw2LjMsNS4yCgkJYzMuMiwwLDYuMy0xLjcsNi4zLTUuMnYtNS4yQzk2LjUsOC45LDkzLjQsNy4xLDkwLjIsNy4xeiBNOTIuNywxNy42YzAsMS4xLTEuMiwxLjctMi40LDEuN2MtMS4yLDAtMi41LTAuNS0yLjUtMS43di01LjIKCQljMC0xLjEsMS4yLTEuNywyLjQtMS43YzEuMiwwLDIuNSwwLjUsMi41LDEuN1YxNy42eiBNMTEwLjMsMTIuNGMtMC4xLTMuNi0yLjUtNS01LjYtNWgtNi4xdjE1LjJoMy45di00LjhoMC43bDMuNSw0LjhoNC44CgkJbC00LjEtNS4yQzEwOS4yLDE2LjgsMTEwLjMsMTUuMiwxMTAuMywxMi40eiBNMTA0LjcsMTQuNGgtMi4zdi0zLjVoMi4zQzEwNy4xLDEwLjksMTA3LjEsMTQuNCwxMDQuNywxNC40eiIvPgo8L2c+Cjwvc3ZnPgo=");
        width: 124px;
        height: 34px;
        background-size: cover;
    }

    .widget-body {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 1em 0;
        height: calc(100% - 2em);
        overflow-y: scroll;
    }

    .widget-body::-webkit-scrollbar {
        width: 10px;
    }

    .widget-body::-webkit-scrollbar {
        width: 10px;
    }

    .widget-body::-webkit-scrollbar-thumb,
    .widget-body::-webkit-scrollbar-track-piece {
        background-clip: padding-box;
        border: 3px solid transparent;
        border-radius: 5px;
    }

    .widget-body::-webkit-scrollbar-thumb {
        background-color: hsla(0, 0%, 100%, .1);
    }

    .widget-footer {
        height: 42px;
        box-sizing: border-box;
        background-color: #202225;
        padding: 6px 6px 6px 20px;
        -webkit-box-shadow: 0 -1px 18px rgb(0 0 0 / 20%), 0 -1px 0 rgb(0 0 0 / 20%);
        box-shadow: 0 -1px 18px rgb(0 0 0 / 20%), 0 -1px 0 rgb(0 0 0 / 20%);
        -ms-flex-negative: 0;
        flex-shrink: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .widget-footer-text {
        font-weight: 500;
        opacity: .1;
        color: #fff;
        font-size: 13px;
        overflow: hidden;
    }

    .widget-join-button {
        color: #fff!important;
        text-decoration: none;
        border: 1px solid #212325;
        border-radius: 4px;
        width: 120px;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        background-color: hsla(0, 0%, 100%, .1);
        font-size: 13px;
        cursor: pointer;
        -webkit-transition: background .1s;
        -o-transition: background .1s;
        transition: background .1s;
    }

    .widget-join-button:hover {
        background-color: hsla(0, 0%, 100%, .2);
    }

    .widget-wrapper {
        padding: 0 1em;
    }

    .widget-member {
        height: 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin: 6px 0;
    }

    .widget-member>div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .widget-member-avatar {
        width: 16px;
        height: 16px;
        position: relative;
        margin-right: 4px;
    }

    .widget-member-avatar img {
        width: 100%;
        border-radius: 50%;
    }

    .widget-member-status {
        width: 6px;
        height: 6px;
        border-radius: 3px;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: #f04747;
    }

    .widget-member-status[data-status="online"] {
        background-color: #43b581;
    }

    .widget-member-status[data-status="idle"] {
        background-color: #faa61a;
    }

    .widget-member-name {
        font-size: 14px;
        color: #8a8e94;
    }

    .widget-member-desc {
        font-size: 14px;
        color: #4f545c;
    }

    .widget-title {
        margin-bottom: 12px;
        color: #8a8e94;
        font-size: 14px;
        font-weight: 500;
    }

    .widget-channel {
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 18px;
        color: #fff;
    }

    .widget-status {
        color: #fff;
        font-size: 14px;
    }
`;

const WIDGET_ID = "discord-widget-style";

let isAttached = false;

export function attachStyle(): void {
    if (isAttached || typeof window === "undefined") {
        return;
    }

    const styleElement = document.createElement("style");

    styleElement.id = WIDGET_ID;
    styleElement.textContent = WIDGET_STYLE;

    document.head.appendChild(styleElement);

    isAttached = true;
}

export function detachStyle(): void {
    if (!isAttached || typeof window === "undefined") {
        return;
    }

    const styleElement = document.getElementById(WIDGET_ID);

    if (!styleElement || !styleElement.parentNode) {
        return;
    }

    styleElement.parentNode.removeChild(styleElement);

    isAttached = false;
}
