<template>
  <navbar/>
  <div class="flew flew-row gap-4">
    <div class="w-2/5">
      <div class="gap-4 text-[#FFFFFF] w-auto h-auto">
        <div class="border-solid border-2 border-sky-500 w-25 text-8xl pb-10">Boudra<br>Tristan</div>
        <div class="border-solid border-2 border-sky-500 pb-10">Hello ! Je suis actuellement étudiant en développement.</div>
        <div class="space-x-4">
          <button class="bg-[#DA5759] p-2 rounded-lg text-[#000000] font-bold text-center w-32 h-11">Commencer</button>
          <button class="border-2 border-white p-2 rounded-lg text-[#FFFFFF] font-bold text-center">Voir mes projets</button>
        </div>
      </div>
    </div>
    <div class="w-3/5">
      <div>
        <img class="w-auto h-auto" src="@/assets/Tristan.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
};
</script>
