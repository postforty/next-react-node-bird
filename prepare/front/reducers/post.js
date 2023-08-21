export const initialState = {
  mainPosts: [
    {
      id: 1,
      //   시퀄라이저에서 다른 정보와 합쳐서 주는 경우 키가 대문자로 시작
      User: {
        id: 1,
        nickname: "dandy",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fnextjs%2Fspheres-light.png&w=300&q=100&dpl=dpl_FAW9eTniMXPYBmio9qQMoTyVeB7c",
        },
        {
          src: "https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fnextjs%2Fwindows-light.png&w=300&q=100&dpl=dpl_FAW9eTniMXPYBmio9qQMoTyVeB7c",
        },
        {
          src: "https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Floading-ui.png&w=1920&q=75&dpl=dpl_FAW9eTniMXPYBmio9qQMoTyVeB7c",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우와!",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "와우!",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "Dandy",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
