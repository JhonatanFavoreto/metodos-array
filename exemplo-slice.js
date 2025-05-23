let playlist = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz', 'Reggae', 'Classical', 'Indie'];

console.log(`Parte da playlist (índices 2 a 5): ${playlist.slice(2, 6)}`); // ['Pop', 'Rock', 'Jazz', 'Reggae']
console.log(`Parte da playlist (indices 0 a 3): ${playlist.slice(0, 4)}`); // ['Funk', 'Hip-Hop', 'Pop', 'Rock']

console.log(`Parte da playlist (indice 3): ${playlist.slice(3, 4)}`); // ['Rock']