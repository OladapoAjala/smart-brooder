import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Node3HumComponent } from './node3-hum.component';

describe('Node3HumComponent', () => {
  let component: Node3HumComponent;
  let fixture: ComponentFixture<Node3HumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Node3HumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Node3HumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
