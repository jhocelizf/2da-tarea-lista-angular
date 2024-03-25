import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsStudentsComponent } from './models-students.component';

describe('ModelsStudentsComponent', () => {
  let component: ModelsStudentsComponent;
  let fixture: ComponentFixture<ModelsStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelsStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelsStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
