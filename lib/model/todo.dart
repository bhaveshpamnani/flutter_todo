class ToDo {
  String? id;
  String? todoText;
  bool isDone;
  ToDo({
    required this.id,
    required this.todoText,
    this.isDone = false,
});
static List<ToDo> todoList () {
  return [
    ToDo(id: '01',todoText:'Morning Excercise' ,isDone: true),
    ToDo(id: '02',todoText:'Buy Groceries' ,isDone: true),
    ToDo(id: '03',todoText:'Check Mails'),
    ToDo(id: '04',todoText:'Team Meeting' ),
    ToDo(id: '05',todoText:'Reading NoteBooks' ),
    ToDo(id: '06',todoText:'Work on mobile app for 2 hour' ),
    ToDo(id: '07',todoText:'Dinner With Jenny' ),
  ];
}
}
