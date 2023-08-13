import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';

describe('BookItemComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
