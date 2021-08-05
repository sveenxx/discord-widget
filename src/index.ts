import { WidgetOptions } from "./interfaces/";
import { fetchData } from "./utils";

import { Widget } from "./widget";

const WIDGET_VERSION = "1.0.0";

export default class DiscordWidget extends Widget {
    static version: string = WIDGET_VERSION;

    /**
     * Initializes the widget on the specified element
     *
     * @param element The DOM element to initialize
     * @param guildId Guild identifier
     * @param options [optional] Options for the widget
     * @returns
     */
    static async init(
        element: HTMLElement,
        guildId: string,
        options?: WidgetOptions
    ): Promise<Widget> {
        const guild = await fetchData(guildId);

        if (!element || element.nodeType !== 1) {
            throw new TypeError(
                `exptect element to be DOM Element, gut got ${element}`
            );
        }

        if (!guild) {
            throw new TypeError(
                `exptect element to be Object, gut got ${guild}`
            );
        }

        return new Widget(element, guild, options);
    }
}

const test = document.getElementById("discord");

DiscordWidget.init(test, "600381707073486871");

//test, "600381707073486871"
