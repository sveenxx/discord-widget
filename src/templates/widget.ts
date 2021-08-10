import { template } from "../template";
import { getMemeberList } from "./widgetMemberList";

export const getWidget = (guild) =>
    template(guild, (data) =>
        `
        <div class="widget-header">
            <a class="widget-logo" href="http://discord.com" target="_blank"></a>
            <span class="widget-status"><strong>${
                data.presence_count
            }</strong> Members Online</span>
        </div>
        <div class="widget-body">
            <div class="widget-wrapper">
                ${data.channels.map(
                    (channel) =>
                        `<div class="widget-channel">${channel.name}</div>`
                )}
            </div>
            <div class="widget-wrapper">
                <div class="widget-title">MEMBERS ONLINE</div>
                <div class="widget-wrapper">
                    ${getMemeberList(guild)}
                </div> 
            </div>
        </div>
        <div class="widget-footer">
            <span class="widget-footer-text">Free voice chat from Discord</span>
            <a class="widget-join-button" href="${
                data.instant_invite
            }" target="_blank">Connect</a>
        </div>
    `.replaceAll(",", "")
    );
