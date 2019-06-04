import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() initialNumber;
  @Output() onKickFather = new EventEmitter();

  constructor() {
  }

  plus() {
    this.initialNumber++;
  }

  minus() {
    this.initialNumber--;
  }

  btnCLicked() {
    this.onKickFather.emit(this.initialNumber);

  }

  ngOnInit() {
  }

}
