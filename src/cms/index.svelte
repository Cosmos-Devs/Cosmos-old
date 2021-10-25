<script>
  export let styling;
  if (!import.meta.env.SSR) {
    import('./cms').then((cms) => cms.default(styling));
  }
</script>
