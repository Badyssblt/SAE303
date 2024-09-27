<script setup>
// Charger le flourish car on ne peut pas mettre de script dans le template
onMounted(() => {
  const flourishScript = document.createElement('script');
  flourishScript.src = 'https://public.flourish.studio/resources/embed.js';
  flourishScript.async = true;
  document.body.appendChild(flourishScript);
});
</script>

<template>
  <div class="my-8 flex flex-col items-center">
    <p class="font-bold">Consommation en Twh(terra-watt/heure) par région en 2022</p>
    <div class="flourish-embed flourish-map" data-src="visualisation/19578824"></div>
  </div>
</template>

<style scoped>
.flourish-embed {
  width: 600px;
}
</style>
