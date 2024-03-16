import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagalitiComponent } from './magaliti.component';

describe('MagalitiComponent', () => {
  let component: MagalitiComponent;
  let fixture: ComponentFixture<MagalitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagalitiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagalitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
