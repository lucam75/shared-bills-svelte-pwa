<script>
    import { loggedUserId } from "../store/store.js";
    let userId;
    loggedUserId.subscribe(id => (userId = id));
</script>
<h1>Home component</h1>
<h2>Shared Bills</h2>
{#if userId != ''}
     <h1>Logged as user {userId}</h1>
{:else}
     Please login first.
{/if}