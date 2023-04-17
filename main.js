let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];

// Add a new string value at the end of the array
seriesPending.push('Gossip Girl');

// loop for 

for (let i = 0; i < seriesPending.length; i++) {
    console.log(`Serie ${i}: ${seriesPending[i]}`);

    if (seriesPending[i] === 'Boolean 99') {
        console.log('Found it!');
    }
}

// Declare an empty array
let seriesWatching= [];

//Remove the firts element and add it to the new array
const serie = seriesPending.shift();
seriesWatching.push(serie);

// Print the length of both arrays
console.log(`Pending: ${seriesPending.length}`);
console.log(`Watching: ${seriesWatching.length}`);