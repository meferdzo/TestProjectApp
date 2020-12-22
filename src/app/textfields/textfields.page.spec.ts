import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextfieldsPage } from './textfields.page';

describe('TextfieldsPage', () => {
  let component: TextfieldsPage;
  let fixture: ComponentFixture<TextfieldsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextfieldsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
