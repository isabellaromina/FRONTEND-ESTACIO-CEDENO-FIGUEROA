import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRolesModalComponent } from './editar-roles-modal.component';

describe('EditarRolesModalComponent', () => {
  let component: EditarRolesModalComponent;
  let fixture: ComponentFixture<EditarRolesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarRolesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarRolesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
