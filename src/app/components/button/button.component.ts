import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `<form>
  <mat-form-field>
    <mat-label>Nombre</mat-label>
    <input matInput placeholder="Nombre">
  </mat-form-field>
  <button mat-button type="submit">Enviar</button>
</form>`
})
export class FormComponent { }