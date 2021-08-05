import * as I from "./interfaces/";
import { setStyle } from "./utils";
import { WidgetOptions, Guild } from "./interfaces/";

export class Widget implements I.Widget {
    /**
     * Options for current Widget instance
     */
    readonly options: WidgetOptions | undefined;

    /**
     *  The element that this widget is attached
     */
    readonly element: HTMLElement;

    /**
     * Fetched data from discord API
     */
    readonly guild: Guild;

    constructor(
        element: HTMLElement,
        guild: Guild,
        options?: WidgetOptions | undefined
    ) {
        this.element = element;
        this.options = options;
        this.guild = guild;
        /**
         * Create html element for this widget
         */
        const contentElement = (this.element = document.createElement("div"));

        /**
         * Mark as discord widget
         */
        contentElement.setAttribute("data-widget", "true");

        setStyle(contentElement, { position: "absolute" });
        console.log("123");
    }
}
