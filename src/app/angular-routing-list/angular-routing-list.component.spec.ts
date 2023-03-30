import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRoutingListComponent } from './angular-routing-list.component';

describe('AngularRoutingListComponent', () => {
  let component: AngularRoutingListComponent;
  let fixture: ComponentFixture<AngularRoutingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularRoutingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularRoutingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
