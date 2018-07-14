import 'babel-polyfill';
import './components/common/common.module';
import './components/client-profile/client-profile.module';

Ext.application({
  name: 'MyApp',
  extend: 'Ext.app.Application',
  mainView: localStorage.getItem('MyAppLoggedIn') ? 'MyApp.Viewport' : 'MyApp.Login',
});