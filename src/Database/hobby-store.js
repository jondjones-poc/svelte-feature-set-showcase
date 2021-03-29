import { writable} from 'svelte/store';

const hobbies = writable([]);

const store = {
subscribe: hobbies .subscribe,
setHobbies: (items => {
    hobbies.set(items)
}),
addHobby: (hobby) => {
    hobbies.update(items => {
        return items.concat(hobby);
    })
}};

export default store;