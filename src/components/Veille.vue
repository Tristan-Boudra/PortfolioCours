<template>
  <div class="w-full">
    <Navbar/>
    <!-- Pour faire une section carré -->
    <section class="max-w-screen-lg mx-auto">
        <div class="flex mt-20 border border-[#DA5759] rounded-lg p-3 h-96">
            <div class="flex flex-col">
                <h2 class="font-bold text-xl text-[#DA5759]">{{ data.name }}</h2>
                <img src="" alt="">
                <p class="mt-5 p-3">{{ data.description }}</p>
                <button class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-auto h-auto tracking-widest mx-auto mb-0">
                  <a class="mt-5 transition transition-200 bg-transparent" href="">En savoir plus</a>
                </button>
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
