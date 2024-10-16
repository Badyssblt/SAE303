<script setup >

</script>

<template>
  <div class="z-50 fixed w-full px-24 mt-4" style="z-index: 100">
    <header class="w-full bg-white px-12 py-6 rounded-xl shadow">
      <nav>
        <ul class="flex justify-between items-center w-full">
          <li>
            <NuxtLink to="/" class="text-black font-bold text-xl">Energy</NuxtLink>
          </li>

          <li>
            <div class="flex gap-8">
              <NuxtLink to="/#contact" class="text-black">Nous contacter</NuxtLink>
              <NuxtLink to="/#consommation" class="text-black">La consommation</NuxtLink>
              <NuxtLink to="/#impact" class="text-black">Impact</NuxtLink>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  </div>

</template>

<style scoped>

</style>