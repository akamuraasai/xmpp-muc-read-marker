'use strict';

module.exports = (client, stanzas, configs) => {
  const NS = 'urn:xmpp:receipts';
  const readAttribute = stanzas.define({
    name: 'read',
    element: 'read',
    namespace: NS,
    fields: {
      id: stanzas.utils.attribute('id'),
    },
  });

  stanzas.withMessage((Message) => {
    stanzas.extend(Message, readAttribute);
  });
};
