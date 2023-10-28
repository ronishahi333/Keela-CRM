// methods.js
import { Meteor } from 'meteor/meteor';
import { Contacts } from './Contactcollection';

Meteor.methods({
  'contacts.insert'(contactData) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'You must be logged in to add contacts.');
    }
    const userDetails = Meteor.user();
    console.log(userDetails.profile.organizationName);
    Contacts.insert({
      ...contactData,
      organizationName:userDetails.profile.organizationName,
      organizationID:userDetails.profile.organizationId,
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
  
  'contacts.update'(contact) {
    const userDetails = Meteor.user();
    Contacts.update(contact._id, {
      $set: {
        ...contact,
      },
    });
    return 'Contact updated successfully';
  },
});
