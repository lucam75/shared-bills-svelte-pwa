<script>
	import Login from './components/Login.svelte';
	import Token from './components/Token.svelte';
	import Home from './components/Home.svelte';
	import Link from './components/_Link.svelte'
	import CreateSharedBill from './components/CreateSharedBill.svelte';
	import { Router, Route } from "svelte-routing";

	export let url = "";

	let currentUrl = window.location.href;
	let swLocation = '/shared-bills-svelte-pwa/service-worker.js';

	if ('serviceWorker' in navigator) {
		if(currentUrl.includes('localhost')) {
			swLocation = '/service-worker.js';
		}
		console.log('Service worker location ', swLocation);
		navigator.serviceWorker.register(swLocation)
		.then(function(registration) {
        	console.log("Service Worker Registered", registration);
		})
		.catch(function(err) {
			console.log("Service Worker Failed to Register", err);
		})
	}
</script>
<style>

</style>

<main class="overflow-hidden">
	<Router url="{url}">
		<nav>
			<Link css="text-primaryColor font-semibold hover:text-accentColor" to="/" label="Home"/>
			<Link css="text-primaryColor font-semibold hover:text-accentColor" to="/Login" label="Login"/>
			<Link css="text-primaryColor font-semibold hover:text-accentColor" to="/Token" label="Token"/>
			<Link css="text-primaryColor font-semibold hover:text-accentColor" to="/Create-shared-bill" label="CreateSharedBill"/>
		</nav>
		<p>Current url: {url}</p>
		<div>
		  <Route path="/" component="{Home}" />
		  <Route path="/Login" component="{Login}" />
		  <Route path="/Token" component="{Token}" />
		  <Route path="/Create-shared-bill" component="{CreateSharedBill}" />
		  <Route path="/"><Home /></Route>
		</div>
	</Router>
</main>
