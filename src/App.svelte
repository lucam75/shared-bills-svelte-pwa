<script>
	import Login from './components/Login.svelte';
	import Token from './components/Token.svelte';
	import Home from './components/Home.svelte';
	import CreateSharedBill from './components/CreateSharedBill.svelte';
	import { Router, Link, Route } from "svelte-routing";

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
		  <Link getProps="{() => {return {class: "text-primaryColor font-semibold hover:text-accentColor"}}}" to="/">Home</Link>
		  <Link getProps="{() => {return {class: "text-primaryColor font-semibold hover:text-accentColor"}}}" to="login">Login</Link>
		  <Link getProps="{() => {return {class: "text-primaryColor font-semibold hover:text-accentColor"}}}" to="token">Token</Link>
		  <Link getProps="{() => {return {class: "text-primaryColor font-semibold hover:text-accentColor"}}}" to="create-shared-bill">CreateSharedBill</Link>
		</nav>
		<div>
		  <Route path="/" component="{Home}" />
		  <Route path="login" component="{Login}" />
		  <Route path="token" component="{Token}" />
		  <Route path="create-shared-bill" component="{CreateSharedBill}" />
		  <Route path="/"><Home /></Route>
		</div>
	</Router>
</main>
