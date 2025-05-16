<template>
<div class="property-container">
  <img :src="prop.imageurl" alt="Property image" class="property-image">
  <div class="property-details">
    <div class="property-column">
      <ul>
        <li><strong>Address:</strong> {{ prop.address }}</li>
        <li><strong>Type:</strong> {{ prop.type }}</li>
        <li><strong>Square Footage:</strong> {{ prop.squareFootage }} sqft</li>
        <li><strong>Current Price:</strong> ${{ prop.currentPrice?.toLocaleString() }}</li>
        <li><strong>Price History:</strong> 
          <span v-for="(price, index) in prop.priceHistory" :key="index">
            ${{ price.toLocaleString() }}<span v-if="index < prop.priceHistory.length - 1">, </span>
          </span>
        </li>
        <li><strong>Price Per Sqft:</strong> ${{ prop.pricePerSqft }}</li>
        <li><strong>Crime Rate:</strong> {{ prop.crimeRate }}</li>
        <li><strong>School Ratings:</strong> {{ prop.schoolRatings }}/10</li>
      </ul>
    </div>
    <div class="property-column">
      <ul>
        <li><strong>Walkability Score:</strong> {{ prop.walkabilityScore }}/100</li>
        <li><strong>Yearly Appreciation:</strong> {{ prop.yearlyAppreciation }}</li>
        <li><strong>Rental Yield:</strong> {{ prop.rentalYield }}</li>
        <li><strong>Days on Market:</strong> {{ prop.daysOnMarket }}</li>
        <li><strong>Nearby Transit:</strong> {{ prop.nearbyTransit }}</li>
        <li><strong>Parks:</strong> 
          <span v-for="(park, index) in prop.parks" :key="index">
            {{ park }}<span v-if="index < prop.parks.length - 1">, </span>
          </span>
        </li>
        <li><strong>Hospitals:</strong> 
          <span v-for="(hospital, index) in prop.hospitals" :key="index">
            {{ hospital }}<span v-if="index < prop.hospitals.length - 1">, </span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Singleproperty',
  props: {
    prop: Object
  }
}
</script>

<style scoped>
.property-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  padding: 20px;
  transition: transform 0.3s ease;
}

.property-container:hover {
  transform: translateY(-5px);
}

.property-image {
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: contain;
  border-radius: 8px;
  margin: 0 auto 20px;
  display: block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.property-image:hover {
  transform: scale(1.02);
}

.property-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.property-column {
  width: 48%;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-size: 0.95rem;
}

li:last-child {
  border-bottom: none;
}

li strong {
  color: #2c3e50;
  font-weight: 600;
  margin-right: 5px;
}


@media (max-width: 768px) {
  .property-column {
    width: 100%;
  }
}
</style>