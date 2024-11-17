import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  resultado: string = '';

  calcularSumaDigitos(): void {
    let sumas: string = '';

    for (let i = 23; i <= 99; i++) {
      const suma = Math.floor(i / 10) + (i % 10);
      sumas += `La suma de los dígitos de ${i} es ${suma}\n`;
    }
    
    this.resultado = sumas;
  }
}
