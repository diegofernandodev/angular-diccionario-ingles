// import { TestBed } from '@angular/core/testing';

// import { DiccionarioService } from './diccionario.service';

// describe('DiccionarioService', () => {
//   let service: DiccionarioService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(DiccionarioService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiccionarioService {
  private apiUrl = 'assets/elementos.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) { }

  getElementos() {
    return this.http.get(this.apiUrl);
  }
}
