import { CapacitorConfig } from '@capacitor/cli';


const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'projet_ionic',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    'GoogleAuth': {
      'scopes': ['profile', 'email'],
      'serverClientId': '769661539885-m06ta17bqgtif99o7eeaj21hpdn9i7om.apps.googleusercontent.com'
    }
  }
};

export default config;
