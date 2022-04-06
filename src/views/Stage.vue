<template>
  <div class="w-full">
    <Navbar/>
    <section class="max-w-screen-lg mx-auto mt-20">
      <div class="max-w-screen-lg mx-auto px-3 grid gap-6">
        <h1 class="text-3xl font-bold text-center mx-auto">{{ this.brogieux.name }}</h1>
        <!-- <img class="mx-auto rounded-lg mb-5" :src="require(`@/assets/${this.realisation.img}`)" alt=""> -->
        <div>
          <h2 class="text-left text-xl font-bold mt-20">Description du site:</h2>
          <p class="text-left">{{ brogieux.description }}</p>
        </div>
        <div class="flex flex-col" >
          <h2 class="text-left text-xl font-bold">Technologies utilisées:</h2>
          <ul class="flex gap-2 flex-wrap p-3">
            <li class="py-1 px-3 bg-red-500 text-white text-sm rounded-md" v-for="tech in this.brogieux.techno" v-bind:key="tech" :style="'background-color: #' + tech.color">{{ tech.name }}</li>
          </ul>
        </div>
        <div class="gap-16">
          <h2 class="text-left text-xl font-bold">{{ this.brogieux.title }}</h2>
          <ul class="grid lg:grid-cols-1 md:grid-cols-1 gap-5 w-96 mx-auto p-5">
            <li class="py-1 text-left" v-for="tech in this.brogieux.mission" v-bind:key="tech">{{ tech.description }}
              <img class="mx-auto w-auto mb-0 rounded-lg mb-0" src="" alt="">
              <div class="w-48 mx-auto h-px bg-[#A0A0A0] mt-8 rounded-lg"></div>
            </li>
          </ul>
        </div>
        <div class="gap-16">
          <ul class="gap-5 mt-5">
            <li class="py-1 text-left" v-for="tech in this.brogieux.fonctionalitesConducteur" v-bind:key="tech"><span class="font-bold mb-2 text-xl">{{ tech.title }}</span><span class="font-bold text-xl">{{ tech.for }}</span>{{ tech.name }}</li>
            <div class="mt-5">
              <li class="py-1 text-left" v-for="tech in this.brogieux.fonctionalitesPassager" v-bind:key="tech"><span class="font-bold text-xl">{{ tech.for }}</span>{{ tech.name }}</li>
            </div>
          </ul>
        </div>
        <div class="flex justify-center space-x-6 mx-auto md:justify-start">
          <ul class="flex gap-2 flex-wrap space-x-5 flex-wrap">
            <li v-for="website in this.brogieux.link" v-bind:key="website">
              <a class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-auto tracking-widest" :href="website.link">{{ website.linkName }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Navbar, Footer },
  name: 'Brogieux',
  data() {
    return {
      brogieux: '',
    };
  },
  methods: {
    Realisation() {
      const Brogieux = this.$store.state.brogieux;
      Brogieux.forEach((brogieux) => {
        this.brogieux = brogieux;
      });
    },
  },
  mounted() {
    this.Realisation();
  },
};
</script>
