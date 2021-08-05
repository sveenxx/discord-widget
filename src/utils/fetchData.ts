import { Guild } from "../interfaces/";

export async function fetchData(id: string | undefined): Promise<Guild> {
    try {
        const URL = `https://discord.com/api/guilds/${id}/widget.json`;
        const data: Guild = await (await fetch(URL)).json();
        return data;
    } catch (err) {
        throw new Error(err);
    }
}
