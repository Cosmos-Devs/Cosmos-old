<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { fromJS } from 'immutable';

  export let CMS;
  export let editor;
  export let component;

  setContext('CMS', CMS);
  setContext('editor', editor);

  const value = writable(editor?.value?.toJS() || {});

  value.subscribe((value) => {
    const data = fromJS(value);
    editor.onChange(data);
  });
</script>

<div>
  {#if component}
    <svelte:component this={component} {value} {CMS} {editor} />
  {/if}
</div>
