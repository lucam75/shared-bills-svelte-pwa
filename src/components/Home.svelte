<script>
    import {location, querystring} from 'svelte-spa-router'
    import { loggedUserId } from "../store/store.js";
    let userId;
    loggedUserId.subscribe(id => (userId = id));
</script>
<h1>Home component</h1>
{#if userId != ''}
     <h1>Logged as user {userId}</h1>
{:else}
     Please login first.
{/if}