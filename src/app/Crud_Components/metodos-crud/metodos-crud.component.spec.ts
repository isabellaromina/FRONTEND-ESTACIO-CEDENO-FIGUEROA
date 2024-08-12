import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodosCrudComponent } from './metodos-crud.component';

describe('MetodosCrudComponent', () => {
  let component: MetodosCrudComponent;
  let fixture: ComponentFixture<MetodosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetodosCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetodosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
