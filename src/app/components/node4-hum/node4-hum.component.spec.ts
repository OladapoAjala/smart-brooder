import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Node4HumComponent } from './node4-hum.component';

describe('Node4HumComponent', () => {
  let component: Node4HumComponent;
  let fixture: ComponentFixture<Node4HumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Node4HumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Node4HumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
