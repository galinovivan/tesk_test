import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormCreateComponent } from './order-form-create.component';

describe('OrderFormCreateComponent', () => {
  let component: OrderFormCreateComponent;
  let fixture: ComponentFixture<OrderFormCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFormCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
