/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */

class Notes {

    static Priority () {
    return {
        HIGHT: "hight",
        LOW: "low",
    };
    }
    
    constructor() {
        this.items = [];
    }
    addNote(note) {
        this.items.push(note);
    }
    removeNote(text) {
        const note = this.items.find(note => note.text === text);
        this.items.splice(this.items.indexOf(note), 1);
        // this.items = this.items.filter(note => note.text !== text);
    }
    updatePriority(text, newPriority) {
        this.items.find(note => note.text === text).priority = newPriority;
    }

}

const note1 =new Notes();
note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
// console.log(note1);
// note1.removeNote('Note1');
note1.updatePriority('Note1', Notes.Priority().HIGHT);
console.log(note1);
