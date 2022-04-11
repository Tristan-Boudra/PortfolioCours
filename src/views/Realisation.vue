<template>
  <div class="w-full dark:bg-[#333333]">
    <Navbar/>
    <section class="max-w-screen-lg mx-auto mt-20">
      <div class="max-w-screen-lg mx-auto px-3 grid gap-6 text-[#333333] dark:text-[#FFFFFF]">
        <h1 class="text-3xl font-bold text-center mx-auto">{{ this.realisation.name }}</h1>
        <img class="mx-auto rounded-lg mb-5 border border-black" v-if="this.realisation.img" :src="require(`@/assets/${ this.realisation.img }.png`)" alt="images des mes réalisations">
        <div class="flex flex-col" >
          <h2 class="text-left text-xl font-bold">Technologies utilisées:</h2>
          <ul class="flex gap-2 flex-wrap p-3">
            <li class="py-1 px-3 bg-red-500 text-white text-sm rounded-md" v-for="tech in this.realisation.techno" v-bind:key="tech" :style="'background-color: #' + tech.color">{{ tech.name }}</li>
          </ul>
        </div>
        <div>
          <h2 class="text-left text-xl font-bold">Description du projet:</h2>
          <p class="text-left">{{ realisation.projectDescription }}</p>
        </div>
        <!-- Pour Kathekon et Vm-Automation -->
        <div class="gap-16">
          <h2 class="text-left text-xl font-bold" v-for="tech in this.realisation.mission" v-bind:key="tech">{{ tech.title }}</h2>
          <ul class="grid lg:grid-cols-1 md:grid-cols-2 gap-5 py-10">
            <li class="py-1 text-center text-lg p-5 mt-20" v-for="tech in this.realisation.mission" v-bind:key="tech">{{ tech.description }}
              <img class="mx-auto w-auto mt-10 rounded-lg" v-if="tech.img" :src="require(`@/assets/${ tech.img }.png`)" alt="images de mes missions">
            </li>
          </ul>
        </div>
        <!-- Pour Covoit -->
        <div class="gap-16">
          <h2 class="text-left text-xl font-bold" v-for="tech in this.realisation.fonctionalitesConducteur" v-bind:key="tech">{{ tech.title }}</h2>
          <ul class="gap-5 mt-5">
            <li class="py-1 text-left" v-for="tech in this.realisation.fonctionalitesConducteur" v-bind:key="tech"><span class="font-bold text-xl">{{ tech.for }}</span>{{ tech.name }}</li>
            <div class="mt-5">
              <li class="py-1 text-left" v-for="tech in this.realisation.fonctionalitesPassager" v-bind:key="tech"><span class="font-bold text-xl">{{ tech.for }}</span>{{ tech.name }}</li>
            </div>
          </ul>
        </div>
        <div class="flex justify-center space-x-4 mx-auto md:justify-start flex-wrap gap-6">
          <ul class="flex gap-2 flex-wrap space-x-5">
            <li v-for="github in this.realisation.githubLinks" v-bind:key="github">
              <a class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-auto tracking-widest gap-6" :href="github.link">{{ github.linkName }}</a>
            </li>
          </ul>
          <ul class="flex gap-2 flex-wrap">
            <li v-for="figma in this.realisation.figmaLinks" v-bind:key="figma">
              <a class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-auto tracking-widest" :href="figma.link">{{ figma.linkName }}</a>
            </li>
          </ul>
          <ul class="flex gap-2 flex-wrap">
            <li v-for="website in this.realisation.websiteLinks" v-bind:key="website">
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
  name: 'Realisation',
  data() {
    return {
      realisation: '',
    };
  },
  methods: {
    Realisation() {
      const realisations = this.$store.state.realisation;
      realisations.forEach((realisation) => {
        if (realisation.pathName === this.$route.params.name) {
          this.realisation = realisation;
        }
      });
    },
  },
  mounted() {
    this.Realisation();
  },
};
</script>
