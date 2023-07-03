export const name = "Gersomsim";
export const age = 35;
export const isValid = true;
export const templateSting = `Este es un string
multilinea
puede tener 
"comillas" dobles
'comillas' simples
inyectar valores ${name}
expreciones: ${1 +1}
numeros ${age}
booleans ${isValid}`;
//Type safe
/**
 * El tipado seguro impide que cometamos errores al desarrollar
 * este tipado no nos permite cambiar el tipo de dato
 */
 console.log(templateSting)