import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadCsvComponent } from './file-upload-csv.component';

describe('FileUploadCsvComponent', () => {
  let component: FileUploadCsvComponent;
  let fixture: ComponentFixture<FileUploadCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
