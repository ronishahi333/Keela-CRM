import { Meteor } from "meteor/meteor";
import { Tags } from "./Tagcollection";

Meteor.methods({
  "tags.insert"(tagData) {
    const userDetails = Meteor.user();
    Tags.insert({
      ...tagData,
      organizationName: userDetails.profile.organizationName,
      organizationID: userDetails.profile.organizationId,
      createdAt: new Date(),
    });
  },

  "tags.remove"(tagId) {
    const tag = Tags.findOne(tagId);
    if (!tag) {
      throw new Meteor.Error("not-found", "tag not found.");
    }

    Tags.remove(tagId);
  },

  "tags.update"(tag) {
    const userDetails = Meteor.user();
    Tags.update(tag._id, {
      $set: {
        ...tag,
        organizationName: userDetails.profile.organizationName,
        organizationID: userDetails.profile.organizationId,
        updatedAt: new Date(),
      },
    });
    return "Tag updated successfully";
  },
});
