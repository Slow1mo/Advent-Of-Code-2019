valid = [];

for (i = 271973; i <= 785961; i++) {
    const p = i.toString();
    const ar = [...p];

    const count = {};
    ar.map(x => count[x] = count[x]+1|| 0+1);
    
    if(p.length == 6 && Object.entries(count).find(tuple => tuple[1] == 2) && p == ar.sort().join('')) {
        valid.push(p);
    }
}
console.log(valid.length)