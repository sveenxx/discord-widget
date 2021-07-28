interface Guild {
    id: string;
    name: string;
    instant_invite: string;
    channels: Object[];
    members: Object[];
    presence_count: number;
}

export async function fetchData(url: string): Promise<Guild> {
    try {
        const data: Guild = await (await fetch(url)).json();
        return data;
    } catch (err) {
        throw new Error(err);
    }
}
