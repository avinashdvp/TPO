import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalsalesVolumeComponent } from './incrementalsales-volume.component';

describe('IncrementalsalesVolumeComponent', () => {
  let component: IncrementalsalesVolumeComponent;
  let fixture: ComponentFixture<IncrementalsalesVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementalsalesVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementalsalesVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
