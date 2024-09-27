<script setup>
import { ref } from 'vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

const props = defineProps({
  data: {
    type: Object
  }
})

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
});
</script>

<template>
  <Line
      id="my-line-chart"
      :options="chartOptions"
      :data="props.data"
  />
</template>

<style scoped>
/* Optionnel : Ajouter des styles pour le conteneur du graphique */
</style>
