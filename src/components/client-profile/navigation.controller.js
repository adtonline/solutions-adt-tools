Ext.define('MyApp.NavigationController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.navigation',

  routes: {
    'dashboard': 'loadDashboardView',
  },

  onLoad() {
    (!window.location.hash) && (this.redirectTo('dashboard'));
  },

  onNavigate(cmp, record) {
    this.redirectTo(record.get('path'));
  },

  loadDashboardView() {
    this.loadView('dashboard');
    this.selectNavItem('dashboard');
  },

  loadView(xtype) {
    const ctn = Ext.getCmp('main-container');
    ctn.removeAll();
    ctn.add(Ext.create({ xtype }));
  },

  selectNavItem(value) {
    const refs = this.getReferences(),
          navList = refs.navList,
          store = refs.navList.getStore(),
          node = store.findNode('path', value);
    navList.setSelection(node);
  },
});