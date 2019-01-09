import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlclubsingleinhaltComponent } from './nlclubsingleinhalt.component';

describe('NlclubsingleinhaltComponent', () => {
  let component: NlclubsingleinhaltComponent;
  let fixture: ComponentFixture<NlclubsingleinhaltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlclubsingleinhaltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlclubsingleinhaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
