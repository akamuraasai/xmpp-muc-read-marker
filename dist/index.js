'use strict';module.exports=function(client,stanzas,configs){var NS='urn:xmpp:receipts';var readAttribute=stanzas.define({name:'read',element:'read',namespace:NS,fields:{id:stanzas.utils.attribute('id')}});stanzas.withMessage(function(Message){stanzas.extend(Message,readAttribute)})};
