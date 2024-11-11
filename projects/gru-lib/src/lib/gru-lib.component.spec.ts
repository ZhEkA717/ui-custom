import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruLibComponent } from './gru-lib.component';

describe('GruLibComponent', () => {
  let component: GruLibComponent;
  let fixture: ComponentFixture<GruLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GruLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
