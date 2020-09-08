<script>
	import Login from './components/Login.svelte';
	import Token from './components/Token.svelte';
	import Home from './components/Home.svelte';
	import CreateSharedBill from './components/CreateSharedBill.svelte';
	import Router, {link} from 'svelte-spa-router';

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/service-worker.js');
	}

	const routes = {
		'/': Home,
		'/home': Home,
		'/login': Login,
		'/token': Token,
		'/create-shared-bill': CreateSharedBill
	};
</script>

<main class="overflow-hidden">
	<a class="text-primaryColor font-semibold hover:text-accentColor" href="/home" use:link>Home</a>
	<a class="text-primaryColor font-semibold hover:text-accentColor" href="/login" use:link>Login</a>
	<a class="text-primaryColor font-semibold hover:text-accentColor" href="/token" use:link>Token</a>
	<a class="text-primaryColor font-semibold hover:text-accentColor" href="/create-shared-bill" use:link>CreateSharedBill</a>
	<Router {routes}/>
</main>
