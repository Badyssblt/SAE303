<template>
  <client-only>
    <ApexCharts type="area" :options="chartOptions" :series="series" />
  </client-only>
</template>

<script setup>
import { ref } from 'vue';
import ApexCharts from 'vue3-apexcharts';

const props = defineProps({
  title: {
    type: String,
    default: "Mon titre"
  }
})
const dates = ref([
  [2020, 16],
  [2021, 18],
  [2022, 21],
  [2023, 21],
  [2024, 29],
]);

const series = ref([{
  name: 'EDF',
  data: dates.value.map(date => date[1] * 1000000)  // Prend uniquement les valeurs
}]);

const chartOptions = ref({
  chart: {
    type: 'area',
    stacked: false,
    height: 200,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    animations: {
      enabled: true,
      easing: 'linear',
      speed: 8000,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    },

    toolbar: {
      autoSelected: 'zoom'
    },

  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  title: {
    text: props.title,
    align: 'left'
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100]
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0); // Diviser par 1,000,000 pour afficher en millions avec un suffixe "M"
      }
    },
    title: {
      text: 'Prix'
    },
  },
  xaxis: {
    type: 'year',
    categories: dates.value.map(date => date[0])  // Prend les dates
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(1); // Diviser par 1,000,000 pour afficher en millions avec un suffixe "M"
      }
    }
  }
});

onMounted(() => {
  setTimeout(() => {
    series.value[0].data = [...series.value[0].data]; // Déclenche un nouveau rendu
  }, 0); // Utiliser un délai de 0 pour forcer le redémarrage de l'animation
});
</script>

<style scoped>
/* Ajoutez votre style ici */
</style>
