import * as I from "./interfaces/";
import { WidgetOptions, Guild } from "./interfaces/";
export declare class Widget implements I.Widget {
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
    constructor(element: HTMLElement, guild: Guild, options?: WidgetOptions | undefined);
}
