import { WidgetOptions } from "./interfaces/";
import { fetchData } from "./utils";

import { Widget } from "./widget";

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

        return new Widget(element, guild, options);
    }
}

// (async () => {
//     const test = document.getElementById("discord");
//     const widget = await DiscordWidget.init(test, "600381707073486871");

//     console.log(widget);
// })();
