<script>
  import Widget from '../../../cms/widget.svelte';
  export let value;

  const onChange = (val, name) => ($value[name] = val);
</script>

{#if value}
  <div>
    <h4>Banner block</h4>
    <Widget type="string" name="title" value={$value.title} {onChange} />
    <Widget type="markdown" name="content" value={$value.content} {onChange} />
    <Widget type="image" name="image" value={$value.image} {onChange} />
  </div>
{/if}
