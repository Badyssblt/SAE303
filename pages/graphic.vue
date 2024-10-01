<template>
  <div class="flex min-h-screen w-full">
    <div class="flex-1">
      <Line :data="filteredData" :options="chartOptions" />
    </div>
    <aside class="border p-4 rounded">
      <h2 class="text-center font-bold">Filtre</h2>
      <div class="flex flex-col">
        <h2>Année</h2>
        <div class="flex flex-wrap gap-4">
          <label for="2018">
            <input type="checkbox" value="2018" id="2018" v-model="selectedYears" @change="updateChart" />
            2018
          </label>
          <label for="2019">
            <input type="checkbox" value="2019" id="2019" v-model="selectedYears" @change="updateChart" />
            2019
          </label>
          <label for="2020">
            <input type="checkbox" value="2020" id="2020" v-model="selectedYears" @change="updateChart" />
            2020
          </label>
          <label for="2021">
            <input type="checkbox" value="2021" id="2021" v-model="selectedYears" @change="updateChart" />
            2021
          </label>
          <label for="2022">
            <input type="checkbox" value="2022" id="2022" v-model="selectedYears" @change="updateChart" />
            2022
          </label>
          <label for="2023">
            <input type="checkbox" value="2023" id="2023" v-model="selectedYears" @change="updateChart" />
            2023
          </label>
        </div>
      </div>

      <div class="flex flex-col mt-4">
        <h2>Secteur</h2>
        <div class="flex flex-wrap gap-4">
          <label for="menage">
            <input type="checkbox" value="Ménage" id="menage" v-model="selectedSectors" @change="updateChart" />
            Ménage
          </label>
          <label for="tertiare">
            <input type="checkbox" value="Tertiaire" id="tertiare" v-model="selectedSectors" @change="updateChart" />
            Tertiaire
          </label>
          <label for="industrielle">
            <input type="checkbox" value="Industrielle" id="industrielle" v-model="selectedSectors" @change="updateChart" />
            Industrielle
          </label>
          <label for="hiver">
            <input type="checkbox" value="Hiver" id="hiver" v-model="selectedSectors" @change="updateChart" />
            Hiver
          </label>
          <label for="ete">
            <input type="checkbox" value="Eté" id="ete" v-model="selectedSectors" @change="updateChart" />
            Eté
          </label>
          <label for="total">
            <input type="checkbox" value="Total" id="total" v-model="selectedSectors" @change="updateChart" />
            Total
          </label>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
// Importation des composants nécessaires
import { ref, computed } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

// Données du graphique
const fullChartData = ref({
  labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'], // Années
  datasets: [
    {
      label: 'Ménage',
      data: [1500, 2000, 2500, 3000, 3200, 3600, 4000],
      borderColor: 'red',
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      fill: false,
    },
    {
      label: 'Tertiaire',
      data: [1300, 1800, 2200, 2600, 2900, 3100, 3400],
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.2)',
      fill: false,
    },
    {
      label: 'Industrielle',
      data: [1600, 2100, 2300, 2700, 3000, 3400, 3800],
      borderColor: 'green',
      backgroundColor: 'rgba(0, 255, 0, 0.2)',
      fill: false,
    },
    {
      label: 'Hiver',
      data: [1100, 1400, 1700, 2200, 2500, 2900, 3300],
      borderColor: 'orange',
      backgroundColor: 'rgba(255, 165, 0, 0.2)',
      fill: false,
    },
    {
      label: 'Eté',
      data: [1800, 2400, 2600, 3000, 3300, 3700, 4100],
      borderColor: 'purple',
      backgroundColor: 'rgba(128, 0, 128, 0.2)',
      fill: false,
    },
    {
      label: 'Total',
      data: [1200, 1500, 2000, 2300, 2800, 3200, 3600],
      borderColor: 'cyan',
      backgroundColor: 'rgba(0, 255, 255, 0.2)',
      fill: false,
    },
  ],
});

// Options du graphique
const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Années',
      },
    },
    y: {
      title: {
        display: true,
        text: 'kWh',
      },
      beginAtZero: true,
    },
  },
});

// Suivi des années et secteurs sélectionnés
const selectedYears = ref(['2018', '2019', '2020', '2021', '2022', '2023']);
const selectedSectors = ref(['Ménage', 'Tertiaire', 'Industrielle', 'Hiver', 'Eté', 'Total']);

// Filtrage des données en fonction des années et secteurs sélectionnés
const filteredData = computed(() => {
  // Filtrage des indices des années sélectionnées
  const selectedYearIndexes = fullChartData.value.labels.map((year, index) => {
    return selectedYears.value.includes(year) ? index : null;
  }).filter(index => index !== null);

  return {
    // Filtrer les labels des années sélectionnées
    labels: fullChartData.value.labels.filter((year, index) => selectedYearIndexes.includes(index)),
    // Filtrer les datasets des secteurs sélectionnés
    datasets: fullChartData.value.datasets
        .filter(dataset => selectedSectors.value.includes(dataset.label))
        .map(dataset => {
          return {
            ...dataset,
            data: dataset.data.filter((_, index) => selectedYearIndexes.includes(index)),
          };
        }),
  };
});

// Fonction de mise à jour
const updateChart = () => {
  // Cette fonction est appelée lorsqu'il y a un changement dans les cases à cocher
};
</script>
