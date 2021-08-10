import * as I from "./interfaces/";
import { WidgetOptions, Guild } from "./interfaces/";
import { template } from "./template";

export class Widget implements I.Widget {
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

    constructor(
        element: HTMLElement,
        guild: Guild,
        options?: WidgetOptions | undefined
    ) {
        this.element = element;
        this.options = options;
        this.guild = guild;

        /**
         * Create html element for this widget
         */
        const contentElement = document.createElement("div");

        /**
         * Mark as discord widget
         */
        contentElement.setAttribute("data-discord-widget", "true");

        contentElement.className = "discord-widget";

        /**
         * Create template of members
         */
        const MemeberList = template(this.guild, (data) =>
            data.members.map(
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
                        <span class="widget-member-name">${
                            member.username
                        }</span>
                    </div>
                    ${
                        member.game === undefined
                            ? ``
                            : `<span class="widget-member-desc">${member.game.name}</span>`
                    }
                </div>
            `
            )
        );

        const Widget = template(
            this.guild,
            (data) => `
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
                            ${MemeberList}
                        </div>
                    </div>
                </div>
                <div class="widget-footer">
                    <span class="widget-footer-text">Free voice chat from Discord</span>
                    <a class="widget-join-button" href="${
                        data.instant_invite
                    }" target="_blank">Connect</a>
                </div>
            `
        );

        contentElement.innerHTML = Widget.replaceAll(",", "");

        this.element.appendChild(contentElement);
    }
}
