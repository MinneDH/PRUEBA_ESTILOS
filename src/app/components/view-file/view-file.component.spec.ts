/* Version: Prod-23012023 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewFileComponent } from './view-file.component';

describe('ViewFileComponent', () => {
  let component: ViewFileComponent;
  let fixture: ComponentFixture<ViewFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
