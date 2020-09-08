<script>
    import { oauth2, sfConn, loggedUserId, accessToken, instanceUrl, refreshToken } from "../store/store.js";
    import jsforce from "../jsforce/jsforce";
    import {push} from 'svelte-spa-router'

    let urlParameters = new URLSearchParams(window.location.search);
    let code = urlParameters.get('code');
    console.log('code ', code);
    
    sfConn.authorize(code, function(err, userInfo) {
        console.log('sfConn.authorize ');
        if (err) { return console.error("This error is in the auth callback: " + err); }
        console.log('Access Token: ' + sfConn.accessToken);
        console.log('Instance URL: ' + sfConn.instanceUrl);
        console.log('refreshToken: ' + sfConn.refreshToken);
        loggedUserId.set(userInfo.id);
        accessToken.set(sfConn.accessToken);
        instanceUrl.set(sfConn.instanceUrl);
        refreshToken.set(sfConn.refreshToken);
        console.log('User ID: ' + userInfo.id);
        console.log('Org ID: ' + userInfo.organizationId);
        
        window.location = '#/home';
    });
</script>
<h1>Token component</h1>
