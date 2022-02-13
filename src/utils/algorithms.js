
function isMutant(DNA) {
    var size = DNA.length
    /* se debe validar el tamaño de la matriz ya
    ** ya que solo puede ser mutante si tiene una secuencia de 4 caracteres
    ** esto no es posible en matrices NxN con N<4
    */
    if (size < 4){
        return false
    }
    var mutationSecuence = 0

    //se validan las filas
    for( let i =0 ; i <DNA.length; i++){
        mutationSecuence += howManyMutantSequence(DNA[i])
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
        var col = DNA.map((row) => { return row[i] })
        mutationSecuence += howManyMutantSequence(col)
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
        mutationSecuence += howManyMutantSequence(diag)
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
        mutationSecuence += howManyMutantSequence(diag)
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
    var length = array.length
    var temp
    var returnArray = []
    for (var k = 0; k <= 2 * length; ++k) {
        temp = []
        for (var y = length - 1; y >= 0; --y) {
            var x = k - (bottomToTop ? length - y : y)
            if (x >= 0 && x < length) {
                temp.push(array[y][x])
            }
        }
        if(temp.length > 0) {
            returnArray.push(temp)
        }
    }
    return returnArray
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

function howManyMutantSequence(sequence){
    if (sequence == null || sequence == undefined){
        return 0
    }
    if (sequence.length < 4){
        // no es una secuencia de mutante
        return 0
    } 
    var passLetter = sequence[0]
    var counterLetters = 0
    var counterSequences= 0
    for (let i = 0; i < sequence.length; i++){
        var letter = sequence[i]
        var changeL = (passLetter != letter) ? true : false
        counterLetters = changeL ? 0: counterLetters
        counterLetters += 1
        if (counterLetters == 4){
            counterLetters = 0
            counterSequences += 1
        }
        passLetter = letter
    }
    return counterSequences

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

function  stats(resultList){
    var count_mutant_dna = 0
    var count_human_dna = 0    
    for(let i = 0; i<resultList.length; i++){
        if (resultList[i].isMutant){
            count_mutant_dna ++
        } else {
            count_human_dna ++
        }
    }
    var total = count_human_dna + count_mutant_dna
    var ratio = (count_human_dna == 0 && count_mutant_dna == 0)? 0: (count_mutant_dna * 1) / total
    const obj = {
        'count_mutant_dna':count_mutant_dna,
        'count_human_dna':count_human_dna,
        'ratio': ratio
    }
    return obj
}

module.exports = {
    isMutant,
    diagonals,
    howManyMutantSequence,
    printMatrix,
    stringToArray,
    isSquare,
    containsOnlyMLetters,
    stats
}