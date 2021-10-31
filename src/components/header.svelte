<script>
  import { items } from '$/lib/navigation.ts';
  import Logo from './Logo.svelte';
</script>

<header class="flex bg-indigo-700 text-white">
  <div class="container justify-between align-center flex">
    <Logo />

    <nav>
      <ul class="flex flex-row">
        {#each items as { url, title, target }}
          <li class="mr-3">
            <a href={url} {target}>{title}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>
