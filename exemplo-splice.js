let playlist = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz', 'Hino'];
console.log(`Antes do splice: ${playlist}`);

// Removendo 2 elementos a partir do índice 2
let elementosRemovidos = playlist.splice(2, 2);
let elementosRemovidosDesafio = playlist.splice(3, 2);

console.log(`Depois do splice: ${playlist}`);
console.log(`Elementos removidos: ${elementosRemovidos}`);
console.log(`Elementos removidos do Desafio: ${elementosRemovidosDesafio}`);