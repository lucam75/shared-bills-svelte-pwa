import { writable } from 'svelte-persistent-store/dist/session';
import jsforce from "../jsforce/jsforce";

//Insert store variables here
export const count = writable('count', 0);

export const oauth2 = new jsforce.OAuth2({
    loginUrl : 'https://cunning-fox-tqgyk9-dev-ed.my.salesforce.com',
    clientId : '3MVG95jctIhbyCprKkuB.DbXd55yOtTF5JrNA.EZ6iG8K_pWiNF7G6EPN_iXEwHdSW83jUE6Kux._DJZ.HihM',
    clientSecret : '1F5E3DA5394BFF18B9DFD9D9D9C1B71C2ECC8E09CA2DB1C6129067653E76C21C',
    redirectUri : 'https://lucam75.github.io/shared-bills-svelte-pwa/',
    version: '49.0',
    proxyUrl: 'https://shared-bills-proxy.herokuapp.com/proxy'
});

export const sfConn = new jsforce.Connection({oauth2: oauth2});

export const loggedUserId = writable('loggedUserId', '');
export const accessToken = writable('accessToken', '');
export const instanceUrl = writable('instanceUrl', '');
export const refreshToken = writable('refreshToken', '');