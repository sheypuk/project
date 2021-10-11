const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
let initialstate = {

    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 12},
        {id: 2, message: 'it s my first', likeCount: 5},
    ],
    newPostText: 'itkamasutra',
    profile: null
};

const profileReducer = (state= initialstate , action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            
            return {...state,
                posts : [...state.posts,newPost ],
                newPostText : ''
            }


        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state,
                newPostText : action.newText
            }

        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }


}
export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile })
export const upadateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;