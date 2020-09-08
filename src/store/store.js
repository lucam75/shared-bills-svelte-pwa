import { writable } from 'svelte-persistent-store/dist/session';
import jsforce from "../jsforce/jsforce";

//Insert store variables here
export const count = writable('count', 0);

export const oauth2 = new jsforce.OAuth2({
    loginUrl : __myapp.env.LOGIN_URL,
    clientId : __myapp.env.CLIENT_ID,
    clientSecret : __myapp.env.CLIENT_SECRET,
    redirectUri : __myapp.env.REDIRECT_URI,
    version: __myapp.env.API_VERSION,
    proxyUrl: __myapp.env.PROXY_URL
});

export const sfConn = new jsforce.Connection({oauth2: oauth2});

export const loggedUserId = writable('loggedUserId', '');
export const accessToken = writable('accessToken', '');
export const instanceUrl = writable('instanceUrl', '');
export const refreshToken = writable('refreshToken', '');