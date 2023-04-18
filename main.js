// list of series
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
let serie = seriesPending.shift();
seriesWatching.push(serie);

// Print the length of both arrays
console.log(`Pending: ${seriesPending.length}`);
console.log(`Watching: ${seriesWatching.length}`);

console.log(seriesPending);
console.log(seriesWatching);
for (let i = 0; i < 4; i++) {
    seriesWatching.push(seriesPending.shift());
}
console.log('After removing all the elements from seriesPending');
console.log(`Pending: ${seriesPending.length}`);
console.log(`Watching: ${seriesWatching.length}`);

//Remove all the elements from seriesWatching
seriesWatching.splice(0, seriesWatching.length);

// We check that it has remove it
console.log(`Watching: ${seriesWatching.length}`);
