<script>
  export let pathname = "/work";
</script>

<nav class="max-[380px]:text-4xl max-[380px]:flex max-[380px]:justify-between max-[380px]:px-3">
  <a class={`hover:text-blue ${pathname ==='/about' ? 'text-blue' : ''}`} href="/about">abt</a>
	<span>..</span>
  <a class={`hover:text-blue ${pathname ==='/work' ? 'text-blue' : ''}`} href="/work">wrk</a>
	<span>..</span>
  <a class={`hover:text-blue ${pathname ==='/contact' ? 'text-blue' : ''}`} href="/contact">cntct</a>
</nav>

