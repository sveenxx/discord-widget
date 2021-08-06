function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $b287f046829478ed$export$9099ad97b570f7c);
async function $18184c76a163e045$export$336ad58b686ca37(id) {
    try {
        const URL1 = `https://discord.com/api/guilds/${id}/widget.json`;
        const data = await (await fetch(URL1)).json();
        return data;
    } catch (err) {
        throw new Error(err);
    }
}


function $787fc9e29e55dcc3$export$9d050de78026ecc9(el, styles) {
    Object.keys(styles).forEach((prop)=>{
        el.style[prop.split(/(?=[A-Z])/).join("-").toLowerCase()] = styles[prop];
    });
}





class $c1d8316f3108d794$export$6da0c54d420de4fd {
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
        $787fc9e29e55dcc3$export$9d050de78026ecc9(contentElement, {
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


const $b287f046829478ed$var$WIDGET_VERSION = "1.0.0";
class $b287f046829478ed$export$9099ad97b570f7c extends $c1d8316f3108d794$export$6da0c54d420de4fd {
    /**
     * Initializes the widget on the specified element
     *
     * @param element The DOM element to initialize
     * @param guildId Guild identifier
     * @param options [optional] Options for the widget
     * @returns
     */ static async init(element, guildId, options) {
        const guild = await $18184c76a163e045$export$336ad58b686ca37(guildId);
        if (!element || element.nodeType !== 1) throw new TypeError(`exptect element to be DOM Element, but got ${element}`);
        if (!guild) throw new TypeError(`exptect element to be Object, but got ${guild}`);
        return new $c1d8316f3108d794$export$6da0c54d420de4fd(element, guild, options);
    }
} // (async () => {
 //     const test = document.getElementById("discord");
 //     const widget = await DiscordWidget.init(test, "600381707073486871");
 //     console.log(widget);
 // })();
$b287f046829478ed$export$9099ad97b570f7c.version = $b287f046829478ed$var$WIDGET_VERSION;


//# sourceMappingURL=index.js.map
