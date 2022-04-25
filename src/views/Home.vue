<template>
  <div class="w-full dark:bg-[#333333]">
    <Navbar/>
    <!-- Pour faire une section carré -->
    <section class="max-w-screen-lg mx-auto bg-white dark:bg-[#333333]">
      <div class=" mt-20 md:mt-10 w-full grid md:grid-cols-2 md:p-10 md:py-0">
        <div class="flex-col pt-10">
          <div class="gap-4 mx-auto p-1 sm:pl-0 dark:text-[#FFFFFF] text-[#333333]">
            <div class="w-full text-7xl pb-10 font-black md:text-left">Boudra<br>Tristan</div>
            <div class="p-5 pl-0 mt-10 mx-auto md:text-left"><span class="text-xl">Hello</span> 👋<br>Je suis actuellement étudiant en BTS SIO spécialisé dans le développement web.</div>
            <div class="mt-10 flex justify-center space-x-6 mx-auto md:justify-start text-[#333333]">
              <button class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest transition duration-600"><a class="bg-transparent" href="/#bts">Commencer</a></button>
              <router-link class="border-2 border-[#333333] p-2 rounded-lg font-bold text-center h-full tracking-widest flex-row text-[#333333] dark:text-[#FFFFFF] dark:border-white" to="/projects">Voir mes projets
                <img class="m-auto mt-1 flex mx-auto" src="@/assets/Arrow.png" alt="flèche pour voir mes projets">
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex-col md:order-0 pt-28 md:pt-0">
          <img class="m-auto rounded-3xl mt-24 w-56 md:w-72 lg:w-96" src="@/assets/Tristan.png" alt="Image de profile">
        </div>
      </div>
      <div class="flex text-[#FFFFFF] gap-4 mt-28 flex-col md:flex-row md:p-5">
        <div class="flex flex-col text-[#333333] dark:text-[#FFFFFF]">
          <div class="flex-row text-left w-30 mx-auto p-10 lg:pl-0">
            Titulaire d'un Bac STI2D, je suis actuellement en 2eme année de BTS SIO. Plus précisément en option SLAM (Solutions Logicielles et Applications Métiers) à l’Institut Supérieur de Saint-Denis à Annonay.
            Avec mes projets de cours, personnels, ainsi que mes stages, j’ai pu apprendre:</div>
          <ul class="flex flex-row flex-wrap gap-2 mx-auto space-x-4 p-3 justify-center">
            <li class="py-1 px-3 text-white text-sm rounded-md h-auto w-auto" v-for="tech in this.langages.techno" v-bind:key="tech" :style="'background-color: #' + tech.color">{{ tech.name }}</li>
          </ul>
        </div>
        <div class="p-2">
          <div class="flex-col">
          <div class="flex flex-row space-x-14 justify-center mt-5 text-[#333333] dark:text-[#FFFFFF]">
            <div class="flex-row text-7xl">+6
              <div class="text-base">Projets</div>
            </div>
            <div class="flex-row text-7xl">+2
              <div class="text-base">Expériences</div>
            </div>
          </div>
          <div class="flex flex-row gap-8 justify-center text-[#333333]">
            <button class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mt-10"><a class="bg-transparent" href="/files/cv.pdf" download="cv.pdf">CV</a></button>
            <button class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mt-10"><a class="bg-transparent" href="/files/Certification_Anssi.pdf" download="Certification_Anssi.pdf">Certification ANSSI</a></button>
          </div>
          </div>
        </div>
      </div>
    </section>
    <section id="bts" class="max-w-screen-lg mx-auto bg-white dark:bg-[#333333]">
      <div class="max-w-screen-lg mx-auto p-10 mt-20 text-[#333333] dark:text-[#FFFFFF]">
        <h2 class="text-3xl font-bold text-center mx-auto">BTS SIO - SLAM</h2>
        <div class="text-left p-3">
          <p class="mt-5">Le BTS Services informatique aux Organisations est un diplôme reconnu par l’état de niveau Bac+2. Il remplace depuis septembre 2011 l’ancien BTS informatique de Gestion (BTS IG). En effet, cette nouvelle formule répond aux attentes de la profession en matière de qualification. Le programme a évolué en fonction de la place et du rôle des TIC (Technologies d’Information Communication) et propose deux spécialités bien distinctes : le BTS SIO SISR et le BTS SIO SLAM.</p>
          <p class="mt-5">L’option Solutions Logicielles et Applications Métiers forme des spécialistes des logiciels (rédaction d’un cahier des charges, formulation des besoins et spécifications, développement, intégration au sein de la société). Les techniciens supérieurs en informatique option slam, sont préparés à plusieurs métiers en voici quelques uns:</p>
          <ul class="mt-5">
            <li>- Développeur d’applications informatiques</li>
            <li>- Développeur informatique</li>
            <li>- Programmeur d’applications</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="stages" class="max-w-screen-lg mx-auto bg-white dark:bg-[#333333]">
      <div class="max-w-screen-lg mx-auto p-5 mt-20 text-[#333333] dark:text-[#FFFFFF]">
        <h2 class="text-3xl font-bold text-center mx-auto">Stage</h2>
        <p class="p-5 w-auto mx-auto mt-10">Durant le BTS SIO, nous devons effectuer 2 stages en entreprise pour une durée totale de 10 semaines permettant de valider notre BTS.</p>
        <div class="grid m-auto grid-cols-1 p-5 gap-5 rounded-lg">
          <div class="">
            <h2 class="text-xl p-5 font-bold mx-auto">Les Jardins de Brogieux</h2>
            <img class="w-40 rounded-2xl mx-auto p-3" src="@/assets/jardins_brogieux.jpeg" alt="image du chateau de Brogieux">
            <div>
              <h3 class="mt-5 text-left"><span class="font-bold text-xl">Date:</span> <br>24 Mai au 25 Juin 2021</h3>
              <h3 class="mt-5 text-left font-bold text-xl">Description:</h3>
              <p class="text-left mb-10">Les Jardins de Brogieux est un ensemble de jardins à visiter ainsi qu'une ancienne maison forte et toutes l'histoire liés à cela.</p>
            </div>
            <router-link to="/stage" class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mx-auto">En savoir plus</router-link>
          </div>
          <div class="w-60 mx-auto md:w-96 lg:w-96 h-px bg-[#A0A0A0] mt-8 rounded-lg"></div>
          <div class="">
            <h2 class="text-xl p-5 font-bold mx-auto">Web At Heart</h2>
            <img class="w-40 rounded-2xl mx-auto p-3" src="@/assets/web-at-heart.png" alt="Image de Web At Heart">
            <div>
              <h3 class="mt-5 text-left"><span class="font-bold text-xl">Date:</span> <br>3 Janvier au 4 Février 2022</h3>
              <h3 class="mt-5 text-left font-bold text-xl">Description:</h3>
              <p class="text-left">Web at Heart est une agence de communication Web et digitale 360° spécialisée dans le design et la création de site web sur mesure.</p>
              <h3 class="mt-5 text-left font-bold text-xl">Projets réalisés:</h3>
              <p class="text-left mb-10">Kathekon & Vm-Automation</p>
            </div>
            <router-link to="/projects" class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mx-auto mt-10">En savoir plus</router-link>
          </div>
        </div>
      </div>
    </section>
    <section id="realisation" class="max-w-screen-lg mx-auto bg-white dark:bg-[#333333]">
      <div class="max-w-screen-lg mx-auto px-3 py-16 mt-20 grid gap-12 text-[#333333] dark:text-[#FFFFFF]">
        <h2 class="text-3xl font-bold text-center mx-auto">Mes projets</h2>
        <div class="flex flex-col gap-20" >
          <div v-for="row in Realisation" v-bind:key="row" class="gap-16">
            <Projects :data="row" />
          </div>
        </div>
        <div>
          <router-link to="/projects" class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mx-auto">En voir plus</router-link>
        </div>
      </div>
    </section>
    <section id="veilles" class="max-w-screen-lg mx-auto bg-white dark:bg-[#333333]">
      <div class="max-w-screen-lg mx-auto p-10 grid gap-12 text-[#333333] dark:text-[#FFFFFF]">
        <h2 class="text-3xl font-bold text-center mx-auto">Veilles</h2>
        <p class="text-left p-6">Une veille est une activité consistant à s'informer sur les dernières avancées et informations d'un secteur donné.<br>
          Durant ce BTS SIO, nous avons dû mettre en place une veille technologique :<br>
          - Une veille technologique,quant à elle, est le fait de s'informé sur les différentes innovations et technologies disponibles sur un marché en rapport avec les TIC (Technologies de l'Information et de la Communication).<br><br>
          Faire une veille est très important car il est necessaire d'être à l'affût des dernières nouveautées, et l'informatique étant un domaine qui évolue sans cesse. Cela permet de ne pas avoir des outils obsolètes<br>
          Pour ma veille technologique, j'ai utilisé l'application web Feedly, qui permet d'avoir une veille en fonction d'un sujet ou des sites web que l'on suit.<br><br>
          Pour ma part je suis différents site web et blog: Frandroid, Toms Guide, Numerama, Clubic, 01Net.<br>
          J'utilise également un site web du nom de Hebdoo qui permet de faire un résumer de la semaine sur le domaine des nouvelles technologies.<br>
          Mon sujet de veille technologique est la suivante:</p>
          <span class="text-2xl text-[#DA5759] font-bold mx-auto">L'analyse et le traitement des données à caractère personnel.</span>
          <router-link to="/veilles" class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-auto h-auto tracking-widest mx-auto">Voir ma veille</router-link>
      </div>
    </section>
    <section id="contact" class="max-w-screen-lg mx-auto bg-white dark:bg-[#333333]">
      <div class="max-w-screen-lg mx-auto px-3 py-16 grid gap-12 text-[#333333] dark:text-[#FFFFFF]">
        <h2 class="text-3xl font-bold text-center mx-auto">Me contacter</h2>
        <Contact/>
      </div>
    </section>
  <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';

export default {
  props: ['data'],
  components: {
    Navbar,
    Footer,
    Projects,
    Contact,
  },
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
