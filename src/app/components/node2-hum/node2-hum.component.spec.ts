import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Node2HumComponent } from './node2-hum.component';

describe('Node2HumComponent', () => {
  let component: Node2HumComponent;
  let fixture: ComponentFixture<Node2HumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Node2HumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Node2HumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
