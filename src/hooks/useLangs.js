import { useContext } from 'react';

import { LangContext } from '../provider/LangContext';

export const useLangs = () => useContext(LangContext);
