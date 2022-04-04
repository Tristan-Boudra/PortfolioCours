<template>
  <div class="w-full">
    <Navbar/>
    <section class="max-w-screen-lg mx-auto">
      <div class="px-3 py-20">
        <h2 class="text-3xl font-bold text-center mx-auto mt-3">Mes projets</h2>
        <div class="flex grid md:grid-cols-2 gap-14">
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
