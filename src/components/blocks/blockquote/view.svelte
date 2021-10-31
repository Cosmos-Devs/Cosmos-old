<script>
  import marked from 'marked';
  export let content;
</script>

{#if content}
  <section class="container mx-auto place-items-center">
    <blockquote>
      {@html marked(content)}
    </blockquote>
  </section>
{/if}
