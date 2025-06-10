import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ConversaPage } from './conversa.page';

describe('Tab2Page', () => {
  let component: ConversaPage;
  let fixture: ComponentFixture<ConversaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ConversaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
