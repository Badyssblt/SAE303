<script setup>
import { ref } from 'vue';
import { Pie } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,   // Nécessaire pour les graphiques circulaires
  CategoryScale
} from 'chart.js';

// Enregistrement des composants nécessaires pour le PieChart
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

// Propriété `data` passée en prop
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

// Options du graphique
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
});
</script>

<template>
  <div>
    <Pie
        id="pie_chart"
        :options="chartOptions"
        :data="props.data"
    />
  </div>
</template>

<style scoped>
/* Optionnel : Ajouter des styles pour le conteneur du graphique */
</style>
