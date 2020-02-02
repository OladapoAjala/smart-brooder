import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Node5TempComponent } from './node5-temp.component';

describe('Node5TempComponent', () => {
  let component: Node5TempComponent;
  let fixture: ComponentFixture<Node5TempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Node5TempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Node5TempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
