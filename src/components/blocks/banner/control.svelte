<script>
  import Widget from '../../../cms/widget.svelte';
  import { Map } from 'immutable';
  export let editor;
  const values = editor?.value?.toJS() || {};
  const store = { ...values };

  const onChange = (val, name) => {
    console.log(name, val);
    store[name] = val;
    editor.onChange(new Map(store));
  };
</script>

{#if editor}
  <div>
    <h4>Banner block</h4>
    <Widget type="string" name="title" {onChange} value={store.title} />
    <Widget type="markdown" name="content" {onChange} value={store.content} />
    <Widget type="image" name="image" {onChange} value={store.image} />
  </div>
{/if}
