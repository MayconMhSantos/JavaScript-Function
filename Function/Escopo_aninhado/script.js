let a = 10;  // Escopo 1

function mult(x,y) {
    let a = x * y;

    if(a > 10) {

        let a = 0;

        a++;

        console.log(a); // Escopo 2

    }

    console.log(a); // Escopo 3

}

console.log(a);

mult(3,7);