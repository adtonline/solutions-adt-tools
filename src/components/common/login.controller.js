Ext.define('MyApp.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  onClickLogin() {
    localStorage.setItem('MyAppLoggedIn', true);
    this.getView().destroy();
    MyApp.getApplication().setMainView('MyApp.Viewport');
  },
});