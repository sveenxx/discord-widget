import { template } from "../template";

export const getMemeberList = (guild) =>
    template(guild, (data) =>
        data.members
            .map(
                (member) =>
                    `
    <div class="widget-member">                         
        <div>
            <div class="widget-member-avatar">
                <img src="${member.avatar_url}"
                    alt="">
                <span class="widget-member-status" data-status="${
                    member.status
                }"></span>
            </div>
            <span class="widget-member-name">${member.username}</span>
        </div>
        ${
            member.game === undefined
                ? ``
                : `<span class="widget-member-desc">${member.game.name}</span>`
        }
    </div>
`
            )
            .join("")
    );
