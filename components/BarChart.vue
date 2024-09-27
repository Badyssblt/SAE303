<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

const props = defineProps({
  data: {
    type: Object
  }
})

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);



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
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="props.data"
  />
</template>


