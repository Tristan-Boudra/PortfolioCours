<template>
  <header class="p-4 fixed inset-x-0 z-20 top-0">
    <div class="max-w-screen-lg mx-auto">
      <nav class="flex justify-between">
        <img src="@/assets/Tristan.svg" class="px-4 py-1">
        <ul>
          <li class="flex gap-4">
            <router-link to="/" class="px-4 py-2">Accueil</router-link>
            <router-link to="/" class="px-4 py-2">A propos de moi</router-link>
            <router-link to="/" class="px-4 py-2">Mes projets</router-link>
            <router-link to="/" class="px-4 py-2">Me contacter</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
