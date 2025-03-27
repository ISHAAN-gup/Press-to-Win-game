var clicks = 0;
var trophies = 0;
var wins = 0;
var cpc = 0;
var cpccost = 250;
var tcost = 100;

// Load saved game state
function loadGame() {
    let savedData = localStorage.getItem("clickerGame");
    if (savedData) {
        let gameState = JSON.parse(savedData);
        clicks = gameState.clicks;
        trophies = gameState.trophies;
        wins = gameState.wins;
        cpc = gameState.cpc;
        cpccost = gameState.cpccost;
        tcost = gameState.tcost;
    }
    updateUI();
}

// Save game state
function saveGame() {
    let gameState = {
        clicks: clicks,
        trophies: trophies,
        wins: wins,
        cpc: cpc,
        cpccost: cpccost,
        tcost: tcost
    };
    localStorage.setItem("clickerGame", JSON.stringify(gameState));
}

// Update UI
function updateUI() {
    document.getElementById("click-count").innerText = "Times Clicked: " + clicks;
    document.getElementById("trophy-counter").innerText = "Trophies: " + trophies;
    document.getElementById("win-counter").innerText = "Wins: " + wins;
    document.getElementById("cpc-button").innerText = "Increase CPC: " + cpccost + " Clicks/CPC: " + (cpc + 1);
    document.getElementById("trophy-button").innerText = "Buy a trophy: " + tcost + " Clicks";
    document.getElementById("trophy-button10").innerText = "Buy 10 trophies: " + (9 * tcost) + " Clicks";
}

// Click button event
document.getElementById("click-button").addEventListener("click", function() {
    clicks += cpc;
    clicks += 1;
    updateUI();
    saveGame();
});

// Reset button event
document.getElementById("reset-button").addEventListener("click", function() {
    clicks = 0;
    trophies = 0;
    wins = 0;
    cpc = 0;
    tcost = 100;
    cpccost = 250;
    updateUI();
    localStorage.removeItem("clickerGame");
});

// Trophy purchase event
document.getElementById("trophy-button").addEventListener("click", function() {
  if (clicks >= tcost) {
    trophies += 1;
    clicks -= tcost;
    tcost += 5;
    updateUI();
    saveGame();
  };
});

document.getElementById("trophy-button10").addEventListener("click", function() {
  if (clicks >= (tcost * 9)) {
    trophies += 10;
    clicks -= (tcost * 9);
    tcost += 5;
    updateUI();
    saveGame();
  };
});

// Win purchase event
document.getElementById("win-button10").addEventListener("click", function() {
  if (trophies >= 90) {
    wins += 10;
    trophies -= 90;
    updateUI();
    saveGame();
  };
});

document.getElementById("win-button").addEventListener("click", function() {
  if (trophies >= 10) {
    wins += 1;
    trophies -= 10;
    updateUI();
    saveGame();
  };
});

// Increase CPC event
document.getElementById("cpc-button").addEventListener("click", function() {
  if (clicks >= cpccost) {
    cpc += 1;
    clicks -= cpccost;
    cpccost = Math.floor(cpccost * 1.5);
    updateUI();
    saveGame();
  };
});

// Passive income: add wins to clicks every second
setInterval(function() {
  clicks += wins;
  updateUI();
  saveGame();
}, 1000);

// Load game when page loads
loadGame();
