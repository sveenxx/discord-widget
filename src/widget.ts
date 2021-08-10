import * as I from "./interfaces/";
import { WidgetOptions, Guild } from "./interfaces/";
import { getWidget } from "./templates";

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
        const contentElement = document.createElement("div");

        /**
         * Mark as discord widget
         */
        contentElement.setAttribute("data-discord-widget", "true");

        contentElement.className = "discord-widget";

        /**
         * Create template
         */
        contentElement.innerHTML = getWidget(this.guild);

        this.element.appendChild(contentElement);
    }
}
