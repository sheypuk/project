const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialstate = {

    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 12},
        {id: 2, message: 'it s my first', likeCount: 5},
    ],
    newPostText: 'itkamasutra'
};

const profileReducer = (state= initialstate , action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }


}
export const addPostActionCreator = () => ({type: ADD_POST})
export const upadateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;