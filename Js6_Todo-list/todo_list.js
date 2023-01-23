let input = prompt('What would you like to do ? ');
const todos = [];
//    const todos = ['do Assignment', 'clean home'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('------------------------------');
        if (todos.length !== 0) {
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i} : ${todos[i]}`)
            }
        } else {
            console.log("The List is Empty,Please Add What you have to Todo.... In the List")
        }
        console.log('------------------------------');
    } else if (input === 'new') {
        const newTodo = prompt('OK,what is new Todo');
        todos.push(newTodo);
        console.log(` "${newTodo}"  added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('OK , Enter an index to DELETE :'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`OK , ${deleted[0]} is Deleted from the List`);
        } else {
            console.log('Unknown index')
        }

    }
    input = prompt('What would you like to do ?');
}
console.log('OK... Quit the App !!!!');

