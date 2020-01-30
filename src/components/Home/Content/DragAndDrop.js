import { Status } from '../../../constants';
import { sortTasks } from '../../../actions/tasks';

function onDragEnd(result, itemTodos) {
    const {
        destination,
        source,
        /*draggableId*/
    } = result;

    let start = '',
        finish = '';
    if (!destination) {
        return;
    }

    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) {
        return;
    }

    for (let i = 0; i < 3; i++) {
        if (Status[i].value === source.droppableId) {
            start = Status[i].value;
        }
        if (Status[i].value === destination.droppableId) {
            finish = Status[i].value
        }
    }
    const tasks1 = itemTodos.filter(
        item => item.status === start
    )
    const tasks2 = itemTodos.filter(
        item => item.status !== start
    )
    if (start === finish) {
        const tasks = Array.from(tasks1);
        const movedItem = tasks.find((item, index) => {
            return source.index === index
        })
        const remainingItems = tasks.filter((item, index) => {
            return index !== source.index
        })
        const reoderItems = [
            ...remainingItems.slice(0, destination.index),
            movedItem,
            ...remainingItems.slice(destination.index)
        ]
        reoderItems.forEach((item, index) => {
            return item.position = index
        })
        sortTasks(tasks2.concat(reoderItems));
        return;
    }
    // kéo thả giữa 2 task khác nhau
    const d = tasks1.splice(source.index, 1)
    d[0]['status'] = destination.droppableId;
    tasks2.splice(destination.index, 0, d[0]);
    const newData = tasks2.concat(tasks1);
    sortTasks(newData);
    return;
}

export {
    onDragEnd
}
