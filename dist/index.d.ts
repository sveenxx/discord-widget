import { WidgetOptions } from "./interfaces/";
import { Widget } from "./widget";
export default class DiscordWidget extends Widget {
    static version: string;
    /**
     * Initializes the widget on the specified element
     *
     * @param element The DOM element to initialize
     * @param guildId Guild identifier
     * @param options [optional] Options for the widget
     */
    static init(element: HTMLElement | null, guildId: string, options?: WidgetOptions): Promise<Widget>;
    /**
     * Attaches default styles to current document.
     */
    static attachStyle(): void;
    /**
     * Removes default styles from current document.
     */
    static detachStyle(): void;
}
