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

interface HeaderProps {
  title: string;
  logo: { alt: string; url: string };
  items?: [];
}

interface FooterProps {
  items?: [];
}

interface ActivePageState {
  head: HeadDataProps;
  header: HeaderProps;
  content: ContentProps;
  footer: FooterProps;
}

const initialState: ActivePageState = {
  head: { meta: [], title: '' },
  header: { title: 'PageTitle', logo: { alt: '', url: '' }, items: [] },
  content: {
    node: {
      title: '',
      ingress:
        '<h2>Id porten</h2> <p>ID-porten er en felles innloggingsløsning til offentlige tjenester på internett. ID-porten gir tilgang til over 1000 tjenester fra stat og kommune. ID-porten blir driftet av Digitaliseringsdirektoratet.</p><a href="https://www.google.com/">lenke</a> <a href="http://localhost:3000/intern">Link</a>',
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
