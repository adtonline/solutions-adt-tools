import 'babel-polyfill';
import './components/common/common.module';

Ext.application({
  name: 'MyApp',

  mainView: 'MyApp.Login',

  stores: [
    // TODO: add global / shared stores here
  ],

  launch() {
    // TODO - Launch the application
  },
});