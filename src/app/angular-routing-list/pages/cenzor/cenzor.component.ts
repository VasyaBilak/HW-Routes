import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})

export class CenzorComponent implements OnInit {
  public badWordsArr: Array<string> = ['java', 'tottenham'];
  public cenzorWordsArr: Array<string> = [];
  public badWordsList: string = this.badWordsArr.join(' ');
  public wordHere: string = '';
  public textarea: string = '';
  public placeholder: string = 'word here...';
  public placeholderArea: string = 'text here...';
  public btnAdd: string = 'btn-add';
  public wordHereClass: string = 'word-here';
  public textareaClass: string = 'textarea';

  reactiveForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      textareaValue: new FormControl(null),
    });
  }

  getValueWord(val: string): void {
    this.wordHere = val;
  }

  getAreaVal(val: string): void {
    this.textarea = val;
  }

  add(): void {
    if (this.wordHere === '') {
      this.placeholder = 'Please write a word!';
      this.wordHereClass = 'word-here red-border';
    } else {
      this.placeholder = 'word here...';
      this.wordHereClass = 'word-here border-none';
      this.badWordsArr.push(this.wordHere);
      this.wordHere = '';
      this.badWordsList = this.badWordsArr.join(' ');
    }
  }

  reset(): void {
    this.badWordsArr = [];
    this.badWordsList = ' ';
    this.reactiveForm.setValue({ textareaValue: '' });
  }

  cenzor(): void {
    this.cenzorWordsArr = [];
    let textareaArr: Array<string> = [];
    let textareaWords: string;

    if (this.textarea === '') {
      this.placeholderArea = 'Please write a text!';
      this.textareaClass = 'textarea red-border';
    } else {
      this.placeholderArea = 'text here...';
      this.textareaClass = 'textarea green-border';
      let val: any = this.textarea.split(' ');
      val.forEach((e: any) => this.cenzorWordsArr.push(e));

      this.cenzorWordsArr.forEach((e) => {
        this.badWordsArr.forEach((el) => {
          if (el === e) e = e.replace(e, `*`.repeat(e.length));
        });
        textareaArr.push(e);
      });

      textareaWords = textareaArr.join(' ');
      this.textarea = textareaWords;
      this.reactiveForm.setValue({ textareaValue: this.textarea });
    }
  }
}
