import './navigation.model';
import './navigation.controller';

Ext.define('MyApp.Navigation', {
  extend: 'Ext.panel.Panel',
  xtype: 'navigation',
  viewModel: 'navigation',
  controller: 'navigation',

  title: 'Client Profile',
  layout: 'fit',

  items: [{
    xtype: 'treelist',
    reference: 'navList',
    bind: '{navItems}',
    listeners: {
      selectionchange: 'onNavigate',
    }
  }],

  bbar: [{
    xtype: 'tbtext',
    text: 'ADT &copy; 2018',
  }],

  listeners: {
    afterrender: 'onLoad',
  },
});