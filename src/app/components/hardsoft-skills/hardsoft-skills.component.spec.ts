import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardsoftSkillsComponent } from './hardsoft-skills.component';

describe('HardsoftSkillsComponent', () => {
  let component: HardsoftSkillsComponent;
  let fixture: ComponentFixture<HardsoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardsoftSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardsoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
