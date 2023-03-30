import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Input,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {
  @Input() fromChild = new EventEmitter<string>();
  public count!: number;
  public newTask!: string;
  public nameTask!: string;

  constructor(private cdref: ChangeDetectorRef) {}
  ngOnInit(): void {}

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  getCount(data: number) {
    this.count = data;
  }

  sendTask(): void {
    this.nameTask = this.newTask;
    this.newTask = '';
  }
}
