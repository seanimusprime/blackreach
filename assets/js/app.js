
const items = [
  "Towerwatch PREV-SEC anomaly: Dreamscape packet loss across Rustbelt Ward 3.",
  "Cynos feed loop detected. If you see yesterday twice, evacuate sideways.",
  "Verdance recall: Biolum planter batch V-77. Do not feed it rain.",
  "WhisperSync splice opened. Credentials not required (yet).",
];
let i=0;
function rotateTicker(){
  const el=document.getElementById('ticker');
  if(!el) return;
  el.textContent = items[i % items.length];
  i++;
}
setInterval(rotateTicker, 4200);
window.addEventListener('load', rotateTicker);
