let saludo = "Hola"
let saludo2= "buen día"
let saludo_completo=`${saludo} Cesar, ${saludo2}`
console.log(saludo_completo)

function saleVale (word1="palabrota", word2="comida"){
    console.log(`${word1}  ${word2}`)
}

saleVale()
saleVale("palabrota2", "comida2")

console.log(`esta es la nueva forma de imprimir documentos en pantalla
de emas script 6
`);
console.log("esta era la antigua \n forma de hacerlo");

let team1 =['roberto', 'cesat', 'mariela'];
let team2 =['mishell', 'thiago'];
let todos =['lourdes','justo',...team1,...team2];
console.log(todos)


{
    var palabra="cinco";
}
{
    let adarle="ocho"
    console.log(adarle)
}

console.log(palabra)


let nombre=['veronica','mela','lilina','carola']
let edad=[23,30,33,41]

let obj={nombre,edad}

console.log(obj)


const names=[
    {name:'Oscar', age:32},
    {name:'Yesica', age:27}
];

let list0names=names.map(item2=>console.log(item2.name));

let listnames=names.map(function(item){
    console.log(item.name)
});

//promesas
const helloPromesi = ()=>{
    return new Promise((resolve, reject)=>{
        if (false){
            resolve('Hey')
        } else{
            reject('Ups!!!')
        }
    })
}

helloPromesi()
    .then(response=>console.log(response))
    .catch(error=>console.log(error))

class calculator{
    constructor(){
        this.valueA=0;
        this.valieB=0;
    }
    suma(valueA,valueB){
        this.valueA=valueA;
        this.valieB=valueB;
        return this.valueA+this.valieB;
    }
}

const calc=new calculator();
console.log(calc.suma(5,5));

//generadores

function* fibonacci() {
    let nun =0;
    yield nun;
    let nun2=1;
    yield nun2;
    let nun3;
    let i=0;
    while(i<100){
        nun3=nun+nun2;
        yield nun3
        nun=nun2
        nun2=nun3
        i++;
    }
  }

  var it = fibonacci();
  for (let x=0; x<100;x++){
    console.log(it.next().value)
  }
  
