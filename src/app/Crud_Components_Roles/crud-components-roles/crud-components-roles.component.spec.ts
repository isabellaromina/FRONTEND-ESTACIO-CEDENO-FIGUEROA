import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComponentsRolesComponent } from './crud-components-roles.component';

describe('CrudComponentsRolesComponent', () => {
  let component: CrudComponentsRolesComponent;
  let fixture: ComponentFixture<CrudComponentsRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudComponentsRolesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudComponentsRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
