import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailpage } from './detailpage';

describe('Detailpage', () => {
  let component: Detailpage;
  let fixture: ComponentFixture<Detailpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detailpage],
    }).compileComponents();

    fixture = TestBed.createComponent(Detailpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
