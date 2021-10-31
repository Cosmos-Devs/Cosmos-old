<script>
  import blocks from '$/cms/blocks';
  export let content = [];

  $: entries = content
    .map((entry) => {
      const name = entry.type;
      if (!blocks[name]) return null;

      return {
        view: blocks[name].view,
        props: entry[name],
      };
    })
    .filter((e) => e);
</script>

{#each entries as { view, props }}
  {#if view}
    <svelte:component this={view} {...props} />
  {/if}
{/each}
