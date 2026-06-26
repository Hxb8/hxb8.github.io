<script lang="ts">
 import Header from './header.svelte'
 import Footer from './footer.svelte'
 import 'open-props/style'
 import 'open-props/buttons'
 import 'open-props/normalize'
 import '../app.css'

 let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href="https://fav.farm/🔥" />
</svelte:head>
<div class="layout">
    <Header />
    <main>
        {@render children()}
    </main>
    <Footer />
</div>


<style>
 .layout {
     height: 100%;
     max-inline-size: 1440px;
     display: grid;
     grid-template-raws: auto 1fr auto;
     margin-inline: auto;
     padding-inline: var(--size-7);

 }

 main {
     padding-block: var(--size-9);
 }

 @media (min-width: 1440px) {
     .layout {
         padding-inline: 0;
     }
 }

</style>
