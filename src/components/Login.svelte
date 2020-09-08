<script>
    import { oauth2 } from "../store/store.js";
    import jsforce from "../jsforce/jsforce";
    
    let urlLogin = oauth2.getAuthorizationUrl();
    
    function login() {
        window.location = urlLogin;
    }

</script>

<style>

</style>
<h2>You should login with salesforce to use the app.</h2>
<p>Please use the below button to authorize access to your org.</p>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={login}>Login with Salesforce</button>