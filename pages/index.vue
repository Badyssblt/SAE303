<script setup>
import LineChart from "~/components/LineChart.vue";
import { ref, onMounted } from "vue";
import Map2022 from "~/components/Map2022.vue";
import Map2021 from "~/components/Map2021.vue";

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
  <div class="absolute w-full h-screen">
    <img src="/background.jpg" alt="Description de l'image" class="absolute brightness-50 w-full h-full">
  </div>
  <div class="mb-4 relative z-50 w-full h-screen flex flex-col items-center justify-center text-white">
    <h2 class="text-xl font-bold text-center">Energie en France :</h2>
    <p class="text-center">Dans quelle mesure la crise de l’énergie en France a-t-elle affecté la consommation des différentes régions et grandes villes ?</p>
  </div>
  <div class="h-screen">
    <div>
      <p class="text-xl text-center my-24">Vous le savez, la guerre en Ukraine a eu énormement de conséquence dans le monde. Mais nous allons nous concentrer uniquement sur l'énergie en France, en montrant la consommation annuelle, avant, la guerre, puis pendant la guerre.</p>
    </div>
    <div class="flex h-96">
      <LineChart :data="lineData" class="w-1/2" v-motion-slide-visible-once-left/>
      <BarChart :data="chartData" class="w-1/2" v-motion-slide-visible-once-right/>
    </div>
    <div class="h-screen flex justify-center">
      <Map2022 class="h-[300px]" v-show="currentMap === 2022" v-motion-slide-visible-once-right/>
      <Map2021 v-show="currentMap === 2021" v-motion-slide-visible-once-right/>
      <Map2020 v-show="currentMap === 2020" v-motion-slide-visible-once-right/>
      <div class="mt-8">
        <p>Changer d'année</p>
        <div class="flex flex-wrap gap-4">
          <button class="px-4 py-2 border rounded h-fit" :class="{ 'bg-green-500 text-white': selectedYear === 2022 }" @click="changeMap(2022)">2022</button>
          <button class="px-4 py-2 border rounded h-fit" :class="{ 'bg-green-500 text-white': selectedYear === 2021 }" @click="changeMap(2021)">2021</button>
          <button class="px-4 py-2 border rounded h-fit" :class="{ 'bg-green-500 text-white' : selectedYear === 2020 }" @click="changeMap(2020)">2020</button>
        </div>
      </div>

    </div>
    <div class="w-1/2 m-auto mt-4" v-motion-slide-visible-once-right>
      <ProgressLine title="Tendance du prix du kw/h en centimes" :data="progressLineData"/>
    </div>
  </div>

</template>

<style scoped>
</style>
