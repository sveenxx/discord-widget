type WidgetOptions = {
    guildId: string;
    test: number;
    x: number;
};
type Guild = {
    id: string;
    name: string;
    instant_invite: string;
    channels: Object[];
    members: Object[];
    presence_count: number;
};
declare class Widget implements I.Widget {
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
export default class DiscordWidget extends Widget {
    static version: string;
    /**
     * Initializes the widget on the specified element
     *
     * @param element The DOM element to initialize
     * @param guildId Guild identifier
     * @param options [optional] Options for the widget
     * @returns
     */
    static init(element: HTMLElement | null, guildId: string, options?: WidgetOptions): Promise<Widget>;
}

//# sourceMappingURL=index.d.ts.map
