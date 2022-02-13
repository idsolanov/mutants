const { test, expect } = require('@jest/globals')
const {isMutant,printMatrix,stringToArray,howManyMutantSequence ,diagonals, isSquare,containsOnlyMLetters, stats} = require('../src/utils/algorithms')
const controller = require('../src/controllers/dnaRegisterController')
const middleware = require('../src/middleware/middleware')

test('funcion stringToArray: debe convertir un String en un arreglo de cada caracter del String', ()=>{
    const string = "QWERTYUIOPASDFGHJKLZXCVBNM"
    const array = stringToArray(string)
    expect(array).toStrictEqual(['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M',])
})

test('funcion stringToArray: cuando se pasa un null', ()=>{
    const string = null
    const array = stringToArray(string)
    expect(array).toBe(null)
})

test('funcion stringToArray: cuando se pasa un null', ()=>{
    const string = undefined
    const array = stringToArray(string)
    expect(array).toBe(undefined)
})

test('funcion printMatrix: debe imprimir una matriz de forma correcta', ()=>{
    const array = [[1,2,3],[4,5,6], [7,8,9]]
    var matrix = printMatrix(array)
    expect(matrix).toBe("| 1 | 2 | 3 | \n| 4 | 5 | 6 | \n| 7 | 8 | 9 | \n")
})

test('funcion printMatrix: cuando pasa null',()=>{
    const array = null
    var matrix =printMatrix(array)
    expect(matrix).toBe(null)
})

test('funcion printMatrix: cuando pasa undefined',()=>{
    const array = undefined
    var matrix =printMatrix(array)
    expect(matrix).toBe(undefined)
})

test('funcion howManyMutantSecuence: debe generar la cantidad de secuencias de 4 letras seguidas iguales en un arreglo',()=>{
    const secuence = ['A','C','T','A','A','C','C','C','C','A','G','G','T','T','T','T','C','T','T','C','T','T','T','T',
    'C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','A','C','T','A','A','C','C','C',
    'C','A','G','G','T','A','A','A','A','C','A','A','A','A','A','A','A','A','G','G','G','G','T','G','G','G','G']
    var mutantSecuence = howManyMutantSequence(secuence)
    expect(mutantSecuence).toBe(14)
})

test('funcion howManyMutantSecuence: cuando la cadena es de longitud menor a 4',()=>{
    const secuence = ['C','C','C']
    var mutantSecuence = howManyMutantSequence(secuence)
    expect(mutantSecuence).toBe(0)
})

test('funcion howManyMutantSecuence: cuando se le pasa null',()=>{
    const secuence = null
    var mutantSecuence = howManyMutantSequence(secuence)
    expect(mutantSecuence).toBe(0)
})

test('funcion howManyMutantSecuence: cuando se le pasa undefined',()=>{
    const secuence = undefined
    var mutantSecuence = howManyMutantSequence(secuence)
    expect(mutantSecuence).toBe(0)
})

test('funcion diagonals: devuelve las diagonales en una matriz cuadrada desde la izquierda abajo hasta arriba y al reves',()=>{
    const diag = diagonals(["123","456","789"],true)
    const result = [new Array('7'),new Array('8','4'),new Array('9','5','1'),new Array('6','2'),new Array('3')] 
    expect(diag).toStrictEqual(result)
})
test('funcion diagonals: cuando se pasa una matriz no cuadrada',()=>{
    const diag = diagonals(["123","456","789"],true)
    const result = [new Array('7'),new Array('8','4'),new Array('9','5','1'),new Array('6','2'),new Array('3')] 
    expect(diag).toStrictEqual(result)
})
test('funcion diagonals: devuelve las diagonales en una matriz cuadrada desde la izquierda abajo hasta arriba y al reves',()=>{
    const diag = diagonals(["12345","6789A","BCDEF","GHIJK","LMNÑO"],false)
    const result = [new Array('1'),new Array('6','2'),new Array('B','7','3'),new Array('G','C','8','4'),
    new Array('L','H','D','9','5'),new Array('M','I','E','A'),new Array('N','J','F'),new Array('Ñ','K'),new Array('O')] 
    expect(diag).toStrictEqual(result)
})
test('funcion diagonals: cuando pasamos null como primer parametro',()=>{
    const diag = diagonals(null,true)
    expect(diag).toStrictEqual(null)
})
test('funcion diagonals: cuando pasamos undefined como primer parametro',()=>{
    const diag = diagonals(undefined,true)
    expect(diag).toStrictEqual(undefined)
})
test('funcion diagonals: cuando pasamos undefined como segundo parametro',()=>{
    const diag = diagonals(["123","456","789"],undefined)
    const result = [new Array('7'),new Array('8','4'),new Array('9','5','1'),new Array('6','2'),new Array('3')] 
    expect(diag).toStrictEqual(result)
})
test('funcion diagonals: cuando pasamos null como segundo parametro',()=>{
    const diag = diagonals(["123","456","789"],null)
    const result = [new Array('7'),new Array('8','4'),new Array('9','5','1'),new Array('6','2'),new Array('3')] 
    expect(diag).toStrictEqual(result)
})
test('funcion diagonals: cuando pasamos undefined como segundo parametro',()=>{
    const diag = diagonals(["123","456","789"],null)
    const result = [new Array('7'),new Array('8','4'),new Array('9','5','1'),new Array('6','2'),new Array('3')] 
    expect(diag).toStrictEqual(result)
})
test('funcion isSquare: funcion que determina si una matriz es cuadrada ',()=>{
    const matrix = [[1,2,3],[4,5,6],[7,8,9]]
    var result = isSquare(matrix)
    expect(result).toBeTruthy()
    const matrix2 = [[1,2],[4,5,6],[7,8,9]]
    result = isSquare(matrix2)
    expect(result).toBeFalsy()
    const matrix3 = [[1,2,3],[4,5],[7,8,9]]
    result = isSquare(matrix3)
    expect(result).toBeFalsy()
    const matrix4 = [[1,2,3],[4,5,6],[7,8,]]
    result = isSquare(matrix4)
    expect(result).toBeFalsy()
})
test('funcion isSquare: funcion que determina si una matriz es cuadrada, argumento null y undefined',()=>{
    var result = isSquare(null)
    expect(result).toBe(null)
    result = isSquare(undefined)
    expect(result).toBe(undefined)
})
test('funcion containsOnlyMLetters: funcion que verifica que dentro de una entrada solo existan las letras A,C,T,G',()=>{
    var resutl = containsOnlyMLetters(["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"])
    expect(resutl).toBeTruthy()
})
test('funcion containsOnlyMLetters: funcion que verifica que dentro de una entrada solo existan las letras A,C,T,G',()=>{
    var resutl = containsOnlyMLetters(["ATGCGA","CAGTGk","TTATGT","AGAAGG","CCCCTA","TCACTG"])
    expect(resutl).toBeFalsy()
})
test('funcion isMutant: funcion que determina si en una matriz existen mas de 2 cadenas de 4 letras consecutivas de forma oblicua, horizontal y vertical', ()=>{
    var result = isMutant(["12","13"])
    expect(result).toBeFalsy()
    result = isMutant(["","13"])
    expect(result).toBeFalsy()
})
test('funcion isMutant: funcion que determina si en una matriz existen mas de 2 cadenas de 4 letras consecutivas de forma oblicua, horizontal y vertical', ()=>{
    var result = isMutant(["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"])
    expect(result).toBeTruthy()
    result = isMutant(["ATGCGA","CAGTGC","TTATGT","AGAAGG","CACCTA","TCACTG"])
    expect(result).toBeTruthy()
    result = isMutant(["AAAA","CCCC","TACG","TTAG"])
    expect(result).toBeTruthy()
    result = isMutant(["ACGC","ATGC","AGGC","ATTC"])
    expect(result).toBeTruthy()
    result = isMutant(["ACTGA","CACTT","TTACG","GGTAC","CATTC"])
    expect(result).toBeTruthy()
    result = isMutant(["CTGAA","TGAAT","CTATT","GATCA","ATGGG"])
    expect(result).toBeTruthy()
    result = isMutant(["TTGCAA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"])
    expect(result).toBeFalsy()
})

test('funcion stats: es una funcion que devuelve las estadisticas y conteos de los datos almacenados hasta el momento en base de datos',()=>{
    var list = []
    var result = stats(list)
    expect(result).toStrictEqual({
        count_mutant_dna: 0,
        count_human_dna: 0,
        ratio: 0
    })
    var list2 = [{
        dna : [
                "ATGCGA",
                "CAGTGC",
                "TTATGT",
                "AGAAGG",
                "CACCTA",
                "TCACTG"
        ],
        isMutant : true
    },
    {
        dna : [
                "TTGCAA",
                "CAGTGC",
                "TTATGT",
                "AGAAGG",
                "CCCCTA",
                "TCACTG"
        ],
        isMutant : false
    },
    {
        dna : [
                "ATGCGA",
                "CAGTGC",
                "TTATGT",
                "AGAAGG",
                "CACCTA",
                "TCACTG"
        ],
        isMutant : true
    },
    {
        dna : [
                "TTGCAA",
                "CAGTGC",
                "TTATGT",
                "AGAAGG",
                "CCCCTA",
                "TCACTG"
        ],
        isMutant : false
    },
    {
        dna : [
                "TTGCAA",
                "CAGTGC",
                "TTATGT",
                "AGAAGG",
                "CCCCTA",
                "TCACTG"
        ],
        isMutant : false
    },
    {
        dna : [
                "ATGCGA",
                "CAGTGC",
                "TTATGT",
                "AGAAGG",
                "CACCTA",
                "TCACTG"
        ],
        isMutant : true
    },
    {
        dna : [
                "TTGCAA",
                "CAGTGC",
                "TTATGT",
                "AGAAGG",
                "CCCCTA",
                "TCACTG"
        ],
        isMutant : false
    },
    {
        dna : [
                "ATGCGA",
                "CAGTGC",
                "TTATGT",
                "AGAAGG",
                "CACCTA",
                "TCACTG"
        ],
        isMutant : true
    },
    {
        dna : [
                "ATGCGA",
                "CAGTGC",
                "TTATGT",
                "AGAAGG",
                "CACCTA",
                "TCACTG"
        ],
        isMutant : true
}]
    var result2 = stats(list2)
    expect(result2).toStrictEqual({
        count_mutant_dna: 5,
        count_human_dna: 4,
        ratio: 0.5555555555555556
    })
})

