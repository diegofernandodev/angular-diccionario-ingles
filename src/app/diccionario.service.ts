// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DiccionarioService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiccionarioService {
  constructor(private http: HttpClient) {}

  getElementosPorCategoria(categoria: string): Observable<any> {
    // Supongamos que tienes una API que devuelve elementos por categoría.
    // Debes ajustar la URL de la API según tu configuración.
    const apiUrl = `assets/elementos.json`;

    // Realiza una solicitud HTTP GET a la API y devuelve el resultado como un observable.
    return this.http.get(apiUrl);
  }
}
