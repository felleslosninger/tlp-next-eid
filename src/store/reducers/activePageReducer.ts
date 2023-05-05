import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface HeadDataProps {
  meta: [];
  title: string;
}

interface ContentProps {
  node: {
    title: string;
    ingress: string;
  };
}
interface ActivePageState {
  head: HeadDataProps;
  header: {};
  content: ContentProps;
  footer: {};
}

const initialState: ActivePageState = {
  head: { meta: [], title: '' },
  header: { logo: { alt: '', url: '' }, items: [] },
  content: {
    node: {
      title: 'Nexit.js app',
      ingress: '',
    },
  },
  footer: { items: [] },
};

export const activePageSlice = createSlice({
  name: 'serverData',
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<ActivePageState>) => {
      state.head = action.payload.head;
      state.header = action.payload.header;
      state.content = action.payload.content;
      state.footer = action.payload.footer;
    },
  },
});

export const { setActivePage } = activePageSlice.actions;
export default activePageSlice.reducer;
