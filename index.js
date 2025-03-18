const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce() to calculate total
const totalBatteries = batteryBatches.reduce((total, batch) => {
  return total + batch;
}, 0);

// Check the result in console (optional)
console.log(totalBatteries); // Should log 31

// Export if needed for tests:
if (typeof module !== 'undefined') {
  module.exports = { batteryBatches, totalBatteries };
}


// Code your solution here
