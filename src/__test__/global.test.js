//Funcion test debe recibir dos parametros texto de lo que va a hacer y funcion anonima con lo que va a evaluar
const text = 'Hola Mundo'
test('Debe contener un texto',()=>{
    expect(text).toMatch(/Mundo/)
})