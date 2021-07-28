import { fetchData } from "./utils/fetchData";

/*
    Main Class
*/
export class Widget {
    constructor(private element: HTMLElement | null, private guild_id: string) {
        this.init();
    }

    private async init() {
        const url = `https://discord.com/api/guilds/${this.guild_id}/widget.json`;
        const data = await fetchData(url);
        console.log(data);
    }
}

/*
    Testing...
*/
const el: HTMLElement | null = document.querySelector("#widget");
const w = new Widget(el, "600381707073486871");
