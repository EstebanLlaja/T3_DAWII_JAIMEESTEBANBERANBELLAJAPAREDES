import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesLlajaComponent } from './personajes-llaja.component';

describe('PersonajesLlajaComponent', () => {
  let component: PersonajesLlajaComponent;
  let fixture: ComponentFixture<PersonajesLlajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesLlajaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonajesLlajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
