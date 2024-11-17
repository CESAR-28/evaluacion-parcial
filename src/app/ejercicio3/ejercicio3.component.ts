import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {

  calificaciones: number[] = [0, 0, 0];
  resultado: string = '';

  verificarAprobacion(): void {
    const promedio = (this.calificaciones[0] + this.calificaciones[1] + this.calificaciones[2]) / 3;
    this.resultado = promedio >= 70 ? 'El alumno aprueba.' : 'El alumno reprueba.';
  }

}
