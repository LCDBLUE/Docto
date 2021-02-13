import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReachUsPage } from './reach-us.page';

describe('ReachUsPage', () => {
  let component: ReachUsPage;
  let fixture: ComponentFixture<ReachUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachUsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReachUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
