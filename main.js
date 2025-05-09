// Data for components
const hobbiesData = [
  { emoji: "🧖‍♂️", name: "Sauna" },
  { emoji: "♟️", name: "Shogi & Chess" },
  { emoji: "🏃‍♂️", name: "Triathlon" },
  { emoji: "⛺", name: "Camping" },
  { emoji: "🏂", name: "Ski & Snowboard" },
  { emoji: "🏔️", name: "Mountaineering" },
  { emoji: "🎾", name: "Tennis" },
  { emoji: "⚽", name: "Futsal" },
  { emoji: "📚", name: "Reading" }
];

const travelsData = [
  { emoji: "🚐", title: "Cross-America Road Trip", detail: "Camper Van / 1 Month" },
  { emoji: "🚲", title: "Shikoku Circuit", detail: "Bicycle Camping" },
  { emoji: "🚂", title: "Kyushu Tour", detail: "Seishun 18 Ticket" },
  { emoji: "🎒", title: "Southeast Asia", detail: "Backpacking" }
];

const skillsData = [
  { name: "Python", value: 85, color: "#007acc" },
  { name: "Next.js", value: 75, color: "#000000" },
  { name: "TypeScript", value: 70, color: "#3178c6" },
  { name: "HTML/CSS", value: 80, color: "#e34c26" },
  { name: "GitHub", value: 75, color: "#24292e" }
];

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Dark mode toggle
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', toggleTheme);
  
  // Render components
  renderHobbies(document.querySelector('.hobby-grid'), hobbiesData);
  renderTravels(document.querySelector('.travel-list'), travelsData);
  renderSkills(document.querySelector('.skill-container'), skillsData);
  
  // Initialize scroll animations
  initScrollAnimations();
});

// Dark mode toggle function
function toggleTheme() {
  document.body.dataset.theme = 
    document.body.dataset.theme === 'dark' ? 'light' : 'dark';
}

// Scroll animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
}