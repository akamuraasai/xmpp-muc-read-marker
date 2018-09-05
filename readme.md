# MUC Read Message Plugin

This plugin inserts the capability of send read attribute in MUCs when using XEP-0085 with stanza.io.

## Install

Just run ```yarn add xmpp-muc-read-marker``` or ```npm install --save xmpp-muc-read-marker```.

## Configuration

This plugin needs no configuration.

## How to use

For Node/CommonJS:

```javascript
const MUCReadMarker = require('xmpp-muc-read-marker');

client.use(MUCReadMarker);
``` 

For ES6+:
```javascript
import MUCReadMarker from 'xmpp-muc-read-marker';

client.use(MUCReadMarker);
```

## License

This plugin is [MIT licensed](./LICENSE).