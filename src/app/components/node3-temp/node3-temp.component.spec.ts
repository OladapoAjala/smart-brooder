import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Node3TempComponent } from './node3-temp.component';

describe('Node3TempComponent', () => {
  let component: Node3TempComponent;
  let fixture: ComponentFixture<Node3TempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Node3TempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Node3TempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
