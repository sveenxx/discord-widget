import { Guild } from "./interfaces/";

export function template(
    data: Guild,
    action: (data: Guild) => string | string[]
): any {
    return action(data);
}
