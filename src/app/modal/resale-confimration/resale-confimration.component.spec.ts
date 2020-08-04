import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResaleConfimrationComponent } from './resale-confimration.component';

describe('ResaleConfimrationComponent', () => {
  let component: ResaleConfimrationComponent;
  let fixture: ComponentFixture<ResaleConfimrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResaleConfimrationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResaleConfimrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
