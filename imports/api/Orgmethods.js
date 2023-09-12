import { Meteor } from 'meteor/meteor';
import { Organizations } from './Orgcollections';

Meteor.methods({
    insertOrg(organizations){
        Organizations.insert(organizations);
    }
})