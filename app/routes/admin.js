import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveItem(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('admin');
    }
  }
});
