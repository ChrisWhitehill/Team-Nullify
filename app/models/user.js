import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  avatar: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
});
