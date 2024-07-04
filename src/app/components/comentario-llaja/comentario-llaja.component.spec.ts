import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioLlajaComponent } from './comentario-llaja.component';

describe('ComentarioLlajaComponent', () => {
  let component: ComentarioLlajaComponent;
  let fixture: ComponentFixture<ComentarioLlajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentarioLlajaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComentarioLlajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
