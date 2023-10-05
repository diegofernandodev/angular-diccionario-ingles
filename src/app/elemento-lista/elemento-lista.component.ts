import { Component, OnInit } from '@angular/core';
import { DiccionarioService } from '../diccionario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-elemento-lista',
  templateUrl: './elemento-lista.component.html',
  styleUrls: ['./elemento-lista.component.css']
})
export class ElementoListaComponent implements OnInit {
  elementos: any[] = [];
  categoria: string = '';

  constructor(
    private diccionarioService: DiccionarioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.categoria = data['categoria'];
      this.diccionarioService.getElementosPorCategoria(this.categoria).subscribe((data: any) => {
        this.elementos = data[this.categoria];
      });
    });
  }

  reproducirAudio(texto: string) {
    // Utilizar ResponsiveVoice para convertir texto en audio y reproducirlo
    responsiveVoice.speak(texto, "US English Female",{volume: 1},);
  }
}
