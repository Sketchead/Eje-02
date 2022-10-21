import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tasks: string[];
  public task: string;

  constructor(private tasksService: TasksService) {
    /* Todos los servicios tienen que ser importados en el constructor como parámetros. Se usa privado para que no lo vea el HTML */
    this.tasks = this.tasksService.getTasks();
    this.task = "ola"
  }

  public addTask(){
    this.tasksService.addTask(this.task);
    this.tasks = this.tasksService.getTasks();
    console.log(this.tasks);
  }

  public removeTask(pos:number){
    this.tasksService.removeTask(pos);
    this.tasks = this.tasksService.getTasks();
    //This se usa solo para atributos
  }
}
