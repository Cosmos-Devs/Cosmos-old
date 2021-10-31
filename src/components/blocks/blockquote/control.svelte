<script>
  import Widget from '$/cms/widget.svelte';
  export let value;
</script>

<Widget type="markdown" bind:value={$value.content} />
