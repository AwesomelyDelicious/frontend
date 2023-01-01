// src/mocks/handlers.js
import { rest } from "msw";
import { FaChessBishop } from "react-icons/fa";

let usersInfo = [
  { email: "duswl", password: "123" },
  { email: "yeonji", password: "1234" },
];

let userData = {
  email: "유건",
  nick_name: "keonYu",
  restaurant_list: [
    {
      restaurant_name: "육꼬",
      x: "37.3840928072388",
      y: "126.933969384097",
      id: "1",
      star_count: "4.5",
      memo: "맛있어요",
    },
    {
      restaurant_name: "맛없는 식당",
      x: "151.31",
      y: "123.24",
      id: "2",
      star_count: "1.5",
      memo: "별로에요",
    },
  ],
};

export const handlers = [
  //   // Handles a POST /login request
  //   rest.post('/login', null),
  //   // Handles a GET /user request
  //   rest.get('/user', null),

  rest.patch(`/api/v1/restaurant/:id`, async (req, res, ctx) => {
    let { id } = req.params;
    console.log(typeof id);
    console.log(req.body);

    userData.restaurant_list = userData.restaurant_list.map((v) =>
      v.id === id ? { ...v, memo: req.body.memo } : v
    );
    console.log("update");
    console.log(userData);
    return res(ctx.status(200));
  }),
  rest.delete(`/api/v1/restaurant/:id`, async (req, res, ctx) => {
    let { id } = req.params;
    userData.restaurant_list = userData.restaurant_list.filter(
      (v) => v.id !== id
    );
    console.log("파란색 나와라");
    console.log(userData);
    return res(ctx.status(200));
  }),

  rest.get("/api/v1/1", async (req, res, ctx) => {
    return res(ctx.json(userData));
  }),

  rest.post("/api/v1/user/new", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: 1 }));
  }),
  rest.post("/api/v1/authentication", (req, res, ctx) => {
    let { email, password } = req.body;

    for (let i in usersInfo) {
      if (email === usersInfo[i].email && password === usersInfo[i].password) {
        return res(ctx.status(200), ctx.json({ id: 1 }));
      }
    }
    return res(ctx.status(404));
  }),

  rest.post("/api/v1/restaurant", (req, res, ctx) => {
    console.log("엑시오스");
    let { body } = res;
    console.log(body);
    userData.restaurant_list.push(req.body);
    console.log(userData);
    return res(ctx.status(200));
  }),
];
