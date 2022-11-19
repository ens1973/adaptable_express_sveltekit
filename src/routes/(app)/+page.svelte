<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	// import { AccordionItem, Accordion } from 'flowbite-svelte'
  import { Badge, Button } from 'flowbite-svelte';
  import { Label, Input } from 'flowbite-svelte';
	import { user } from '$lib/stores/user';
  import ListProduct from '$lib/ListProduct.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="main min-height-80vh w-full ">

  <!-- First look -->
  <div class="flex content-center items-center min-height-80vh ">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-1 self-center content-center items-center">
      <div class="col-span-1 md:hidden">
        <img src="/breakfast.jpg" alt="">
      </div>
      <div class="col-span-1">
        <h3 class="text-5xl md:text-6xl lg:text-7xl leading-tight">Enjoy Delicious Breakfast</h3>
        <p class="pb-5 md:pr-28">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum accusamus modi veritatis explicabo sequi esse nemo quae earum doloremque, nisi.</p>
        <div class="flex justify-center md:justify-start">
        <Button pill={1} color={"yellow"} on:click={() => console.log('click')} >Order now</Button>
        </div>
      </div>
      <div class="col-span-1 hidden md:flex">
        <img src="/breakfast.jpg" alt="">
      </div>
    </div>
  </div>

  <!-- About us -->
  <div class="flex content-center items-center min-height-90vh ">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-1 self-center content-center items-center">
      <div class="col-span-1">
        <img src="/about-us.jpg" alt="">
      </div>
      <div class="col-span-1">
        <h4 class="text-xl md:text-2xl lg:text-3xl leading-tight">About us</h4>
        <h3 class="text-5xl md:text-6xl lg:text-7xl leading-tight capitalize">We provine healthy food</h3>
        <p class="pb-5 md:pr-28">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum accusamus modi veritatis explicabo sequi esse nemo quae earum doloremque, nisi.</p>
        <div class="flex justify-center md:justify-start">
        </div>
      </div>
    </div>
  </div>

  <!-- Popular product -->
  <div class="flex content-center items-center min-height-90vh ">
    <div class="w-full">
      <div class="text-center">
        <h4 class="text-xl md:text-2xl lg:text-3xl leading-tight">The best of us</h4>
        <h3 class="text-5xl md:text-6xl lg:text-7xl leading-tight capitalize">Popular dishes</h3>
      </div>
      <div class="popular-product px-14 md:px-0 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ListProduct />
      </div>
    </div>
  </div>

  <!-- Subcribe -->
  <div class="flex content-center items-center min-height-90vh px-10 md:px-32">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-1 self-center content-center items-center bg-stone-800 overflow-hidden rounded-custom gap-10">
      <div class="col-span-1 pt-10 pb-0 pl-10 pr-10 md:pb-10 md:pl-20 md:pr-0">
        <img class="rounded-full overflow-hidden" src="/about-us.jpg" alt="">
      </div>
      <div class="col-span-1 pt-0 pb-10 pl-10 pr-10 md:pt-10 md:pl-0 md:pr-20">
        <h4 class="text-center md:text-left text-lg md:text-xl lg:text-2xl leading-tight text-yellow-500">Newsletter</h4>
        <h3 class="text-center md:text-left text-3xl md:text-4xl lg:text-5xl leading-tight capitalize text-white">Subcribe for offer updates</h3>
        <form class="relative mt-4">
          <input class="w-full py-4 pl-4 pr-11 rounded-full" type="text" placeholder="Your email">
          <Button class="absolute right-2 top-2.5 !p-2" pill={1} color={"yellow"} on:click={() => console.log('click')} >
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

          </Button>

        </form>
      </div>
    </div>
  </div>

</section>

<style>
  .min-height-80vh {
    min-height: 80vh;
  }
  .min-height-90vh{
    min-height: 90vh;
  }
  .rounded-custom {
    border-radius: 5rem;
  }
</style>