import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggingPanel } from './tagging-panel';

describe('TaggingPanel', () => {
  let component: TaggingPanel;
  let fixture: ComponentFixture<TaggingPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaggingPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaggingPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
