import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Node1HumComponent } from './node1-hum.component';

describe('Node1HumComponent', () => {
  let component: Node1HumComponent;
  let fixture: ComponentFixture<Node1HumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Node1HumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Node1HumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
