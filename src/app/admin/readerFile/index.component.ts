import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reader',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class ReaderFileComponent implements OnInit {
  public data = [];
  public jsonNotation: string;
  constructor() {

  }
  ngOnInit() {

  }
  changeListener($event): void {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    let file: File = inputValue.files[0];
    if (!!file) {
      let myReader: FileReader = new FileReader();
      myReader.onloadend = (e) => {
        this.data = myReader.result
          .trim()
          .split('\n')
          .map(line => line.split('\t'))
          .reduce((customers, line) => {
            customers[line[0]] = customers[line[0]] || [];
            return customers;
          }, {});
        this.jsonNotation = JSON.stringify(this.data);
      }
      myReader.readAsText(file);
    }
  }
}
