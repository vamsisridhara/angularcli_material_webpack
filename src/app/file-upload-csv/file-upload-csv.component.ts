import { Component, OnInit } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { PapaParseService } from 'ngx-papaparse';
import { RootObject, RealRootObject, RealBusinessRule } from '../viewmodels/businessRules';
@Component({
  selector: 'app-file-upload-csv',
  templateUrl: './file-upload-csv.component.html',
  styleUrls: ['./file-upload-csv.component.css']
})
export class FileUploadCsvComponent implements OnInit {
  fileReaded;
  rootObject;
  businessRules: RealBusinessRule[];
  volume: number[] = [];
  constructor(private papa: PapaParseService) { }

  ngOnInit() {
  }

  convertFile(event: any) {
    this.fileReaded = event.target.files[0];
    this.papa.parse(this.fileReaded, {
      delimiter: '',	// auto-detect
      newline: '',	// auto-detect
      quoteChar: '"',
      header: true,
      dynamicTyping: false,
      preview: 0,
      encoding: '',
      worker: false,
      comments: false,
      step: undefined,
      complete: (results, file) => {
        this.businessRules = results.data as RealBusinessRule[];
        this.businessRules.forEach(x => {
          this.volume.push(+x.MaxVolume);
          console.log(x.AcceptsFragile, x.MaxVolume);
        });
        // console.log(results.data);
        // console.log(data);
      },
      error: undefined,
      download: false,
      skipEmptyLines: true,
      chunk: undefined,
      fastMode: undefined,
      beforeFirstChunk: undefined,
      withCredentials: undefined
    });
  }

}
