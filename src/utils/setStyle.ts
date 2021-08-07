export function setStyle(el: HTMLElement, styles: any) {
    Object.keys(styles).forEach((prop: any) => {
        el.style[
            prop
                .split(/(?=[A-Z])/)
                .join("-")
                .toLowerCase()
        ] = styles[prop];
    });
}
