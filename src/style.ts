const WIDGET_STYLE = `
    .discord-widget {
       display: flex;
       flex-direction: column;
       background-color: gray;
       width: 400px;
       height: 500px;
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
