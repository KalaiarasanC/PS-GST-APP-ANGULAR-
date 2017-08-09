import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillProductComponent } from './bill-product.component';

describe('BillProductComponent', () => {
  let component: BillProductComponent;
  let fixture: ComponentFixture<BillProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
