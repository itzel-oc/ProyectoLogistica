import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider
  } from 'angularx-social-login';
  
  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider()<475635489583-k0mj3vask2akari3jl73v97q6vu76umg.apps.googleusercontent.com>
      }
    ]);
  
    return config;
  }