import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoHomeComponent } from './contenido-home.component';

describe('ContenidoHomeComponent', () => {
  let component: ContenidoHomeComponent;
  let fixture: ComponentFixture<ContenidoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
