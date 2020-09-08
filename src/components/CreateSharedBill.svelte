<script>
    import { oauth2, sfConn, loggedUserId, accessToken, instanceUrl, refreshToken } from "../store/store.js";
    import jsforce from "../jsforce/jsforce";

    let accessTokenValue;
    accessToken.subscribe(id => (accessTokenValue = id));
    let instanceUrlValue;
    instanceUrl.subscribe(id => (instanceUrlValue = id));

    console.log('create shared bill ');
    //SOQL query
    let q = 'SELECT id, name FROM account LIMIT 10';
    //instantiate connection
    let conn = new jsforce.Connection({
        oauth2 : {oauth2},
        accessToken: accessTokenValue,
        instanceUrl: instanceUrlValue,
        proxyUrl: "https://shared-bills-proxy.herokuapp.com/proxy"
    });
    //set records array
    let records = [];
    conn.query(q, function(err, res) {
    if (err) { console.log(err); }
    records = res.records;
    console.log('records ', records);
    });

</script>

<style>

</style>
<h1>Create Shared Bill</h1>
<ul>
{#each records as record}
     <li>{record.Name}</li>
{:else}
    <li>No contacts found</li>
{/each}
</ul>