<script>
    import Product from "./Product.svelte"

    export let items = [
        {id: 1},
        {id: 2},
        {id: 3},
    ]
</script>

{#each items as item, index(item)}
    <div class="col-span-1">
    <Product {item}/>
    </div>
{/each}
