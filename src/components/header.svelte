<script>
  import json from "../data/navs/mainmenu.json";
  const items = json.items.map(({ title, slug }) => ({
    title,
    url: slug === "index" ? "/" : `/${slug}/`,
  }));
</script>

<header class="flex flex-row justify-between">
  <h2>Cosmos</h2>
  <nav>
    <ul class="flex flex-row">
      {#each items as { url, title }}
        <li class="mr-3">
          <a href={url}>{title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
