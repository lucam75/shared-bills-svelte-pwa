<script>
    import { oauth2, sfConn, loggedUserId, accessToken, instanceUrl, refreshToken } from "../store/store.js";
    import jsforce from "../jsforce/jsforce";

    let message = '';

    let urlParameters = new URLSearchParams(window.location.search);
    let code = urlParameters.get('code');
    console.log('code ', code);
    
    sfConn.authorize(code, function(err, userInfo) {
        console.log('sfConn.authorize ');
        if (err) { message = err; return ''; }
        console.log('Access Token: ' + sfConn.accessToken);
        console.log('Instance URL: ' + sfConn.instanceUrl);
        console.log('refreshToken: ' + sfConn.refreshToken);
        loggedUserId.set(userInfo.id);
        accessToken.set(sfConn.accessToken);
        instanceUrl.set(sfConn.instanceUrl);
        refreshToken.set(sfConn.refreshToken);
        console.log('User ID: ' + userInfo.id);
        console.log('Org ID: ' + userInfo.organizationId);
        
        window.location = './';
    });
</script>
<h1>Token component</h1>
<p>Code: {code}</p>
<p>{message}</p>
