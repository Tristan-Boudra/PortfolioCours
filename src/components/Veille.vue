<template>
  <div class="w-full">
    <Navbar/>
    <!-- Pour faire une section carré -->
    <section class="max-w-screen-lg mx-auto">
        <div class="flex grid-cols-3 mt-20 border border-[#DA5759] rounded-lg p-3 gap-8">
            <div class="flex flex-col grid">
                <h2 class="font-bold text-xl text-[#DA5759]">{{ data.name }}</h2>
                <img src="" alt="">
                <p class="mt-5 p-3">{{ data.description }}</p>
                <a class="italic mt-5 transition transition-200 hover:text-[#DA5759]" href="">En savoir plus</a>
            </div>
        </div>
    </section>
  <Footer/>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>
