/*
  author : Colin Heredia Luis Antonio
  version: 1.0
  url: github --- link
  Descripcion: Esta pagina debe decir si un numero entero positivo forma parte de la famosa
  serie de fibonacci , para nosotros comprobar si existe dentro de esta secuencia debemos
  comprobar si (5* x^2 + 4) o (5 * x^2 - 4) Es un cuadrado perfecto.

  Un número cuadrado perfecto es un número que se obtiene al elevar al cuadrado cualquier 
  número natural.
  
  ejemplo seria el numero 9. Ya que 3 * 3 = 9

  Esto se puede explicar mejor en el siguiente libro.
  The Fabulous Fibonacci Numbers de Alfred S. Posamentier  (Author), Ingmar Lehmann (Author)
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // para el manejo de los datos del formulario
import Swal from 'sweetalert2' // Libreria para las alertas.

@Component({
  selector: 'app-fibo',
  templateUrl: './fibo.component.html',
  styleUrls: ['./fibo.component.css']
})
export class FiboComponent implements OnInit {
  // Nombre del formulario
  numeroForm!:FormGroup;

  /*
    Constructor inicializamos el builder que nos
    proporcionara los metodos para el control del formulario
  */
  constructor(private fb:FormBuilder) {
    /*
      Control del formulario.
      Para que lo que ingrese el usuario se correcto vamos usar el Validators
      donde verificamos que no este vacio aunque esto tambien lo verificamos en el html
      y verificar que forme parte de los numeros enteros positivos con una regex
    */
    this.numeroForm = this.fb.group({
      numero:['',Validators.compose([
        Validators.required,
        Validators.min(0),
        Validators.pattern('^(0|[1-9][0-9]*)$')
      ])]
    });
   }

  /*
    El ciclo de la pagina nos dice que el ngOnInit se ejecutra al acceder a la pagina
  */
  ngOnInit(): void {
  }

  /*
    Funcion para comprobar si el numero forma parte de la secuencia
  */
  public comprobar():void
  {
    console.log("prueba de valores");
    // obtenemos el valor del numero del formulario
    const numero:number = this.numeroForm.get('numero')?.value;
    console.log(numero);
    // declaramos las variables de X1 y X2 y obtenemos los valores de
    // (5* x^2 + 4) o (5 * x^2 - 4)
    let x1:number = 5 * Math.pow(numero,2) + 4;
    let x2:number = 5 * Math.pow(numero,2) - 4;


    // Scamos las raices de los resultados. Con esto sabremos si x1 o x2 es un cuadrado perfecto
    if( (Math.sqrt(x1)%1 === 0) || (Math.sqrt(x2)%1 === 0))
    {
      // si se cumple entonces es parte de la secuencia Fibonacci
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Es un numero de Fibonacci!',
        showConfirmButton: false,
        timer: 1200
      })
    }else{
      // si no cumple entonces no es parte de la secuancia}
      Swal.fire({//Declaramos un objeto con las opciones para desplear un modal
        position: 'center',
        title: 'No pertenece a serie de Fibonacci',
        text: 'Intenta con otro numero',
        icon: 'error',
        showConfirmButton: false,
        timer: 1800
      })
    }
  }
}
