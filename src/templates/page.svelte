<script>
  import Banner from '../components/banner.svelte';
  export let content = {};

  $: banner = content?.banner;
</script>

{#if banner}
  <Banner {...banner} />
{/if}
