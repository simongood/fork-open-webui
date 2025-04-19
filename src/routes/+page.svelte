<script lang="ts">
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import ChatBox from '$lib/components/layout/ChatBox.svelte';
</script>
<div class="text-gray-700 bg-white h-screen max-h-[100dvh] overflow-auto flex flex-row justify-start">
	<div class="app relative flex flex-row w-full">
		<Sidebar />
		<ChatBox />
	</div>
</div>