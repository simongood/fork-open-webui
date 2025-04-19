<script lang="ts">
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import ChatBox from '$lib/components/layout/ChatBox.svelte';
	import ChatArea from '$lib/components/layout/ChatArea.svelte';
</script>
<div class="text-gray-700 bg-white h-screen w-screen max-h-[100dvh] max-w-[100dvw] flex flex-row justify-start overflow-hidden">
	<!-- 統一設定字體、整面背景 -->
	<div class="flex flex-row w-full">
		<Sidebar />
		<div class="relative flex-1 px-3">
			<ChatArea />
			<ChatBox />
		</div>
	</div>
</div>