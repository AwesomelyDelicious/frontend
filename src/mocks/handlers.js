// src/mocks/handlers.js
import { rest } from "msw";
export const handlers = [
  //   // Handles a POST /login request
  //   rest.post('/login', null),
  //   // Handles a GET /user request
  //   rest.get('/user', null),

  rest.get("/api/v1/1", async (req, res, ctx) => {
    return res(
      ctx.json({
        user: "유건",
        nick_name: "keonYu",
        restaurant_list: [
          {
            restaurant_name: "육꼬",
            x: "1251.31",
            y: "15123.24",
            id: "1",
            star_count: "4.5",
            memo: "맛있어요",
          },
          {
            restaurant_name: "롯데리아",
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
];
