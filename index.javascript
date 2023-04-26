const plantData = [
  {
    name: 'Sunflower',
    img: 'https://via.placeholder.com/300x200.png?text=Sunflower',
    light: 'Full sun',
    water: 'Moderate'
  },
  {
    name: 'Gator Lily',
    img: 'https://via.placeholder.com/300x200.png?text=Gator+Lily',
    light: 'Part sun',
    water: 'High'
  },
  {
    name: 'Palmetto',
    img: 'https://via.placeholder.com/300x200.png?text=Palmetto',
    light: 'Full sun',
    water: 'Low'
  },
  {
    name: 'Saw Palmetto',
    img: 'https://via.placeholder.com/300x200.png?text=Saw+Palmetto',
    light: 'Part sun',
    water: 'Low'
  }
];

const plantContainer = document.getElementById('plant-container');

plantData.forEach(plant => {
  const plantDiv = document.createElement('div');
  plantDiv.classList.add('plant');
  
  const plantImg = document.createElement('img');
  plantImg.src = plant.img;
  plantDiv.appendChild(plantImg);
  
  const plantName = document.createElement('h2');
  plantName.textContent = plant.name;
  plantDiv.appendChild(plantName);
  
  const plantLight = document.createElement('p');
  plantLight.textContent = `Light: ${plant.light}`;
  plantDiv.appendChild(plantLight);
  
  const plantWater = document.createElement('p');
  plantWater.textContent = `Water: ${plant.water}`;
  plantDiv.appendChild(plantWater);
  
  plantContainer.appendChild(plantDiv);
});
