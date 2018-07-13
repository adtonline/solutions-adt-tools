Ext.define('MyApp.Login', {
  extend: 'Ext.container.Container',
  xtype: 'login',
  layout: 'center',

  items: [{
    xtype: 'window',
    title: 'Solution ADT Tools',
    width: 320,
    bodyPadding: 10,
    closable: false,
    autoShow: true,

    defaults: {
      xtype: 'textfield',
      anchor: '100%',
      labelWidth: 120,
      allowBlank: false,
    },

    items: [{
      fieldLabel: 'Username',
      name: 'username',
    }, {
      fieldLabel: 'Password',
      name: 'password',
      inputType: 'password',
    }, {
      xtype:'checkbox',
      fieldLabel: 'Remember me',
      name: 'remember',
    }],

    buttons: [
      { text:'Login' },
    ],
  }],
});