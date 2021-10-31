<script>
  import Widget from '$/cms/widget.svelte';
  export let value;
</script>

<h4>Banner block</h4>
<Widget type="string" bind:value={$value.title} />
<Widget type="markdown" bind:value={$value.content} />
<Widget type="image" bind:value={$value.image} />
