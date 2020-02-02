import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Node2TempComponent } from './node2-temp.component';

describe('Node2TempComponent', () => {
  let component: Node2TempComponent;
  let fixture: ComponentFixture<Node2TempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Node2TempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Node2TempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
