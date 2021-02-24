const initialState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "day la mot dong chu dai, dai vai ca dai."
            },
            {
                id: 1,
                text: "day cung la mot dong chu dai, dai hon ca dong o tren kia"
            }
        ]
    },
    {
        title: "Episode 2",
        id: 0,
        cards: [
            {
                id: 0,
                text: "text 1"
            },
            {
                id: 1,
                text: "text 2"
            },
            {
                id: 2,
                text: "text 3"
            }
        ]
    },
    {
        title: "Episode 1",
        id: 0,
        cards: [
            {
                id: 0,
                text: "text 1"
            },
            {
                id: 1,
                text: "text 2"
            },
            {
                id: 2,
                text: "text 3"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default listsReducer;