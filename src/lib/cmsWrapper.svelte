<script>
  import { setContext } from 'svelte';
  export let CMS;
  export let editor;
  export let component;

  let props = {
    CMS,
    editor,
  };

  console.log('props', props);

  setContext('CMS', CMS);
  setContext('editor', editor);
</script>

<div>
  {#if component}
    <svelte:component this={component} {...props} />
  {/if}
</div>
