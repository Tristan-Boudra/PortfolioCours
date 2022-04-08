<template>
  <div class="w-full">
    <!-- Pour faire une section carré -->
    <section class="max-w-screen-lg mx-auto p-6">
        <div class="flex flex-col mt-10 rounded-lg p-3 h-auto">
          <h2 class="text-center text-2xl font-bold">{{ data.name }}</h2>
          <ul class="gap-5 py-10">
            <img class="mx-auto w-96 rounded-lg mb-5" v-if="this.data.img" :src="require(`@/assets/${ data.img }.png`)" alt="image veilles">
            <li class="py-1 text-center text-lg p-5 mt-20">{{ data.description }}</li>
          </ul>
          <ul class="flex gap-2 flex-wrap space-x-5">
            <li class="mx-auto">
              <a class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-auto tracking-widest gap-6" :href="data.link">En savoir plus</a>
            </li>
          </ul>
          <div class="w-60 mx-auto md:w-96 lg:w-96 h-px bg-[#A0A0A0] mt-20 rounded-lg"></div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>
