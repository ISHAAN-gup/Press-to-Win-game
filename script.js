var clicks = 0;
var trophies = 0;
var wins = 0;
var cpc = 0;
var cpccost = 250;
var tcost = 100;

document.getElementById("click-button").addEventListener("click", function() {
    clicks += cpc;
    clicks += 1;
    document.getElementById("click-count").innerText = "Times Clicked: " + clicks;
});

document.getElementById("reset-button").addEventListener("click", function() {
    clicks = 0;
    trophies = 0;
    wins = 0;
    cpc = 0;
    tcost = 100;
    cpccost = 250;
    document.getElementById("click-count").innerText = "Times Clicked: " + clicks;
    document.getElementById("trophy-counter").innerText = "Trophies: " + trophies;
    document.getElementById("win-counter").innerText = "Wins: " + wins;
});

document.getElementById("trophy-button").addEventListener("click", function() {
  if (clicks >= tcost) {
    trophies += 1;
    clicks -= tcost;
    tcost = tcost + 5
    document.getElementById("trophy-counter").innerText = "Trophies: " + trophies;
    document.getElementById("click-count").innerText = "Times Clicked: " + clicks;
    document.getElementById("trophy-button").innerText = "Buy a trophy: " + tcost + " Clicks";
    document.getElementById("trophy-button10").innerText = "Buy 10 trophies: " + (9 * tcost) + " Clicks";
  };
});
document.getElementById("trophy-button10").addEventListener("click", function() {
  if (clicks > (tcost * 9)) {
    trophies += 10;
    clicks -= (tcost * 9);
    tcost = tcost + 5
    document.getElementById("trophy-counter").innerText = "Trophies: " + trophies;
    document.getElementById("click-count").innerText = "Times Clicked: " + clicks;
    document.getElementById("trophy-button").innerText = "Buy a trophy: " + tcost + " Clicks";
    document.getElementById("trophy-button10").innerText = "Buy 10 trophies: " + (9 * tcost) + " Clicks";
  };
});
document.getElementById("win-button10").addEventListener("click", function() {
  if (trophies > 89) {
    wins += 10;
    trophies -= 90;
    document.getElementById("win-counter").innerText = "Wins: " + wins;
    document.getElementById("trophy-counter").innerText = "Trophies: " + trophies;
  };
});
document.getElementById("win-button").addEventListener("click", function() {
  if (trophies > 9) {
    wins += 1;
    trophies -= 10;
    document.getElementById("win-counter").innerText = "Wins: " + wins;
    document.getElementById("trophy-counter").innerText = "Trophies: " + trophies;
  };
});
setInterval(function() {
  clicks += wins;
  document.getElementById("click-count").innerText = "Times Clicked: " + clicks;
}, 1000);

document.getElementById("cpc-button").addEventListener("click", function() {
  if (clicks >= cpccost) {
    cpc += 1;
    clicks -= cpccost;
    cpccost = cpccost * 1.5
    document.getElementById("click-count").innerText = "Times Clicked: " + clicks;
    document.getElementById("cpc-button").innerText = "Increase CPC: " + cpccost + " Clicks/CPC: " + (cpc + 1);
  };
});