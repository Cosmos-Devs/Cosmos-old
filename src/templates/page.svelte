<script>
  import Banner from '$components/banner.svelte';
  import Builder from '$components/builder.svelte';
  export let content = {};

  $: banner = content?.banner;
  $: builder = content?.builder;
</script>

{#if banner}
  <Banner {...banner} />
{/if}

{#if builder}
  <Builder content={builder} />
{/if}
