// methods.js
import { Meteor } from 'meteor/meteor';
import { Tags } from './Tagcollection';

Meteor.methods({
  'tags.insert'(tagData) {
    const userDetails = Meteor.user();
    Tags.insert({
      ...tagData,
      organizationName:userDetails.profile.organizationName,
      organizationID:userDetails.profile.organizationId
    });
  },

  'tags.remove'(tagId) {
    const tag = Tags.findOne(tagId);
    if (!tag) {
      throw new Meteor.Error('not-found', 'tag not found.');
    }

    Tags.remove(tagId);
  },
});
