<template>
  <div class="dark:bg-red-200">
    <section class="dark:bg-[#333333]">
      <div class="flex flex-col">
        <h1 class="text-2xl font-bold p-2 mb-5">{{ data.name }}</h1>
        <img class="mx-auto w-auto rounded-lg mb-5 border border-[#333333]" v-if="this.data.img" :src="require(`@/assets/${data.img}.png`)" alt="image projetcs">
        <p class="mx-auto p-2 mb-6">{{ data.shortDesc }}</p>
        <ul class="flex gap-2 flex-wrap mx-auto justify-center mb-3">
          <li class="py-1 px-3 text-white text-sm rounded-md" v-for="tech in data.techno" v-bind:key="tech" :style="'background-color: #' + tech.color">{{ tech.name }}</li>
        </ul>
        <p class="mx-auto p-2">{{ data.type }}</p>
        <div class="mt-5">
          <router-link :to="{ name: 'Realisation', params: { name: data.pathName }}" class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mx-auto">En savoir plus</router-link>
        </div>
        <div class="w-60 mx-auto md:w-96 lg:w-96 h-px bg-[#A0A0A0] mt-8 rounded-lg"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>
