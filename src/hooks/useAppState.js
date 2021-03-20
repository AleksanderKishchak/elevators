import { useContext } from 'react';

import { AppStateContext } from '../provider/AppStateContext';

export const useAppState = () => useContext(AppStateContext);
