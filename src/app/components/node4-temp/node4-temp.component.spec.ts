import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Node4TempComponent } from './node4-temp.component';

describe('Node4TempComponent', () => {
  let component: Node4TempComponent;
  let fixture: ComponentFixture<Node4TempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Node4TempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Node4TempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
