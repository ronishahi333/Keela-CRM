import { Meteor } from 'meteor/meteor';
import { Organizations } from './Orgcollections';

Meteor.methods({
    insertOrg(organizations){
        Organizations.insert(organizations);
    },

    deleteOrg(orgId) {
        const org = Organizations.findOne(orgId);
        if (!org) {
          throw new Meteor.Error('not-found', 'organization not found.');
        }
    
        Organizations.remove(orgId);
      },
})