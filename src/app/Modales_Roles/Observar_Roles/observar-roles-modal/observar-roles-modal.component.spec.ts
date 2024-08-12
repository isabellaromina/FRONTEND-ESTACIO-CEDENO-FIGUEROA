import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservarRolesModalComponent } from './observar-roles-modal.component';

describe('ObservarRolesModalComponent', () => {
  let component: ObservarRolesModalComponent;
  let fixture: ComponentFixture<ObservarRolesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservarRolesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservarRolesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
