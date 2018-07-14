import './navigation';

Ext.define('MyApp.Viewport', {
  extend: 'Ext.container.Viewport',
  xtype: 'viewport',
  layout: 'border',

  items: [{
    region: 'west',
    xtype: 'navigation',
    width: 250,
    collapsible: true,
  }, {
    region: 'center',
    xtype: 'panel',
    id: 'main-container',

    header: {
      items: [{
        xtype: 'tbtext',
        text: 'Admin',
      }],
      style: {
        background: '#fff',
      },
    },

    bodyStyle: {
      background: '#f6f6f6',
      padding: '10px',
    },
  }],
});