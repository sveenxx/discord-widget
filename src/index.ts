import { WidgetOptions } from "./interfaces/";
import { fetchData } from "./utils";

import { Widget } from "./widget";
import { attachStyle, detachStyle } from "./style";

declare const WIDGET_VERSION: string;

export default class DiscordWidget extends Widget {
    static version = WIDGET_VERSION;

    /**
     * Initializes the widget on the specified element
     *
     * @param element The DOM element to initialize
     * @param guildId Guild identifier
     * @param options [optional] Options for the widget
     */
    static async init(
        element: HTMLElement | null,
        guildId: string,
        options?: WidgetOptions
    ): Promise<Widget> {
        const guild = await fetchData(guildId);

        if (!element || element.nodeType !== 1) {
            throw new TypeError(
                `exptect element to be DOM Element, but got ${element}`
            );
        }

        if (!guild) {
            throw new TypeError(
                `exptect element to be Object, but got ${guild}`
            );
        }

        attachStyle();

        return new Widget(element, guild, options);
    }

    /**
     * Attaches default styles to current document.
     */
    static attachStyle() {
        return attachStyle();
    }

    /**
     * Removes default styles from current document.
     */
    static detachStyle() {
        return detachStyle();
    }
}
