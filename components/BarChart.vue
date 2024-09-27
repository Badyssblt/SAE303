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
  maintainAspectRatio: false,
  animation: {
    duration: 1000,
    easing: 'easeOutBounce',
  },
  plugins: {
    legend: {
      display: true,
    },
  },
});
</script>

<template>
  <div>
    <Bar
        id="bar_chart"
        :options="chartOptions"
        :data="props.data"
    />
  </div>

</template>


