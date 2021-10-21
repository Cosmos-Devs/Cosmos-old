<script>
  import json from "../data/navs/mainmenu.json";
  const items = json.items.map(({ title, slug }) => ({
    title,
    url: slug === "index" ? "/" : `/${slug}/`,
  }));
</script>

<header class="flex flex-row">
  <h2>Cosmos</h2>
  <nav>
    <ul>
      {#each items as { url, title }}
        <li>
          <a href={url}>{title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
