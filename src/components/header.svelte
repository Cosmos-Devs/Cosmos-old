<script>
  import { items } from '../functions/navigation.ts';
  console.log('nav', items);
</script>

<header class="flex flex-row justify-between">
  <h2>Cosmos</h2>
  <nav>
    <ul class="flex flex-row">
      {#each items as { url, title, target }}
        <li class="mr-3">
          <a href={url} {target}>{title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
