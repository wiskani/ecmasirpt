//entries
const data={
    fronted:'Oscar',
    backend:'Isabel',
    desing:'Ana'
};

const entries=Object.entries(data);
console.log(entries);
console.log(entries.length);

//valores
const data={
    fronted:'Oscar',
    backend:'Isabel',
    desing:'Ana'
};

const values=Object.values(data)
console.log(values)
console.log(values.length)

//padding
const cadena='hello'
console.log(cadena.padStart(7,'hi'))
console.log(cadena.padEnd(12,'------'))


//asyng y await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
      (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
  };
  
  const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
  };
  
  helloAsync();
  
  const anotherFunction = async () => {
    try {
      const hello = await helloWorld();
      console.log(hello);
    } catch (error) {
      console.log(error);
    }
  };
  
  anotherFunction();