import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastFilesComponent } from './past-files.component';

describe('PastFilesComponent', () => {
  let component: PastFilesComponent;
  let fixture: ComponentFixture<PastFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastFilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
