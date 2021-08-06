export function setStyle(el: HTMLElement, styles: Object) {
    Object.keys(styles).forEach((prop) => {
        el.style[
            prop
                .split(/(?=[A-Z])/)
                .join("-")
                .toLowerCase()
        ] = styles[prop];
    });
}
