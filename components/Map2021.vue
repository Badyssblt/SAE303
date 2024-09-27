<script setup>
// Charger le script Flourish lorsque le composant est monté
import { onMounted } from 'vue';

onMounted(() => {
  const flourishScript = document.createElement('script');
  flourishScript.src = 'https://public.flourish.studio/resources/embed.js';
  flourishScript.async = true;
  document.body.appendChild(flourishScript);
});
</script>

<template>
  <div class="my-8 flex flex-col items-center">
    <p class="font-bold">Consommation en Twh(terra-watt/heure) par région en 2021</p>
    <!-- Div pour la visualisation Flourish -->
    <div class="flourish-embed flourish-map" data-src="visualisation/19579487"></div>
  </div>
</template>

<style scoped>
.flourish-embed {
  width: 600px;
  height: 400px; /* Assurez-vous que la hauteur est définie pour éviter les problèmes d'affichage */
}
</style>
