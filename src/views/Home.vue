<template>
  <Navbar/>
  <div class="flex flex-row gap-4 mt-20">
    <div class="w-2/5">
      <div class="gap-4 text-[#FFFFFF] mt-20 mx-auto">
        <div class="w-15 text-8xl pb-10">Boudra<br>Tristan</div>
        <div class="pb-10 mt-10 text-left w-72 m-auto">Hello !<br>Je suis actuellement étudiant en développement web.</div>
        <div class="space-x-14 mt-10 flex items-center">
          <button class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest flex-row ml-52" href="#">Commencer</button>
          <button class="border-2 border-white p-2 rounded-lg text-[#FFFFFF] font-bold text-center h-14 tracking-widest flex-row" href="#">Voir mes projets
            <img class="m-auto mt-1 flex" src="@/assets/Arrow.png" alt="flèche pour voir mes projets">
          </button>
        </div>
      </div>
    </div>
    <div class="w-3/5 flex-row">
      <img class="mx-auto rounded-3xl mt-20" src="@/assets/Tristan.png" alt="">
    </div>
  </div>
  <div class="flex text-[#FFFFFF] gap-4 mt-20">
    <div class="flex-row w-2/5 text-left w-30 ml-20">J’ai réalisé un BTS SIO en 2 ans à l’Institut Supérieur de Saint-Denis à Annonay.
    Durant cette formation, j’ai décidé de me spécialisé dans le développement avec l’option SLAM. Avec mes projets de cours, mes stages,
    j’ai pu apprendre HTML, CSS, TailwindCSS, JavaScript, VueJS, PHP, MySQL, C#.</div>
    <div class="w-72 ml-56">
      <div class="">
      <div class="flex flex-row space-x-14">
        <div class="flex-row text-7xl">+7
          <div class="text-base">Projets</div>
        </div>
        <div class="flex-row text-7xl">+2<span class="text-base"> ans</span>
          <div class="text-base">Expériences</div>
        </div>
      </div>
      <button class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-14 tracking-widest mt-10">CV</button>
      </div>
    </div>
  </div>
    <section class="py-16">
      <div class="max-w-screen-lg mx-auto px-3 grid gap-12">
        <h2 class="text-3xl font-bold text-center mx-auto">Me contacter</h2>
        <div class="rounded-xl p-12 grid md:flex gap-8">
          <div class="w-max">
          </div>
          <form action="" class="grid md:grid-cols-2 gap-4 grow text-left font-semibold">
            <div class="grid gap-2">
              <label for="name">Nom :</label>
              <input class="px-2 py-1 border-2 rounded-lg border-[#DA5759]" type="text" id="name" name="name" autocomplete="name">
            </div>
            <div class="grid gap-2">
              <label for="name">Prénom :</label>
              <input class="px-2 py-1 border-2 rounded-lg border-[#DA5759]" type="text" id="name" name="name" autocomplete="name">
            </div>
            <div class="grid gap-2">
              <label for="email">Email :</label>
              <input class="px-2 py-1 border-2 rounded-lg border-[#DA5759]" type="text" id="email" name="email" autocomplete="email">
            </div>
            <div class="grid md:col-span-2 ">
              <label for="message">Message :</label>
              <textarea class="px-2 py-1 border-2 rounded-lg border-[#DA5759] h-32" name="message" id="message"></textarea>
            </div>
            <button class="md:col-span-2 ml-auto px-5 py-2 bg-[#DA5759] shadow-md text-white rounded-xl flex items-center w-fit"><span class="text-[#000000] bg-[#DA5759] font-bold tracking-widest">Envoyer</span></button>
          </form>
        </div>
      </div>
    </section>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Navbar, Footer },
};
</script>
