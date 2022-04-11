<template>
  <div class="w-full dark:bg-[#333333]">
    <Navbar/>
    <section class="max-w-screen-lg mx-auto">
      <div class="px-3 py-20">
        <h2 class="text-3xl font-bold text-center mx-auto mt-3 text-[#DA5759]">L'analyse et le traitement des données à caractère personnel.</h2>
        <div class="flex grid grid-cols-1 gap-14">
          <div v-for="row in Veilles" v-bind:key="row">
            <Veille :data="row" />
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
import Veille from '@/components/Veille.vue';

export default {
  components: { Navbar, Footer, Veille },
  computed: {
    Veilles() {
      const allVeilles = this.$store.state.veilles;
      return allVeilles;
    },
  },
};
</script>
