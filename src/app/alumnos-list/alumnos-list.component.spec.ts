import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosListComponent } from './alumnos-list.component';

describe('AlumnoListComponent', () => {
  let component: AlumnosListComponent;
  let fixture: ComponentFixture<AlumnosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});