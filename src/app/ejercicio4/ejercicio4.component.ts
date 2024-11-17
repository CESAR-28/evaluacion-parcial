import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  limite: number = 0;
  resultado: string = '';

  esPerfecto(num: number): boolean {
    let suma = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) suma += i;
    }
    return suma === num;
  }

  verificarNumerosPerfectos(): void {
    let numerosPerfectos: string = '';
    for (let i = 1; i <= this.limite; i++) {
      if (this.esPerfecto(i)) numerosPerfectos += `${i} es perfecto\n`;
    }
    this.resultado = numerosPerfectos || 'No hay números perfectos en el rango.';
  }
}
