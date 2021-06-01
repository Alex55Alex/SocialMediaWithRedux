import {rerenderEtireTree} from "../render";

const state: any = {
    dialogsPage: {
        dialogsData: [
            {id: '1', name: "Alex"},
            {id: '2', name: "Vova"},
            {id: '3', name: "Evgen"},
            {id: '4', name: "Petya"},
            {id: '5', name: "Viktor"},
            {id: '6', name: "Valera"},
            {id: '7', name: "Vasya"}
        ],
        messageData: [
            {id: '0', message: "How are you?)"},
            {id: '1', message: "Hi"},
            {id: '2', message: "I am very tired"}
        ]
    },
    profilePage: {
        postData: [
            {message: 'Hi it/`s my first post', id: '0', likeCount: 10},
            {message: 'I like burgers', id: '1', likeCount: 3},
            {message: 'Do you like me?', id: '2', likeCount: 7},

        ],
        postText: ''
    },
    sideBarInfo: {
        sideBarFriends: [
            {
                name: "Alex",
                avatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg',
                id: 0
            },
            {
                name: "Vova",
                avatar: 'https://media.istockphoto.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618808?s=612x612',
                id: 1
            },
            {
                name: "Evgen",
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKXDM4rc2vT9ZGiyZqiF-PP_MgNHTUsGP1g&usqp=CAU',
                id: 2
            },


        ]
    }
}

let addPost: (post: any) => void = (postText) => {
    let post: any = {message: postText, id: "3", likeCount: 8}
    state.profilePage.postData.push(post);
    rerenderEtireTree(state);
}
let addPostText:(postText: any) => void = (postText) => {
    state.profilePage.postText = postText;
    rerenderEtireTree(state);
}

export {state, addPost, addPostText};