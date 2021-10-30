<script>
  import blocks from '../cms/blocks';
  export let content = [];
</script>

{#each content as { block, ...props }}
  {#if blocks[block]}
    <svelte:component this={blocks[block].view} {...props} />
  {/if}
{/each}
