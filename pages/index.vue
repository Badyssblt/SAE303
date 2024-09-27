<script setup >
import LineChart from "~/components/LineChart.vue";
import {ref} from "vue";

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
      data: [ 435, 362, 381],
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
</script>

<template>
  <div class="w-1/2">
    <BarChart :data="chartData"/>
  </div>
  <div class="w-1/2">
    <LineChart :data="lineData"/>
  </div>
</template>

<style scoped>

</style>