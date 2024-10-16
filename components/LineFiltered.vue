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

      <div class="flex flex-col mt-4">
        <h2>Type d'énergie</h2>
        <div class="flex flex-wrap gap-4">
          <label for="electricite">
            <input type="checkbox" value="Electricité" id="electricite" v-model="selectedEnergies" @change="updateChart" />
            Electricité
          </label>
          <label for="gaz">
            <input type="checkbox" value="Gaz" id="gaz" v-model="selectedEnergies" @change="updateChart" />
            Gaz
          </label>
        </div>
      </div>
    </aside>
  </div>
</template>



<script setup>
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

const fullChartData = ref({
  labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'], // Années
  datasets: [
    // Consommation en kWh

    {
      label: 'Ménage - Électricité',
      data: [151, 151, 152, 156, 147, 147, 150],
      borderColor: 'red',
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      fill: false,
      yAxisID: 'y',
      typeEnergie: 'Electricité',
    },
    {
      label: 'Ménage - Gaz',
      data: [278, 275, 280, 302, 283, 253, 243],
      borderColor: 'pink',
      backgroundColor: 'rgba(255, 192, 203, 0.2)',
      fill: false,
      yAxisID: 'y',
      typeEnergie: 'Gaz',
    },
    {
      label: 'Tertiaire - Électricité',
      data: [476, 476, 458, 465, 460, 445, 423],
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.2)',
      fill: false,
      yAxisID: 'y',
      typeEnergie: 'Electricité',
    },
    {
      label: 'Tertiaire - Gaz',
      data: [77, 76, 70, 76, 75, 66, 60],
      borderColor: 'lightblue',
      backgroundColor: 'rgba(173, 216, 230, 0.2)',
      fill: false,
      yAxisID: 'y',
      typeEnergie: 'Gaz',
    },
    {
      label: 'Industrielle - Électricité',
      data: [110, 113, 110, 112, 105, 89, 84, 80],
      borderColor: 'green',
      backgroundColor: 'rgba(0, 255, 0, 0.2)',
      fill: false,
      yAxisID: 'y',
      typeEnergie: 'Electricité',
    },
    {
      label: 'Industrielle - Gaz',
      data: [111, 110, 107, 104, 88, 81, 79],
      borderColor: 'lightgreen',
      backgroundColor: 'rgba(144, 238, 144, 0.2)',
      fill: false,
      yAxisID: 'y',
      typeEnergie: 'Gaz',
    },
    {
      label: 'Hiver - Électricité',
      data: [80, 90, 85, 88, 82, 81, 84], // Sample data for winter electricity consumption
      borderColor: 'purple',
      backgroundColor: 'rgba(128, 0, 128, 0.2)',
      fill: false,
      yAxisID: 'y',
      typeEnergie: 'Electricité',
    },
    {
      label: 'Hiver - Gaz',
      data: [250, 260, 270, 280, 290, 300, 310], // Sample data for winter gas consumption
      borderColor: 'orange',
      backgroundColor: 'rgba(255, 165, 0, 0.2)',
      fill: false,
      yAxisID: 'y',
      typeEnergie: 'Gaz',
    },
    {
      label: 'Eté - Électricité',
      data: [100, 110, 115, 120, 125, 130, 135], // Sample data for summer electricity consumption
      borderColor: 'yellow',
      backgroundColor: 'rgba(255, 255, 0, 0.2)',
      fill: false,
      yAxisID: 'y',
      typeEnergie: 'Electricité',
    },
    {
      label: 'Eté - Gaz',
      data: [50, 55, 60, 65, 70, 75, 80], // Sample data for summer gas consumption
      borderColor: 'cyan',
      backgroundColor: 'rgba(0, 255, 255, 0.2)',
      fill: false,
      yAxisID: 'y',
      typeEnergie: 'Gaz',
    },
    {
      label: 'Total - Électricité',
      data: [331, 351, 352, 364, 354, 357, 369], // Sample total electricity consumption data
      borderColor: 'black',
      backgroundColor: 'rgba(128, 128, 128, 0.2)',
      fill: false,
      yAxisID: 'y',
      typeEnergie: 'Electricité',
    },
    {
      label: 'Total - Gaz',
      data: [500, 520, 530, 540, 550, 560, 570], // Sample total gas consumption data
      borderColor: 'brown',
      backgroundColor: 'rgba(139, 69, 19, 0.2)',
      fill: false,
      yAxisID: 'y',
      typeEnergie: 'Gaz',
    },

    // Coût en euros
    {
      label: 'Ménage - Électricité (€)',
      data: [36600, 39000, 38700, 39600, 45400, 51100, 54000],
      borderColor: 'blue',
      backgroundColor: 'rgba(139, 0, 0, 0.2)',
      fill: false,
      yAxisID: 'y1',  // Associé à l'axe des euros
      typeEnergie: 'Electricité',
    },
    {
      label: 'Ménage - Gaz (€)',
      data: [6100, 5800, 5700, 6500, 16300, 9300, 10200],
      borderColor: 'lightpink',
      backgroundColor: 'rgba(255, 182, 193, 0.2)',
      fill: false,
      yAxisID: 'y1',
      typeEnergie: 'Gaz',
    },
    {
      label: 'Tertiaire - Électricité (€)',
      data: [12685, 12579, 12881, 13208, 15332, 16953, 17823],
      borderColor: 'blue',
      backgroundColor: 'rgba(139, 0, 0, 0.2)',
      fill: false,
      yAxisID: 'y1',  // Associé à l'axe des euros
      typeEnergie: 'Electricité',
    },
    {
      label: 'Tertiaire - Gaz (€)',
      data: [7700, 7600, 7000, 7600, 7500, 6600, 7000],
      borderColor: 'lightpink',
      backgroundColor: 'rgba(255, 182, 193, 0.2)',
      fill: false,
      yAxisID: 'y1',
      typeEnergie: 'Gaz',
    },
    {
      label: 'Industrielle - Électricité (€)',
      data: [110600, 113500, 110100, 112100, 105600, 89400, 84000],
      borderColor: 'blue',
      backgroundColor: 'rgba(139, 0, 0, 0.2)',
      fill: false,
      yAxisID: 'y1',  // Associé à l'axe des euros
      typeEnergie: 'Electricité',
    },
    {
      label: 'Industrielle - Gaz (€)',
      data: [111000, 110000, 107000, 104000, 88000, 81000, 79000],
      borderColor: 'lightpink',
      backgroundColor: 'rgba(255, 182, 193, 0.2)',
      fill: false,
      yAxisID: 'y1',
      typeEnergie: 'Gaz',
    },

    // Ajoute d'autres secteurs et types d'énergie selon besoin
  ],
});

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      mode: 'nearest', // Afficher la tooltip pour l'élément le plus proche
      intersect: true, // Ne montre la tooltip que pour un seul point
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
        text: 'Consommation (kWh)',
      },
      beginAtZero: true,
    },
    y1: {
      title: {
        display: true,
        text: 'Coût (€)',
      },
      position: 'right', // Positionner l'axe des coûts à droite
      beginAtZero: true,
      grid: {
        drawOnChartArea: false, // Ne pas superposer les grilles
      },
    },
  },
});

const selectedYears = ref(['2018', '2019', '2020', '2021', '2022', '2023']);
const selectedSectors = ref(['Ménage', 'Tertiaire', 'Industrielle', 'Hiver', 'Eté', 'Total']);
const selectedEnergies = ref(['Electricité']);

const filteredData = computed(() => {
  const selectedYearIndexes = fullChartData.value.labels
      .map((year, index) => (selectedYears.value.includes(year) ? index : null))
      .filter(index => index !== null);

  return {
    labels: fullChartData.value.labels.filter((year, index) => selectedYearIndexes.includes(index)),
    datasets: fullChartData.value.datasets
        .filter(dataset => selectedSectors.value.includes(dataset.label.split(' - ')[0])) // Filtrage par secteur
        .filter(dataset => selectedEnergies.value.includes(dataset.typeEnergie)) // Filtrage par type d'énergie
        .map(dataset => {
          return {
            ...dataset,
            data: dataset.data.filter((_, index) => selectedYearIndexes.includes(index)),
          };
        }),
  };
});

const updateChart = () => {
  // Vide, la réactivité de Vue prend en charge les changements
};
</script>



