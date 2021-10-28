let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 2},
                {id: 2, message: 'It\'s my first post', likesCount: 5}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hey'},
                {id: 3, message: 'How'},
                {id: 4, message: 'Now'},
                {id: 5, message: 'Ky'},
                {id: 6, message: 'Hello'}
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State Changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = "";
        this._state._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._state._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._state._callSubscriber = observer
    },
}

export default store;
window.store = store;