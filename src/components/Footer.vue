<template>
  <div class="w-full mt-10">
    <footer class="max-w-screen-lg mx-auto">
        <div class="flex space-x-8 mx-auto justify-center">
          <img class="flex-row w-20 h-1 md:w-52 lg:w-full mt-5 rounded-full" src="@/assets/Line.png" alt="Ligne">
            <img src="@/assets/Tristan_light.svg" class="px-4 py-1" alt="logo">
          <img class="flex-row w-20 h-1 md:w-52 lg:w-full mt-5 rounded-full" src="@/assets/Line.png" alt="Ligne">
        </div>
        <div class="flex space-x-8 mx-auto justify-center dark:hidden">
          <img class="flex-row w-20 h-1 md:w-52 lg:w-full mt-5 rounded-full" src="@/assets/Line_dark.png" alt="Ligne">
            <img src="@/assets/Tristan_dark.svg" class="px-4 py-1" alt="logo">
          <img class="flex-row w-20 h-1 md:w-52 lg:w-full mt-5 rounded-full" src="@/assets/Line_dark.png" alt="Ligne">
        </div>
      <div class="">
        <ul class="flex flex-row mx-auto flex-wrap gap-4 justify-center p-4">
          <li><a href="https://www.linkedin.com/in/tristan-boudra-a43b6918a/"><img class="w-14 flex" src="@/assets/linkedin.png" alt="linkedin"></a></li>
          <li><a href="https://twitter.com/TristanBoudra"><img class="w-14 flex" src="@/assets/Twitter.png" alt="Twitter"></a></li>
        </ul>
      </div>
      <p class="text-[#333333] dark:text-[#FFFFFF]">© Boudra Tristan {{ copyrightDate }} | <router-link to="/mentionsLegales">Mentions Légales</router-link> | Tous droits réservés</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      copyrightDate: new Date().getFullYear(),
    };
  },
};
</script>
