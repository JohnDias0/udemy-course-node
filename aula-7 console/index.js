const x = 10
const y = 'Oi'
const z = 1.2

console.log(x, y, z)

//interpolação - variável dentro de string do console.log 
console.log(`${y}, você é nota ${x}`)

//outra forma de interpolação com string
console.log(`%s`, y)

//impressão de script com contagem
for (let i = 0; i < 10; i++){
    console.count(`${y}, você é nota `)
}

//limpar console
setTimeout (() =>{
    console.clear()
},2000)






