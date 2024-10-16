<script setup>

const config = useRuntimeConfig();

console.log(config.app.baseURL)

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

const selectedCity = ref('Paris');

const lineData = ref({
  labels: ['2018', '2020', '2021'],
  datasets: [
    {
      label: 'Consommation d\'énergie à l\'année (en GWh) à Paris',
      data: [5875, 5400, 5580],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
      tension: 0.1,
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      pointBorderColor: 'rgba(255, 255, 255, 1)',
      pointBorderWidth: 2,
      pointRadius: 5,
    },
  ],
});


const BordeauxlineData = ref({
  labels: ['2018', '2020', '2021'],
  datasets: [
    {
      label: 'Consommation d\'énergie à l\'année (en GWh) à Bordeaux',
      data: [2170, 2020, 2100],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
      tension: 0.1,
      pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      pointBorderColor: 'rgba(255, 255, 255, 1)',
      pointBorderWidth: 2,
      pointRadius: 5,
    },
  ],
});


const MarseillelineData = ref({
  labels: ['2018', '2020', '2021'],
  datasets: [
    {
      label: 'Consommation d\'énergie à l\'année (en GWh) à Marseille',
      data: [3300, 3050, 3120],
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


const pieData = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [{
    label: 'Prix moyen de l\'électricité en €/kWh',
    data: [0.1546, 0.1582, 0.1740, 0.2062, 0.2276, 0.2516],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
  }]
};


const currentMap = ref(2022);
const selectedYear = ref(2022);

const changeMap = (year) => {
  currentMap.value = year;
  selectedYear.value = year;
}

</script>

<template>
  <div class="bg-[#E7E7E7]">
    <Header />

    <div class="absolute w-full h-screen">
      <img :src="`${config.public.baseURL}/images/image1.png`" alt="Description de l'image" class="absolute brightness-50 w-full h-full object-cover">
    </div>

    <div class="relative z-50 w-full h-screen flex flex-col items-center justify-center text-white">
      <h2 class="text-7xl font-bold text-center">L'Energie en France :</h2>
      <p class="text-center text-white/80 mt-6">Dans quelle mesure la crise de l’énergie en France a-t-elle affecté la consommation des différentes régions et grandes villes ?</p>
    </div>
    <div class="px-24 mt-4 flex justify-between bg-white mx-24 rounded-xl shadow py-14">
      <h3 class="text-4xl font-bold">L'Energie</h3>
      <p class="w-1/2">L'énergie en France repose principalement sur le nucléaire, qui représente environ 70 % de la production d'électricité, complétée par des énergies renouvelables comme l'hydraulique, l'éolien et le solaire. Le pays s'efforce de réduire sa dépendance aux combustibles fossiles et d'accélérer la transition énergétique vers des sources plus durables.</p>
    </div>

    <div class="flex mx-24 justify-between gap-8 mt-12" id="consommation">
      <div class="bg-white rounded-xl shadow p-14 flex flex-col items-center gap-8 w-full" v-motion-slide-visible-once-bottom>
          <p>Consommation d'énergie par famille en moyenne</p>
          <p class="text-4xl font-bold">3 000 kWh</p>
      </div>
      <div class="bg-white rounded-xl shadow p-14 flex flex-col items-center gap-8 w-full" v-motion-slide-visible-once-bottom>
        <p>Prix du kwh d'électricité actuellement</p>
        <p class="text-4xl font-bold">0,25€</p>
      </div>
      <div class="bg-white rounded-xl shadow p-14 flex flex-col items-center gap-8 w-full" v-motion-slide-visible-once-bottom>
        <p class="text-center">Evolution du prix du kwh d'électricité par rapport à 2022</p>
        <p class="text-4xl font-bold">+10%</p>
      </div>
    </div>

    <div class="mx-24 mt-8 flex gap-8">
      <div class="w-full h-96 overflow-hidden" v-motion-slide-visible-once-left>
        <img class="object-cover w-full h-full rounded-xl shadow" src="https://www.usinenouvelle.com/mediatheque/4/2/6/000971624_1200x800_c.jpg" alt="">
      </div>
      <div class="w-full h-96 overflow-hidden">
        <img class="object-cover w-full h-full rounded-xl shadow" :src="`${config.public.baseURL}/images/eolienne.jpg`" alt="">
      </div>
      <div class="w-full h-96 overflow-hidden" v-motion-slide-visible-once-right>
      <img class="object-cover w-full h-full rounded-xl shadow" :src="`${config.public.baseURL}/images/panneau.jpg`" alt="">
    </div>


    </div>
    <div class="py-24">
      <h2 class="text-4xl font-bold text-center">La consommation dans différents secteurs</h2>
      <div class="mx-24 bg-white py-12 px-6 rounded shadow mt-24">
        <h3 class="text-2xl font-semibold">La consommation d'électricité en ville</h3>
        <div class="mt-6 flex">
          <div class="w-full">
            <LineChart :data="lineData" class="h-96" v-if="selectedCity === 'Paris'"/>
            <LineChart :data="BordeauxlineData" class="h-96" v-if="selectedCity === 'Bordeaux'"/>
            <LineChart :data="MarseillelineData" class="h-96" v-if="selectedCity === 'Marseille'"/>
          </div>

          <div class="w-full">
            <div class="flex flex-col">
              <label for="city_selected">Sélectionnez une ville</label>
              <select v-model="selectedCity" name="city_selected" id="city_selected" class="border rounded px-4 py-2 focus:outline-none">
                <option value="Paris">Paris</option>
                <option value="Bordeaux">Bordeaux</option>
                <option value="Marseille">Marseille</option>
              </select>
            </div>
          </div>
        </div>
        <p>Source: OpenData</p>

      </div>

      <div class="mx-24 bg-white py-12 px-6 rounded shadow mt-24">
        <h3 class="text-2xl font-semibold">La consommation d'électricité par région</h3>
        <div class=" mt-6">
          <Map/>
        </div>
        <p>Source: OpenData</p>
      </div>
      <div class="mx-24 bg-white py-12 px-6 rounded shadow mt-24">
        <h3 class="text-2xl font-semibold">Consommation  et coût total dans différents secteurs
          en kwh en France</h3>
        <div class="mt-6">
          <LineFiltered/>
          <p>Source: OpenData</p>
        </div>
      </div>

      <div class="flex mx-24 justify-between gap-8 mt-12">
        <div class="bg-white rounded-xl shadow p-14 flex flex-col items-center gap-8 w-full" v-motion-slide-visible-once-left>
          <p>Consommation de gaz par famille par an</p>
          <p class="text-4xl font-bold">10 882 kWh</p>
        </div>
        <div class="bg-white rounded-xl shadow p-14 flex flex-col items-center gap-8 w-full">
          <p>Prix du kwh de gaz actuellement</p>
          <p class="text-4xl font-bold">0,1106 €/kWh</p>
        </div>
        <div class="bg-white rounded-xl shadow p-14 flex flex-col items-center gap-8 w-full" v-motion-slide-visible-once-right>
          <p class="text-center">Evolution du prix du kwh d'électricité par rapport à 2022</p>
          <p class="text-4xl font-bold">+11,7%</p>
        </div>
      </div>
      <div class="w-full h-48 overflow-hidden mt-8">
        <img class="object-cover w-full h-full rounded-xl shadow" src="https://www.france-montagnes.com/sites/default/files/panorama-lac-dallos-montagne-c-florianscala.jpg" alt="">
      </div>
    </div>

    <!--  IMPACT  -->
    <div class="py-24" id="impact">
      <h2 class="text-4xl font-bold text-center">Quel Impact ?</h2>
      <div class="mx-24 bg-white py-12 px-6 rounded shadow mt-24">
        <h3 class="text-2xl font-semibold">Évolution du prix moyen de l'électricité pour un particulier en France
          de 2019 à 2024</h3>
        <div class="mt-6 flex justify-center">
          <PieChart :data="pieData"/>
          <p>Source: RTE</p>
        </div>
      </div>
      <div class="mx-24 bg-white py-12 px-6 rounded shadow mt-24">
        <h3 class="text-2xl font-semibold">Consommation quotidienne moyenne d'électricité
          en France</h3>
        <p class="text-center text-black/60 my-4">La consommation électrique moyenne par jour en France était de 1 219 178 MWh en 2023, tous secteurs confondus, selon le bilan RTE. En 2022, la consommation finale des ménages était en moyenne de 438 356 MWh par jour.</p>
        <div class="mt-6">
          <LineChart :data="chartData" class="h-96"/>
        </div>
        <p>Source: INSEE</p>
      </div>

      <!--  RESULTAT  -->
      <div class="py-24 mx-24">
        <h2 class="text-4xl font-bold text-center">Quel Résultat ?</h2>
        <div class="grid grid-cols-4 grid-rows-3 gap-4 mt-8">
          <div class=" p-6 bg-white rounded h-full" v-motion-slide-visible-once-left>
            <p class="text-center font-bold text-black/60">Consommation total en France</p>
            <p class="font-bold text-center text-3xl mt-14">445 TWH/an</p>
          </div>
          <div class="col-span-3" v-motion-slide-visible-once-top>
            <div class="w-full h-full overflow-hidden">
              <img class="object-cover w-full h-full rounded-xl shadow" src="https://www.france-montagnes.com/sites/default/files/panorama-lac-dallos-montagne-c-florianscala.jpg" alt="">
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-24 h-full overflow-hidden"v-motion-slide-visible-once-left>
              <img class="object-cover w-full h-full rounded-xl shadow" src="https://www.france-montagnes.com/sites/default/files/panorama-lac-dallos-montagne-c-florianscala.jpg" alt="">
            </div>
            <div class="bg-white p-6 flex-1 rounded flex flex-col justify-between" v-motion-slide-visible-once-right>
              <p class="font-bold text-center text-black/60 text-sm">Une augmentation de</p>
              <p class="font-bold text-2xl text-center">+10%</p>
              <p class=" text-sm font-bold text-center">Du KWH d'électricité</p>
            </div>
          </div>
          <div class="bg-white p-6 rounded col-span-2 row-span-2 flex flex-col justify-between" v-motion-slide-visible-once-bottom>
            <p class="text-3xl text-center font-bold text-black/60">Une consommation d'électricité à</p>
            <p class="text-5xl font-bold text-center">-3,2%</p>
            <p class="text-center">Par rapport à 2022</p>
          </div>
          <div class="bg-white p-6 rounded col-span-1 row-span-2 flex flex-col justify-between" v-motion-slide-visible-once-right>
            <p class="font-bold text-center text-black/60">Une augmentation de</p>
            <p class="font-bold text-2xl text-center">+11,7%</p>
            <p class="font-bold text-center">du KWH de gaz</p>
          </div>
          <div class="bg-white p-6 rounded col-span-1 flex flex-col justify-between" v-motion-slide-visible-once-left>
            <p class="text-sm text-black/60 font-bold text-center">Consommation de gaz dans tous secteurs en 2023</p>
            <p class="text-center font-bold text-xl">417 TWH/an</p>
            <p></p>
          </div>
        </div>
      </div>

    </div>
  <div class="bg-white mx-24 rounded shadow py-14 px-14" id="contact">
    <h4 class="font-semibold text-xl text-center">Nous contacter</h4>
    <p class="text-black/60 text-center">Envie de nous donner des recommandations, des conseils ou bugs ?</p>
    <form class="flex flex-col gap-4 mt-6">
      <div class="flex gap-6">
        <div class="flex flex-col flex-1">
          <label for="prenom">Prénom</label>
          <input type="text" placeholder="John" id="prenom" class="border px-4 py-2 border border-amber-400 rounded">
        </div>
        <div class="flex flex-col flex-1">
          <label for="prenom">Nom</label>
          <input type="text" placeholder="Doe" id="prenom" class="border px-4 py-2 border border-amber-400 rounded">
        </div>
      </div>
      <div class="flex flex-col flex-1">
        <label for="prenom">Sujet</label>
        <input type="text" placeholder="L'object de votre mail" id="prenom" class="border px-4 py-2 border border-amber-400 rounded">
      </div>
      <div class="flex flex-col flex-1">
        <label for="prenom">Contenu</label>
        <textarea type="text" placeholder="Contenu de votre message" id="prenom" class="border px-4 py-2 border border-amber-400 rounded"></textarea>
      </div>
      <button class="bg-amber-500 py-2 rounded text-white">Envoyer</button>
    </form>

  </div>
    <Footer/>
  </div>
</template>




