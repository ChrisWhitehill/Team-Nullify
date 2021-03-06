import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function (controller){
    controller.set('authController', this.controllerFor('auth'));
    controller.set('model', this.store.find('portal'));
  }
});