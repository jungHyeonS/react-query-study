import { rest } from 'msw';
import user from './json/user.json';

const baseUrl = 'https://test.com';

// hanlders 등록
export const handlers = [
  // get 메소드 등록
  rest.get(`${baseUrl}/user`, (req, res, ctx) => {
    return res(ctx.json(user));
  }),
];
