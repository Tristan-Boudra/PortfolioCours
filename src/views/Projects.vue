<template>
  <div class="w-full dark:bg-[#333333]">
    <Navbar/>
    <section class="max-w-screen-lg mx-auto">
      <div class="max-w-screen-lg mx-auto px-3 py-20 grid gap-12">
        <h2 class="text-3xl font-bold text-center mx-auto">Mes projets</h2>
        <div class="flex flex-col gap-20" >
          <div v-for="row in Realisation" v-bind:key="row" class="gap-16">
            <Projects :data="row" />
          </div>
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
  computed: {
    Realisation() {
      const allRealisation = this.$store.state.realisation;
      return allRealisation;
    },
  },
};
</script>
