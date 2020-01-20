import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Node1TempComponent } from './node1-temp.component';

describe('Node1TempComponent', () => {
  let component: Node1TempComponent;
  let fixture: ComponentFixture<Node1TempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Node1TempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Node1TempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
