export type WidgetOptions = {
    guildId: string;
    test: number;
    x: number;
};

export type Guild = {
    id: string;
    name: string;
    instant_invite: string;
    channels: Object[];
    members: Object[];
    presence_count: number;
};

export interface Widget {
    readonly options: WidgetOptions | undefined;
    readonly guild: Guild;
}
