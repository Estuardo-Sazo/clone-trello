import { Dialog } from '@angular/cdk/dialog';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';
import { Column, ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  columns: Column[] = [
    {
      id: '13',
      title: 'Nuevo',
      todos: [
        {
          id: '1',
          title: 'Tarea 1',
        },
        {
          id: '2',
          title: 'Tarea 2',
        },
      ],
    },
    {
      id: '44',
      title: 'En Proceso',
      todos: [
        {
          id: '4',
          title: 'Tarea 4',
        },
      ],
    },
    {
      id: '984',
      title: 'Finalizado',
      todos: [],
    },
  ];

  todos: ToDo[] = [
    {
      id: '1',
      title: 'Tarea 1',
    },
    {
      id: '2',
      title: 'Tarea 2',
    },
    {
      id: '4',
      title: 'Tarea 4',
    },
    {
      id: '5',
      title: 'Tarea 5',
    },
  ];

  doing: ToDo[] = [
    {
      id: '6',
      title: 'Tarea 6',
    },
    {
      id: '7',
      title: 'Tarea 7',
    },
  ];
  done: ToDo[] = [
    {
      id: '10',
      title: 'Tarea 10',
    },
  ];

  constructor(private dialog: Dialog) {}

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn() {
    this.columns.push({
      id: '34',
      title: 'New Column',
      todos: [],
    });
  }

  openDialog() {
    this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
    });
  }
}
