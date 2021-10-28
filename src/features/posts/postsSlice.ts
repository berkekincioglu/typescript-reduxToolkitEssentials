import {
  createSlice,
  PayloadAction,
  createSelector,
  nanoid,
} from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';

import { sub } from 'date-fns';

export interface PostState {
  user: string;
  id: string;
  title: string;
  content: string;
  date: string;
  reactions: any;
}

const initialState: PostState[] = [
  {
    id: '1',
    title: 'First Post ',
    content: 'Hello Text!',
    user: 'Author 1',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More Text!',
    user: 'Author 2',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postUpdated: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    postAdded: {
      reducer: (state, action: PayloadAction<PostState>) => {
        state.push(action.payload);
      },
      prepare: (
        title,
        content,
        userId,
        reactions = { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }
      ) => {
        const id = nanoid();
        return {
          payload: {
            id,
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions,
          },
        };
      },
    },
  },
});

export const { postAdded, reactionAdded, postUpdated } = postsSlice.actions;

export const postsSelector = (state: RootState) => state.posts;

export default postsSlice.reducer;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }
