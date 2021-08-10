export declare type WidgetOptions = {
    connectButton: boolean;
    styles: Record<string, unknown>;
};
export declare type Guild = {
    id: string;
    name: string;
    instant_invite: string;
    channels: Channels[];
    members: Members[];
    presence_count: number;
};
export declare type Channels = {
    id: string;
    name: string;
    position: number;
};
export declare type Members = {
    id: string;
    username: string;
    discriminator: string;
    avatar: null;
    status: string;
    game?: {
        name: string;
    };
    avatar_url: string;
};
export interface Widget {
    readonly options: WidgetOptions | undefined;
    readonly guild: Guild;
}
