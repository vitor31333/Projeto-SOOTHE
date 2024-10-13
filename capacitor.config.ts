import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'SOOTHE',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '404135637306-g85tppqf32drtpd00hp709gbniadmh04.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
