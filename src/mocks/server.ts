import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// 서버 setup
export const server = setupServer(...handlers);
