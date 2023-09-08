import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const MyCollection = new Mongo.Collection('organizations');

if (Meteor.isServer) {
    Meteor.publish('myCollectionPublication', function () {
      // Return a cursor of documents to publish to the client
      return MyCollection.find({});
    });
  }
  