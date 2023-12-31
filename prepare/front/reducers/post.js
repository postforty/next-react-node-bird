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
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => {
  type: ADD_POST_REQUEST, data;
};

export const addCommnet = (data) => {
  type: ADD_COMMENT_REQUEST, data;
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
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };

    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
