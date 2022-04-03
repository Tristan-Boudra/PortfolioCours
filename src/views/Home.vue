<template>
  <div class="w-full">
    <Navbar/>
    <!-- Pour faire une section carré -->
    <section class="max-w-screen-lg mx-auto">
      <div class="mt-20 w-full grid md:grid-cols-2">
        <div class="flex-col">
          <div class="gap-4 text-[#FFFFFF] mt-20 mx-auto ">
            <div class="w-full text-7xl pb-10 font-black md:text-left">Boudra<br>Tristan</div>
            <div class="p-5 pl-0 mt-10 mx-auto md:text-left"><span class="text-xl">Hello</span> 👋<br>Je suis actuellement étudiant en développement web.</div>
            <div class="mt-10 flex justify-center space-x-6 mx-auto md:justify-start">
              <button class="bg-[#DA5759] px-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest flex-row" href="#">Commencer</button>
              <button class="border-2 border-white p-2 rounded-lg text-[#FFFFFF] font-bold text-center h-14 tracking-widest flex-row" href="#">Voir mes projets
                <img class="m-auto mt-1 flex mx-auto" src="@/assets/Arrow.png" alt="flèche pour voir mes projets">
              </button>
            </div>
          </div>
        </div>
        <div class="flex-col md:order-0">
          <img class="mx-auto rounded-3xl mt-24 w-48 md:w-34 lg:w-96" src="@/assets/Tristan.png" alt="Image de profile">
        </div>
      </div>
      <div class="flex text-[#FFFFFF] gap-4 mt-20 flex-col md:flex-row">
        <div class="flex flex-col">
          <div class="flex-row text-left w-30 mx-auto p-10 lg:pl-0">
          J’ai réalisé un BTS SIO en 2 ans à l’Institut Supérieur de Saint-Denis à Annonay.
          Durant cette formation, j’ai décidé de me spécialisé dans le développement avec l’option SLAM. Avec mes projets de cours, mes stages,
          j’ai pu apprendre:</div>
          <ul class="flex flex-row flex-wrap gap-2 mx-auto space-x-4 p-3 justify-center">
            <li class="py-1 px-3 text-white text-sm rounded-md h-auto w-auto" v-for="tech in this.langages.techno" v-bind:key="tech" :style="'background-color: #' + tech.color">{{ tech.name }}</li>
          </ul>
        </div>
        <div class="">
          <div class="flex-col">
          <div class="flex flex-row space-x-14 justify-center mt-5">
            <div class="flex-row text-7xl">+6
              <div class="text-base">Projets</div>
            </div>
            <div class="flex-row text-7xl">+2
              <div class="text-base">Expériences</div>
            </div>
          </div>
          <button class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mt-10">CV</button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-screen-lg mx-auto px-3 py-16 grid gap-12">
        <h2 class="text-3xl font-bold text-center mx-auto">Mes projets</h2>
        <div class="flex flex-col gap-20" >
          <div v-for="row in Realisation" v-bind:key="row" class="gap-16">
            <Projects :data="row" />
          </div>
        </div>
        <div>
          <router-link to="/projects" class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mx-auto">Voir plus</router-link>
        </div>
      </div>
    </section>
  <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Projects from '@/components/Projects.vue';

export default {
  components: { Navbar, Footer, Projects },
  name: 'Technologie',
  data() {
    return {
      langages: '',
    };
  },
  computed: {
    Realisation() {
      const allRealisation = this.$store.state.realisation;
      return allRealisation.slice(0, 2);
    },
  },
  methods: {
    Technologie() {
      const langage = this.$store.state.langages;
      langage.forEach((langages) => {
        this.langages = langages;
      });
    },
  },
  mounted() {
    this.Technologie();
  },
};
</script>
