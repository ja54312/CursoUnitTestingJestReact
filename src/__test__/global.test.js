//Funcion test debe recibir dos parametros texto de lo que va a hacer y funcion anonima con lo que va a evaluar
const text = 'Hola Mundo'
const fruits = ["manzana","melon","banana"]

test('Debe contener un texto',()=>{
    expect(text).toMatch(/Mundo/)
})

test('Tenemos una banana?',()=>{
    expect(fruits).toContain('banana')
})

test('Mayor que',()=>{
    expect(10).toBeGreaterThan(9)
})

test('Verdadero',()=>{
    expect(true).toBeTruthy()
})

const reverseString = (str,callback) => {
    callback(str.split("").reverse().join(""))
}

test('Probar un Callback',()=>{
    reverseString('Hola',(str)=>{
        expect(str).toBe('aloH')
    })
})