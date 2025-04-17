<script>
	import { onMount} from 'svelte';

	import '../tailwind.css';
	import '../app.css';
	let loaded = false;

	onMount(() => {
		// 關閉開機畫面
		document.getElementById('splash-screen')?.remove();

		loaded = true;
	});
</script>

<svelte:head>
	<title>EMMA Web</title>
	<link crossorigin="anonymous" rel="icon" href="/static/favicon.png" />
</svelte:head>

{#if loaded}
	<slot />
{/if}