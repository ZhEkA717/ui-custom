import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruLibButtonComponent } from './gru-lib-button.component';

describe('GruLibButtonComponent', () => {
  let component: GruLibButtonComponent;
  let fixture: ComponentFixture<GruLibButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GruLibButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruLibButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
