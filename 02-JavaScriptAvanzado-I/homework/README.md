
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

RTA: si se declara la variable con var en la consola me muestra undedined, mientras que al momento de asiganarle un valor directamente en la consola me muestra el valor asignado 

```javascript
x = 1;
1;
var a = 5;
undefined;
var b = 10;
undefined;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
10
// 8 me hizo falta un 8 porque c() contiene a f() y aqui b = a por esto se refleja dos veces 8 en la consola 
8
9
undefined;
console.log(b);
10;
console.log(x);
1;

```

```javascript
console.log(bar);
1 // RTa la respuesta correcta es: bar is not definedent list
console.log(baz);
undefined // RTa la respuesta correcta es: baz is not defined
foo();
"Hola!" // RTa la respuesta correcta es: foo is not defined
function foo() { console.log('Hola!'); }
undefined
var bar = 1;
undefined
baz = 2;
2

```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
"Tony"
// RTa la respuesta correcta es: "Franco" ya que se sobre escribe la variable "instructor" en el if 
```

```javascript
var instructor = "Tony";
console.log(instructor);
"Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
"Franco"
console.log(instructor);
"Franco"
```

```javascript
var instructor = "Tony";
undefined
let pm = "Franco";
undefined
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
"The Flash"
"The Reverse"
console.log(instructor);
"Tony" // RTa la respuesta correcta es: "The Flash" porque en if tambien se declara con var y por eso se sobre escribe la variable
console.log(pm);
"Franco"

```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"
2
"2" * "3"
6
4 + 5 + "px"
"9px"
"$" + 4 + 5
"$45"
"4" - 2
2
"4px" - 2
NaN
7 / 0
"infinity"
{}[0]
undefined
parseInt("09")
9
5 && 2
2
2 && 5
5
5 || 0
5
0 || 5
5
[3]+[3]-[10]

3>2>1
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
2 // solo muestra en consola este valor debido a que las demas declaciones no tienen contexto de ejecucion, mientras que dentro de la funcion de test hay una function llamada foo que returna 2 en cambio las primeras declaraciones no tienen ningun contexto.

```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
undefined // debido a que se le esta dando un valor false al argunmento de la funcion.
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());
"Aurelio De Rosa" // porque en este contexto de ejecucion el this. se refiere a prop y el fullname es la propiedad de prop.

var test = obj.prop.getFullname;

console.log(test());
"Juan Perez" // porque en este contexto de ejecucion el this. no tiene a quien referenciar y busca en el global.

```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
1
4
3

2

// Se imprime o se muestra en ese orden debido a los timeout que se le asiganan a 2 y 3 los otros 1 y 4 al no tener time aout se muestran instataneos y por contexto de ejecucion.
```
