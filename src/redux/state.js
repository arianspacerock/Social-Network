
let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 2},
            {id: 2, message: 'It\'s my first post', likesCount: 5}
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hey'},
            {id: 3, message: 'How'},
            {id: 4, message: 'Now'},
            {id: 5, message: 'Ky'},
            {id: 6, message: 'Zdarova'}
        ],
        dialogs: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'Max'},
            {id: 3, name: 'Elena'},
            {id: 4, name: 'Jenya'},
            {id: 5, name: 'Roma'},
            {id: 6, name: 'Dima'}
        ]
    },
    sidebar: {}
}

 export let addPost = ( postMessage ) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
}

export default state;