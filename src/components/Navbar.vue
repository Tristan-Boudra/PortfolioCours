<template>
  <div class="max-w-screen-lg mx-auto bg-white dark:bg-[#333333]">
    <div class="">
      <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center md:h-max">
        <div class="flex items-center justify-between">
          <router-link to="/" class="">
            <img src="@/assets/Tristan_dark.svg" class="px-4 py-1 dark:hidden" alt="logo">
            <img src="@/assets/Tristan_light.svg" class="px-4 py-1" alt="logo">
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" name="button" class="text-[#DA5759]" aria-label="open menu">
              <p class="hidden">-</p>
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path></svg>
            </button>
          </div>
        </div>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col h-full mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 gap-3 text-[#333333] dark:text-[#FFFFFF]">
            <router-link to="/" class="hover:bg-[#DA5759] hover:text-[#000000] hover:transition hover:duration-200 hover:font-semibold rounded">Accueil</router-link>
            <li><a class="hover:bg-[#DA5759] hover:text-[#000000] hover:transition hover:duration-200 hover:font-semibold rounded" href="/#bts">BTS SIO</a></li>
            <li><a class="hover:bg-[#DA5759] hover:text-[#000000] hover:transition hover:duration-200 hover:font-semibold rounded" href="/#stages">Stages</a></li>
            <router-link to="/projects" class="hover:bg-[#DA5759] hover:text-[#000000] hover:transition hover:duration-200 hover:font-semibold rounded">Projets</router-link>
            <router-link to="/veilles" class="hover:bg-[#DA5759] hover:text-[#000000] hover:transition hover:duration-200 hover:font-semibold rounded">Veilles</router-link>
            <li><a class="hover:bg-[#DA5759] hover:text-[#000000] hover:transition hover:duration-200 hover:font-semibold rounded" href="/#contact">Contact</a></li>
          </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      showMenu: false,
    };
  },
};
</script>
