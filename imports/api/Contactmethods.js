// methods.js
import { Meteor } from 'meteor/meteor';
import { Contacts } from './Contactcollection';

Meteor.methods({
  'contacts.insert'(contactData) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'You must be logged in to add contacts.');
    }
    const userDetails = Meteor.user();
    Contacts.insert({
      ...contactData,
      organizationName:userDetails.profile.organization,
      organizationID:userDetails._id
    });
  },

  'contacts.remove'(contactId) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'You must be logged in to remove contacts.');
    }
    const contact = Contacts.findOne(contactId);
    if (!contact) {
      throw new Meteor.Error('not-found', 'Contact not found.');
    }

    Contacts.remove(contactId);
  },
});
