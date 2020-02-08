import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BavBarComponent } from './bav-bar.component';

describe('BavBarComponent', () => {
  let component: BavBarComponent;
  let fixture: ComponentFixture<BavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
