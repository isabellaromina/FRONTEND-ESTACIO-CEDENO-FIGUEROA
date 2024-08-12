import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRolesModalComponent } from './eliminar-roles-modal.component';

describe('EliminarRolesModalComponent', () => {
  let component: EliminarRolesModalComponent;
  let fixture: ComponentFixture<EliminarRolesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarRolesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarRolesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
