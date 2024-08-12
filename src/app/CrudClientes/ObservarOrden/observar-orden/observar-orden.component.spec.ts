import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservarOrdenComponent } from './observar-orden.component';

describe('ObservarOrdenComponent', () => {
  let component: ObservarOrdenComponent;
  let fixture: ComponentFixture<ObservarOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservarOrdenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
