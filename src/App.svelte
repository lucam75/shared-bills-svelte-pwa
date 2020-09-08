<script>
	import Login from './components/Login.svelte';
	import Token from './components/Token.svelte';
	import Home from './components/Home.svelte';
	import CreateSharedBill from './components/CreateSharedBill.svelte';
	import Router, {link} from 'svelte-spa-router';

	let baseUrl = __myapp.env.BASE_URL;
	console.log(__myapp.env.BASE_URL);
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register(__myapp.env.BASE_URL + '/service-worker.js');
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
	<h1 class="text-secondaryColor font-bold ">{baseUrl}</h1>
	<Router {routes}/>
</main>
