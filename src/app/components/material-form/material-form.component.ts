import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent implements OnInit {
  answer: string='';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  showAnswer(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.answerDisplay=this.answer;
      this.showSpinner=false;
    }, 2000)
  }
  constructor() { }

  ngOnInit() {
  }

}
