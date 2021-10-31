<script>
  import Icon from './Icon.svelte';

  export let href = '/';
</script>

<a {href} class="grid grid-flow-col items-center gap-2">
  <Icon size="48" />
  <h2>Cosmos</h2>
</a>
