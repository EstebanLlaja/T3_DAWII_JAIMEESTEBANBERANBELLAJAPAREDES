import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesLlajaComponent } from './botones-llaja.component';

describe('BotonesLlajaComponent', () => {
  let component: BotonesLlajaComponent;
  let fixture: ComponentFixture<BotonesLlajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonesLlajaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonesLlajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
