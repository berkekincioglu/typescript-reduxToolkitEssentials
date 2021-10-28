import {
  createSlice,
  PayloadAction,
  createSelector,
  nanoid,
} from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';

interface PostState {
  user: string;
  id: string;
  title: string;
  content: string;
}

const initialState: PostState[] = [
  {
    id: '1',
    title: 'First Post ',
    content: 'Hello Text!',
    user: 'Author 1',
  },
  { id: '2', title: 'Second Post', content: 'More Text!', user: 'Author 2' },
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<PostState>) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        const id = nanoid();
        return {
          payload: {
            id,
            title,
            content,
            user: userId,
          },
        };
      },
    },
  },
});

export const { postAdded } = postsSlice.actions;

export const postsSelector = (state: RootState) => state.posts;

export default postsSlice.reducer;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }
