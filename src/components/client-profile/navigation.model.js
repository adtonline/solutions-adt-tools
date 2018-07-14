Ext.define('MyApp.NavigationModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.navigation',

  stores: {
    navItems: {
      type: 'tree',
      root: {
        expanded: true,
        children: [{
          text: 'Dashboard',
          path: 'dashboard',
          leaf: true,
        }],
      },
    },
  },
});