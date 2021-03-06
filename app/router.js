import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('portal', function(){
    this.route('admin');
  });
  this.route('invoice', function() {});
  this.route('editinvoice', {path: '/editinvoice'});
});

export default Router;
