async function $944e66fb72f7e12f$export$336ad58b686ca37(id) {
    try {
        const URL1 = `https://discord.com/api/guilds/${id}/widget.json`;
        const data = await (await fetch(URL1)).json();
        return data;
    } catch (err) {
        throw new Error(err);
    }
}


function $cd453b592329dacd$export$9d050de78026ecc9(el, styles) {
    Object.keys(styles).forEach((prop)=>{
        el.style[prop.split(/(?=[A-Z])/).join("-").toLowerCase()] = styles[prop];
    });
}





class $0f2e64b2dafab7ac$export$6da0c54d420de4fd {
    constructor(element, guild, options){
        this.element = element;
        this.options = options;
        this.guild = guild;
        /**
         * Create html element for this widget
         */ const contentElement = document.createElement("div");
        /**
         * Mark as discord widget
         */ contentElement.setAttribute("data-discord-widget", "true");
        $cd453b592329dacd$export$9d050de78026ecc9(contentElement, {
            color: "white",
            backgroundColor: "gray",
            width: "400px",
            height: "500px",
            borderRadius: "15px"
        });
        this.element.appendChild(contentElement);
        console.log("123");
    }
}


const $dba23c4f427410e2$var$WIDGET_VERSION = "1.0.0";
class $dba23c4f427410e2$export$9099ad97b570f7c extends $0f2e64b2dafab7ac$export$6da0c54d420de4fd {
    /**
     * Initializes the widget on the specified element
     *
     * @param element The DOM element to initialize
     * @param guildId Guild identifier
     * @param options [optional] Options for the widget
     * @returns
     */ static async init(element, guildId, options) {
        const guild = await $944e66fb72f7e12f$export$336ad58b686ca37(guildId);
        if (!element || element.nodeType !== 1) throw new TypeError(`exptect element to be DOM Element, but got ${element}`);
        if (!guild) throw new TypeError(`exptect element to be Object, but got ${guild}`);
        return new $0f2e64b2dafab7ac$export$6da0c54d420de4fd(element, guild, options);
    }
}
$dba23c4f427410e2$export$9099ad97b570f7c.version = $dba23c4f427410e2$var$WIDGET_VERSION;
(async ()=>{
    const test = document.getElementById("discord");
    const widget = await $dba23c4f427410e2$export$9099ad97b570f7c.init(test, "600381707073486871");
    console.log(widget);
})();


export {$dba23c4f427410e2$export$9099ad97b570f7c as default};
//# sourceMappingURL=index.js.map
