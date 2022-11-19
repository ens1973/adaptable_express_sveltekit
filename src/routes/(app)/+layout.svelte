<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Nav from './Nav.svelte';
</script>


<div class="min-h-screen relative">
	<Header/>

	<Nav sticky={1}/>

	<main class="box-border w-full max-w-7xl p-4 pt-20 my-0 mx-auto">
		<slot />
	</main>

	<Footer />
</div>
