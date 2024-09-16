<script>
  export let pathname = "/work";
</script>

<nav class="max-[380px]:text-4xl max-[380px]:flex">
  <a class={`hover:text-bright-green ${pathname ==='/about' ? 'text-bright-green' : ''}`} href="/about">abt</a>
	<span>..</span>
  <a class={`hover:text-bright-green ${pathname ==='/work' ? 'text-bright-green' : ''}`} href="/work">wrk</a>
	<span>..</span>
  <a class={`hover:text-bright-green ${pathname ==='/contact' ? 'text-bright-green' : ''}`} href="/contact">cntct</a>
</nav>

