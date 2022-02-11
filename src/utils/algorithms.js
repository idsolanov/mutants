
function isMutant(DNA) {
    var size = DNA.length
    /* se debe validar el tamaño de la matriz ya
    ** ya que solo puede ser mutante si tiene una secuencia de 4 caracteres
    ** esto no es posible en matrices NxN con N<4
    */
    if (size < 4){
        return false
    }

    if(!isSquare(DNA)){
        return false
    }

    var mutationSecuence = 0
    //se validan las filas
    for( let i =0 ; i <DNA.length; i++){
        mutationSecuence += howManyMutantSecuence(stringToArray(DNA[i]))
        if(mutationSecuence>=2){
            break
        }
    }
    //verifico luego de validar las filas ya que es posible que ya se haya detectado la condicion
    if(mutationSecuence>=2){
        return true
    }
    //se validan las columnas
    for( let i =0 ; i <DNA.length; i++){
        var col = DNA.map(function(value,index) { return value[i]; });
        mutationSecuence += howManyMutantSecuence(col)
        if(mutationSecuence>=2){
            break
        }
    }
    //verifico luego de validar las columnas ya que es posible que ya se haya detectado la condicion
    if(mutationSecuence>=2){
        return true
    }

    //se validan las diagonales que se forman
    //de izquierda-abajo hasta derecha-arriba
    /*
    1 |2| 3           7
    4 |5| 6       =>  8 - 4
    7 |8| 9           9 - 5 - 1
                      6 - 2
      | | i           3
      |i|             
    i | |  
                    | 
                    V                 
    */
    
    var diagA = diagonals(DNA, true)
    for(let i = 0; i < diagA.length; i++){
        var diag = diagA[i]
        mutationSecuence += howManyMutantSecuence(diag)
        if(mutationSecuence>=2){
            break
        }
    }
    //verifico luego de validar las primeras diagonales ya que es posible que ya se haya detectado la condicion
    if(mutationSecuence>=2){
        return true
    }

    //se validan las diagonales que se forman
    //de izquierda-arriba hasta derecha-abajo
    /*
    1 |2| 3           1
    4 |5| 6       =>  4 - 2
    7 |8| 9           7 - 5 - 3
                      8 - 6
      | | i           9
      |i|
    i | | 
                | 
                V
    */ 
    var diagB = diagonals(DNA, false)
    for(let i = 0; i < diagB.length; i++){
        var diag = diagB[i]
        mutationSecuence += howManyMutantSecuence(diag)
        if(mutationSecuence>=2){
            break
        }
    }
    //verifico luego de validar las ultimas diagonales ya que es posible que ya se haya detectado la condicion
    if(mutationSecuence>=2){
        return true
    }
    return false

}

function diagonals(array, bottomToTop) {
    if(array == null || array == undefined){
        return array
    }
    if (bottomToTop == null || bottomToTop == undefined){
        bottomToTop = true
    }
    var Ylength = array.length;
    var Xlength = array[0].length;
    var length = Math.max(Xlength, Ylength);
    var temp;
    var returnArray = [];
    for (var k = 0; k <= 2 * length; ++k) {
        temp = [];
        for (var y = length - 1; y >= 0; --y) {
            var x = k - (bottomToTop ? length - y : y);
            if (x >= 0 && x < length) {
                temp.push(array[y][x]);
            }
        }
        if(temp.length > 0) {
            returnArray.push(temp);
        }
    }
    return returnArray;
}

function isSquare(matrix){
    if(matrix == null || matrix == undefined){
        return matrix
    }
    let y = matrix.length
    let square = true
    for(let i = 0; i < y; i++){
        if(matrix[i].length!=y){
            square = false
            break
        }
    }
    return square
}

function containsOnlyMLetters(matrix){
    const expected = matrix.length*matrix.length
    var counter = 0
    for(let i =0; i < matrix.length; i++){
        for(let j= 0; j < matrix[i].length; j++){
            var ascii = matrix[i][j].charCodeAt(0)
            switch(ascii){
                case 65:
                case 84:
                case 71:
                case 67:
                    counter ++
                    break;
            }
        }
    }
    if(counter == expected){
        return true
    } else {
        return false
    }
}

function stringToArray(string){
    if(string == null || string == undefined){
        return string
    }
    var len = string.length;
    var result = Array(len)
    for (i = 0; i < len; i++) {
        result[i] = string[i];
    }
    return result
}

function howManyMutantSecuence(secuence){
    if (secuence == null || secuence == undefined){
        return 0
    }
    if (secuence.length < 4){
        // no es una secuencia de mutante
        return 0
    } 
    var passLetter = secuence[0]
    var counter = new Array([0,0],[0,0],[0,0],[0,0])
    for (let i = 0; i < secuence.length; i++){
        var letter = secuence[i]
        var changeL = (passLetter != letter) ? true : false
        switch (letter) {
            case 'A':
                counter[0][0] = changeL ? 0: counter[0][0]
                counter[0][0] += 1
                if (counter[0][0]==4){
                    counter[0][0] = 0
                    counter[0][1] += 1
                }
                break;
            case 'T':
                counter[1][0] = changeL ? 0 : counter[1][0]
                counter[1][0] += 1
                if (counter[1][0]==4){
                    counter[1][0] = 0
                    counter[1][1] += 1
                }
                break;
            case 'G':
                counter[2][0] = changeL ? 0 : counter[2][0]
                counter[2][0] += 1
                if (counter[2][0]==4){
                    counter[2][0] = 0
                    counter[2][1] += 1
                }
                break;
            case 'C':
                counter[3][0] = changeL ? 0 : counter[3][0]
                counter[3][0] += 1
                if (counter[3][0]==4){
                    counter[3][0] = 0
                    counter[3][1] += 1
                }
                break;  
        } 
        passLetter = letter
    }

    var simpleMutantSecuence= 0
    for (let i  = 0 ; i < 4; i++){
        simpleMutantSecuence += counter[i][1]
    }

    return (simpleMutantSecuence != 0) ? simpleMutantSecuence : 0

}

function printMatrix(matrix) {
    if (matrix != null){
        string_matrix = ""
        for (let i = 0; i< matrix.length; i++){
            var s = matrix[i]
            var ss ="| "
            for(let j = 0; j<s.length; j++ ){
                ss = ss + s[j] +" | "
            }
            string_matrix = string_matrix + ss + '\n'
        }
        return string_matrix
    } else {
        return matrix
    }
    
}

module.exports = {
    isMutant,
    diagonals,
    howManyMutantSecuence,
    printMatrix,
    stringToArray,
    isSquare,
    containsOnlyMLetters
}