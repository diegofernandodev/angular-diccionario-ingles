import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoListaComponent } from './elemento-lista.component';

describe('ElementoListaComponent', () => {
  let component: ElementoListaComponent;
  let fixture: ComponentFixture<ElementoListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementoListaComponent]
    });
    fixture = TestBed.createComponent(ElementoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
