import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Node5HumComponent } from './node5-hum.component';

describe('Node5HumComponent', () => {
  let component: Node5HumComponent;
  let fixture: ComponentFixture<Node5HumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Node5HumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Node5HumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
