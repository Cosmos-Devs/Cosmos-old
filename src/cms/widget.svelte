<script>
  import ReactComponent from 'svelte-react';
  import { getContext } from 'svelte';

  export let type;
  export let value;

  const CMS = getContext('CMS');
  const editor = getContext('editor');
  const NetilfyWidget = CMS.getWidget(type).control;
</script>

<ReactComponent this={NetilfyWidget} {...editor} onChange={(val) => (value = val)} {value} />
