<script setup>
import {ref} from 'vue';
import {Line} from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  stepped: {
    type: Boolean,
    required: false,
    default: false
  }
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  stepped: props.stepped,
  plugins: {
    legend: {
      display: true,
    },
  },
});
</script>

<template>
  <div>
    <Line
        id="line_chart"
        :options="chartOptions"
        :data="props.data"
    />
  </div>
</template>

<style scoped>
/* Optionnel : Ajouter des styles pour le conteneur du graphique */
</style>
