<script setup>


const chartData = ref({
  labels: ['2018', '2020', '2021'],
  datasets: [
    {
      label: "Consommation d'énergie à l'année (en Mwh) à Bordeaux",
      data: [1485, 1349, 1442],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
});

const lineData = ref({
  labels: ['2018', '2020', '2021'],
  datasets: [
    {
      label: 'Consommation d\'énergie à l\'année (en Mwh) à Paris',
      data: [435, 362, 381],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.1,
      pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      pointBorderColor: 'rgba(255, 255, 255, 1)',
      pointBorderWidth: 2,
      pointRadius: 5,
    },
  ],
});

const currentMap = ref(2022);
const selectedYear = ref(2022);

const changeMap = (year) => {
  currentMap.value = year;
  selectedYear.value = year;
}

</script>

<template>
  <div>
    <Header />

    <div class="absolute w-full h-screen">
      <img src="/images/image1.png" alt="Description de l'image" class="absolute brightness-50 w-full h-full object-cover">
    </div>

    <div class="relative z-50 w-full h-screen flex flex-col items-center justify-center text-white">
      <h2 class="text-7xl font-bold text-center">L'Energie en France :</h2>
      <p class="text-center text-white/80 mt-6">Dans quelle mesure la crise de l’énergie en France a-t-elle affecté la consommation des différentes régions et grandes villes ?</p>
    </div>
  </div>
</template>




