<p align="center">
  <img height=100 src="https://svgshare.com/i/Zv4.svg" />
</p>

<p align="center">
    <strong>Easly add custom discord widgets to your website.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/discord-widget.svg?style=for-the-badge"/>
  <img src="https://img.shields.io/npm/dm/discord-widget.svg?style=for-the-badge"/>
  <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg?style=for-the-badge" />
</p>

## Installation

Via NPM:

```bash
$ npm install discord-widget --save
```

Via Yarn (recommended):

```bash
$ yarn add discord-widget
```

## Setup

```js
import Widget from "discord-widget";

(async () => {
    await Widget.init(
        document.querySelector("#my-widget-container"),
        "server-id"
    );
})();
```

if you are not using any bundlers

```html
<script src="dist/index.js"></script>

<script>
    (async () => {
        await Widget.init(
            document.querySelector("#my-widget-container"),
            "server-id"
        );
    })();
</script>
```

## Contact

[<img src="https://discordapp.com/api/guilds/600381707073486871/widget.png?style=banner1" alt="">](https://discord.gg/dS6uuAbyYX)

## License

Copyright © 2021 [Jakub Szołtysek](https://github.com/sveenxx).<br />
This project is [MIT](https://github.com/sveenxx/discord-widget/blob/master/LICENSE) licensed.
