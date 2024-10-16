<template>
  <div class="flex w-full">
    <div ref="mapContainer" class="map-container"></div>
    <div class="w-full">
      <label for="year">
        Changer d'année
        <select name="year" id="year" class="border px-4 py-2 rounded w-full" @change="updateYear">
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script setup>
import * as d3 from 'd3';
import { onMounted, ref } from 'vue';

const franceGeoJson = ref();
const selectedYear = ref('2021'); // Année sélectionnée par défaut

// Données de consommation électrique pour plusieurs années
const electricityData = {
  '2021': [
    { region: 'Île-de-France', consumption: 71.1 },
    { region: 'Nouvelle-Aquitaine', consumption: 37.5 },
    { region: 'Auvergne-Rhône-Alpes', consumption: 55.4 },
    { region: 'Bourgogne-Franche-Comté', consumption: 15.8 },
    { region: 'Bretagne', consumption: 18.2 },
    { region: 'Centre-Val de Loire', consumption: 16.9 },
    { region: 'Corse', consumption: 1.9 },
    { region: 'Grand Est', consumption: 38.9 },
    { region: 'Hauts-de-France', consumption: 42.6 },
    { region: 'Normandie', consumption: 19.6 },
    { region: 'Occitanie', consumption: 35.1 },
    { region: 'Pays de la Loire', consumption: 26.5 },
    { region: 'Provence-Alpes-Côte d\'Azur', consumption: 32.3 }
  ],
  '2022': [
    { region: 'Île-de-France', consumption: 70.2 },
    { region: 'Nouvelle-Aquitaine', consumption: 36.8 },
    { region: 'Auvergne-Rhône-Alpes', consumption: 54.7 },
    { region: 'Bourgogne-Franche-Comté', consumption: 15.5 },
    { region: 'Bretagne', consumption: 17.8 },
    { region: 'Centre-Val de Loire', consumption: 16.5 },
    { region: 'Corse', consumption: 1.8 },
    { region: 'Grand Est', consumption: 38.4 },
    { region: 'Hauts-de-France', consumption: 41.9 },
    { region: 'Normandie', consumption: 19.2 },
    { region: 'Occitanie', consumption: 34.6 },
    { region: 'Pays de la Loire', consumption: 26.1 },
    { region: 'Provence-Alpes-Côte d\'Azur', consumption: 31.8 }
  ],
  '2023': [
    { region: 'Île-de-France', consumption: 68.8 },
    { region: 'Nouvelle-Aquitaine', consumption: 35.9 },
    { region: 'Auvergne-Rhône-Alpes', consumption: 53.7 },
    { region: 'Bourgogne-Franche-Comté', consumption: 15.3 },
    { region: 'Bretagne', consumption: 17.4 },
    { region: 'Centre-Val de Loire', consumption: 16.1 },
    { region: 'Corse', consumption: 1.7 },
    { region: 'Grand Est', consumption: 37.9 },
    { region: 'Hauts-de-France', consumption: 41.2 },
    { region: 'Normandie', consumption: 18.9 },
    { region: 'Occitanie', consumption: 34.2 },
    { region: 'Pays de la Loire', consumption: 25.8 },
    { region: 'Provence-Alpes-Côte d\'Azur', consumption: 31.2 }
  ],
  '2024': [
    { region: 'Île-de-France', consumption: 67.5 },
    { region: 'Nouvelle-Aquitaine', consumption: 35.4 },
    { region: 'Auvergne-Rhône-Alpes', consumption: 53.0 },
    { region: 'Bourgogne-Franche-Comté', consumption: 15.1 },
    { region: 'Bretagne', consumption: 17.0 },
    { region: 'Centre-Val de Loire', consumption: 15.9 },
    { region: 'Corse', consumption: 1.6 },
    { region: 'Grand Est', consumption: 37.5 },
    { region: 'Hauts-de-France', consumption: 40.6 },
    { region: 'Normandie', consumption: 18.6 },
    { region: 'Occitanie', consumption: 33.9 },
    { region: 'Pays de la Loire', consumption: 25.5 },
    { region: 'Provence-Alpes-Côte d\'Azur', consumption: 30.9 }
  ]
};


// Échelles de couleurs pour chaque année
const colorScales = {
  '2021': d3.scaleSequential(d3.interpolateReds).domain([1.9, 71.1]),
  '2022': d3.scaleSequential(d3.interpolateBlues).domain([1.8, 70.2]),
  '2023': d3.scaleSequential(d3.interpolateGreens).domain([1.7, 68.8]),
  '2024': d3.scaleSequential(d3.interpolatePurples).domain([1.6, 67.5])
};

const fetchJson = async () => {
  try {
    const response = await fetch("https://france-geojson.gregoiredavid.fr/repo/regions.geojson");
    franceGeoJson.value = await response.json();
  } catch (e) {
    console.error("Failed to fetch GeoJSON:", e);
  }
}

const createMap = (element, geoData, electricityData, colorScale) => {
  const width = 500;
  const height = 500;

  // Supprimer le SVG existant avant de redessiner la carte
  d3.select(element).selectAll('svg').remove();

  const svg = d3.select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

  const projection = d3.geoMercator()
      .center([2.213749, 46.227638])
      .scale(1800)
      .translate([width / 2, height / 2]);

  const path = d3.geoPath().projection(projection);

  const regionData = new Map(electricityData.map(d => [d.region, d.consumption]));

  const tooltip = d3.select(element)
      .append('div')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('background-color', 'white')
      .style('padding', '5px')
      .style('border', '1px solid #ccc')
      .style('border-radius', '4px')
      .style('box-shadow', '0 2px 4px rgba(0, 0, 0, 0.1)')
      .style('visibility', 'hidden');

  svg.selectAll('path')
      .data(geoData.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('fill', d => {
        const consumption = regionData.get(d.properties.nom);
        return consumption ? colorScale(consumption) : '#ccc'; // Si pas de données, on remplit avec du gris
      })
      .attr('stroke', '#000')
      .attr('stroke-width', 1)
      .on('mouseover', (event, d) => {
        const consumption = regionData.get(d.properties.nom);
        tooltip
            .style('visibility', 'visible')
            .text(`${d.properties.nom}: ${consumption ? consumption + ' MWh' : 'Données non disponibles'}`);

        d3.select(event.target)
            .attr('stroke', '#fff')
            .attr('stroke-width', 2);
      })
      .on('mousemove', (event) => {
        tooltip
            .style('top', (event.pageY + 10) + 'px')
            .style('left', (event.pageX + 10) + 'px');
      })
      .on('mouseout', (event, d) => {
        tooltip.style('visibility', 'hidden');

        d3.select(event.target)
            .attr('stroke', '#000')
            .attr('stroke-width', 1);
      });
};

const updateYear = (event) => {
  const selectedYearValue = event.target.value;
  selectedYear.value = selectedYearValue;  // Mettre à jour l'année sélectionnée
  createMap(mapContainer.value, franceGeoJson.value, electricityData[selectedYearValue], colorScales[selectedYearValue]);  // Redessiner la carte avec les nouvelles données et la nouvelle échelle de couleurs
};

const mapContainer = ref(null);

onMounted(async () => {
  await fetchJson();
  createMap(mapContainer.value, franceGeoJson.value, electricityData[selectedYear.value], colorScales[selectedYear.value]);
});
</script>

<style scoped>

.tooltip {
  pointer-events: none;
  font-size: 12px;
  color: #333;
}
</style>
