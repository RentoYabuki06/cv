// Component rendering functions

// Render hobby cards
function renderHobbies(container, hobbies) {
  if (!container) return;
  
  container.innerHTML = '';
  
  hobbies.forEach((hobby, index) => {
    const hobbyCard = document.createElement('div');
    hobbyCard.className = 'hobby-card';
    hobbyCard.style.setProperty('--animation-order', index);
    
    hobbyCard.innerHTML = `
      <div class="hobby-icon">${hobby.emoji}</div>
      <h3>${hobby.name}</h3>
    `;
    
    container.appendChild(hobbyCard);
  });
}

// Render travel cards
function renderTravels(container, travels) {
  if (!container) return;
  
  container.innerHTML = '';
  
  travels.forEach(travel => {
    const travelCard = document.createElement('div');
    travelCard.className = 'travel-card';
    
    travelCard.innerHTML = `
      <div class="travel-icon">${travel.emoji}</div>
      <div class="travel-content">
        <h3>${travel.title}</h3>
        <p class="travel-detail">${travel.detail}</p>
      </div>
    `;
    
    container.appendChild(travelCard);
  });
}

// Render skill items
function renderSkills(container, skills) {
  if (!container) return;
  
  container.innerHTML = '';
  
  skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    
    skillItem.innerHTML = `
      <svg viewBox="0 0 100 100">
        <circle class="skill-circle" cx="50" cy="50" r="45" 
                style="--value: ${skill.value}" stroke="${skill.color}"/>
        <text x="50" y="50" text-anchor="middle" dy=".3em">${skill.name}</text>
      </svg>
    `;
    
    container.appendChild(skillItem);
  });
}