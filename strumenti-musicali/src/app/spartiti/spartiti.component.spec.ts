import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartitiComponent } from './spartiti.component';

describe('SpartitiComponent', () => {
  let component: SpartitiComponent;
  let fixture: ComponentFixture<SpartitiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpartitiComponent]
    });
    fixture = TestBed.createComponent(SpartitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
