function estPair(nbr){
    if(nbr % 2 == 0) return `Pair`;
    else return `Impaire`;
};

console.log(estPair(10)); // Paire
console.log(estPair(7)); // Impaire