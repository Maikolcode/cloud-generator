import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudGeneratorComponent } from './cloud-generator.component';

describe('CloudGeneratorComponent', () => {
  let component: CloudGeneratorComponent;
  let fixture: ComponentFixture<CloudGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
