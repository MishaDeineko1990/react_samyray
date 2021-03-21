let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1, 
                name: 'Dimych',
                messages: [
                    {id: 1, message: 'Hi'},
                    {id: 0, message: 'How is your it-kamasutra?'},
                    {id: 1, message: 'Yo'}
                ]
            },
            {id: 2, name: 'Andrew',
            messages: [
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'}
            ]
            },
            {id: 3, name: 'Sveta',
            messages: [
                {id: 1, message: 'whay'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'}
            ]
            },
            {id: 4, name: 'Sasha',
            messages: [
                {id: 1, message: 'lo'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'}
            ]
            },
            {id: 5, name: 'Viktor',
            messages: [
                {id: 1, message: 'nit'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'}
            ]
            },
            {id: 6, name: 'Valera',
            messages: [
                {id: 1, message: 'dat'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'},
                {id: 1, message: 'Hi222'},
                {id: 0, message: 'How is your it-kamasutra?2222'},
                {id: 1, message: 'Yo2222'},
                {id: 1, message: 'Hi'},
                {id: 0, message: 'How is your it-kamasutra?'},
                {id: 1, message: 'Yo'}
            ]
            }
        ]

    },
    sidebar: {}


}

export let add_post = (post_message) => {
    let new_post = {
        id: state.profilePage.posts.length + 1, 
        message: post_message,
        likesCount: 0
    }    
    state.profilePage.posts.push(new_post)
}

// add_post('hi bro miha');

for (let index = 0; index < 1000; index++) {
    
    add_post('hi bro miha ');
    
}

export default state