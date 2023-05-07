export interface ToDo {
  id: string;
  title: string;
}

export interface Column {
  id: string;
  title: string;
  todos: ToDo[];
}
