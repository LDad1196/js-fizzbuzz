const item = document.querySelector('ul')


for (let z = 1; z <= 100; z++) {
    
    let valore = z;

    if(z % 3 == 0) {
        valore =  `fizz`
    }

    else if (z % 5 == 0) {
        valore =  `buzz`
    } 

    else {
        valore = z
    }
    
    item.innerHTML = item.innerHTML + `<li>${valore}</li>`;

}