<script>
  import marked from 'marked';
  export let title = '';
  export let content = '';
  export let image;
  console.log(image);
</script>

<section class="bg-blue-100 px-5 py-10">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
    <h1 class="text-3xl font-bold self-end">{title}</h1>
    <div class="col-start-1">
      {@html marked(content)}
    </div>

    {#if image}
      <img class="md:col-start-2 row-start-1 md:row-end-3" src={image} alt="" />
    {/if}
  </div>
</section>
