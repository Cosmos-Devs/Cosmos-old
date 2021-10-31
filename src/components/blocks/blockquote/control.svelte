<script>
  import Widget from '$/cms/widget.svelte';
  export let value;

  const onChange = (val) => ($value.content = val);
</script>

{#if value}
  <Widget type="markdown" value={$value.content} {onChange} />
{/if}
