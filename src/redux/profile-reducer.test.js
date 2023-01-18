import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hello, friends!', likesCount: 34},
        {id: 2, message: 'Life is good!', likesCount: 30}
    ]
}

it("length of post should be incremented", () => {
    // 1. начальные данные
    let action = addPostActionCreator("I want be programmer");

    // 2. сам action
    let newState = profileReducer(state, action);

    // 3. проверка на соответствие ожиданиям
    expect(newState.posts.length).toBe(3);
})

it("message of post should be correct", () => {
    // 1. начальные данные
    let action = addPostActionCreator("I want be programmer");

    // 2. сам action
    let newState = profileReducer(state, action);

    // 3. проверка на соответствие ожиданиям
    expect(newState.posts[2].message).toBe("I want be programmer");
})

it("after deleting length of message should be decrement", () => {
    // 1. начальные данные
    let action = deletePost(1);

    // 2. сам action
    let newState = profileReducer(state, action);

    // 3. проверка на соответствие ожиданиям
    expect(newState.posts.length).toBe(1);
})

it("after deleting length shouldn't be decremented if id incorrect", () => {
    // 1. начальные данные
    let action = deletePost(1000);

    // 2. сам action
    let newState = profileReducer(state, action);

    // 3. проверка на соответствие ожиданиям
    expect(newState.posts.length).toBe(2);
})