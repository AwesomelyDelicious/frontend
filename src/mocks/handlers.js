// src/mocks/handlers.js
import { rest } from "msw";

let userInfo = [
  { email: "duswl", password: "123" },
  { email: "yeonji", password: "1234" },
];

export const handlers = [
  //   // Handles a POST /login request
  //   rest.post('/login', null),
  //   // Handles a GET /user request
  //   rest.get('/user', null),

  rest.get("/api/v1/user?id=1", async (req, res, ctx) => {
    return res(
      ctx.json({
        email: "유건",
        nickName: "keonYu",
        restaurantList: [
          {
            restaurantName: "육꼬",
            x: "1251.31",
            y: "15123.24",
            id: "1",
            star_count: "4.5",
            memo: "맛있어요",
          },
          {
            restaurantName: "롯데리아",
            x: "151.31",
            y: "123.24",
            id: "2",
            star_count: "1.5",
            memo: "별로에요",
          },
        ],
      })
    );
  }),

  rest.post("/api/v1/user/new", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: 1 }));
  }),
  rest.post("/api/v1/authentication", (req, res, ctx) => {
    console.log(req.body);
  }),
];
