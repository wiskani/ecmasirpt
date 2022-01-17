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