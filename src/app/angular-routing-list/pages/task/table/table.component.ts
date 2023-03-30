import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  @Input() taskName!: string;
  public arrTaskList: any[] = [
    {
      id: 1,
      task: 'HTML',
      check: true,
    },
    {
      id: 2,
      task: 'Angular',
      check: false,
    },
    {
      id: 3,
      task: 'Java Script',
      check: false,
    },
  ];

  @Output() countOfTask = new EventEmitter<number>();

  public isChecked!: boolean;
  public newTask!: string;
  public taskIndex!: number;
  public editStatus = false;

  constructor() {}

  ngOnInit(): void {
    this.sendCount();
  }

  ngOnChanges(): void {
    this.updateTasks();
    this.sendCount();
  }

  sendCount(): void {
    this.countOfTask.emit(this.arrTaskList.length);
  }

  onChangeStatus($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.arrTaskList = this.arrTaskList.map((e) => {
      if (e.id == id) {
        e.check = isChecked;
        return e;
      }
      return e;
    });
  }

  updateTasks() {
    if (this.taskName != undefined) {
      this.arrTaskList.push({
        id: this.arrTaskList.length + 1,
        task: this.taskName,
        check: false,
      });
    }
  }

  deleteTask(index: number): void {
    this.arrTaskList.splice(index, 1);
    this.sendCount();
  }

  editTask(index: number): void {
    this.newTask = this.arrTaskList[index].task;
    this.taskIndex = index;
    this.editStatus = true;
  }

  saveEditTask(): void {
    if (this.newTask.trim().length > 0) {
      this.arrTaskList[this.taskIndex].task = this.newTask;
      this.newTask = '';
      this.editStatus = false;
    }
  }
}
