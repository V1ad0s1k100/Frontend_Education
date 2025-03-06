// const promise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     setTimeout(() => resolve(1), 1000);
//   } else {
//     setTimeout(() => reject(0), 1000);
//   }
// })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// console.log(promise);

// Задача с codewars 7ky

// const promiseHelloWorld = () =>
//   new Promise((resolve) => resolve("Hello World!"));

// promiseHelloWorld().then((response) => console.log(response));

// Задача с codewars 6ky

// console.log("Начало");

// function fetchUserInfo(callback) {
//   setTimeout(() => {
//     const data = { id: 1, name: "Alex" };
//     callback(data);
//   }, 1000);
// }

// function fetchUserGames(id, callback) {
//   setTimeout(() => {
//     const data = ["game1", "game2"];
//     callback(data);
//   }, 1000);
// }

// // function run() {
// //   fetchUserInfo((userInfo) => {
// //     console.log(userInfo);
// //     fetchUserGames(userInfo.id, (userGames) => console.log(userGames));
// //   });
// // }

// run();

// console.log("Конец");

// console.log("Начало");

//

// console.log("Конец");

// function featchGames() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // const gamesFromServer = "dfjhasdjkhgadgh";

//       const gamesFromServer = [
//         { id: 1, name: "Человек-паук" },
//         { id: 2, name: "Марио" },
//       ];

//       if (Array.isArray(gamesFromServer)) {
//         resolve(gamesFromServer);
//       } else {
//         reject("Что-то не так с данными");
//       }
//     }, 2000);
//   });
// }

// function renderLoader() {
//   const body = document.querySelector("body");

//   const loading = document.createElement("div");
//   loading.id = "loading";
//   loading.textContent = "Загрузка...";

//   body.append(loading);
// }

// function renderGames(games) {
//   const body = document.querySelector("body");

//   const loading = document.querySelector("#loading");
//   loading.remove();

//   games.forEach((game) => {
//     const gameElement = document.createElement("div");
//     gameElement.innerText = `Игра: ${game.name}`;
//     gameElement.className = "game-element";

//     body.append(gameElement);
//   });
// }

// renderLoader();

// featchGames()
//   .then((games) => {
//     console.log(games);
//     renderGames(games);
//   })
//   .catch((err) => {
//     renderErrorMessage();
//     console.error(err);
//   })
//   .finally(() => {
//     console.log("Конец загрузки");
//   });

// function featchVideo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // const gamesFromServer = "dfjhasdjkhgadgh";

//       const data = ["видео 1", "видео 2"];

//       if (Array.isArray(data)) {
//         console.log("Данные видео получены!");
//         resolve(data);
//       } else {
//         reject("Что-то не так с данными");
//       }
//     }, 2000);
//   });
// }

// function featchShorts() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = "dfjhasdjkhgadgh";

//       // const data = ["шортс 1", "шортс 2"];

//       if (Array.isArray(data)) {
//         console.log("Данные шортсов получены!");
//         resolve(data);
//       } else {
//         reject("Что-то не так с данными");
//       }
//     }, 1000);
//   });
// }

// function main() {
//   console.log("Загрузка...");

//   Promise.allSettled([featchShorts(), featchVideo()])
//     .then((data) => {
//       console.log(data[0].value);
//       console.log(data[1].value);
//     })
//     .catch((e) => console.error(e));
// }

// main();

// function getVideos() {
//   return new Promise((result) => {
//     setTimeout(() => {
//       const videos = [
//         { id: 1, title: "Топ 10 игр 2023" },
//         { id: 2, title: "Лучшая битва в Warcraft3" },
//         { id: 3, title: "Чем кормить кошек" },
//       ];

//       result(videos);
//     }, 1000);
//   });
// }

// function getDescription(idVideo) {
//   return new Promise((result) => {
//     setTimeout((idVideo) => {
//       const description = {
//         id: 1,
//         title: "Топ 10 игр 2023",
//         hashTags: ["игры", "2023"],
//         authorId: 55,
//       };

//       result(description);
//     }, 500);
//   });
// }

// function getAuthor(idAuthor) {
//   return new Promise((result) => {
//     setTimeout((idAuthor) => {
//       const author = {
//         id: 55,
//         name: "Какие-то уроки",
//         videoIds: [1, 2, 3],
//         shortIds: [10, 15, 33],
//       };

//       result(author);
//     }, 500);
//   });
// }

// function getShorts(idShorts, idAuthor) {
//   return new Promise((result) => {
//     setTimeout((idShorts, idAuthor) => {
//       const shorts = {
//         video: "Молодец, ты нашел свой шортс!",
//       };

//       result(shorts);
//     }, 500);
//   });
// }

// const main = () => {
//   getVideos()
//     .then((videos) => getDescription(videos[0].id))
//     .then((description) => getAuthor(description.id))
//     .then((data) => [data.shortIds[0], data.id])
//     .then(([shortIds, authorId]) => getShorts(shortIds, authorId))
//     .then((shorts) => console.log(shorts));
// };

// main();

// const p = Promise.resolve();
// const state = await getState(p); // === "fulfilled"

// const p = Promise.reject();
// const state = await getState(p); // === "rejected"

// const p = new Promise(() => {});
// const state = await getState(p); // === "pending"

// function getPromiseState(promise) {
//   const t = {};
//   return Promise.race([promise, t]).then(
//     (v) => (v === t ? "pending" : "fulfilled"),
//     () => "rejected"
//   );
// }

// // Пример использования:
// const promise = new Promise((resolve, reject) => {
//   resolve();
// });

// getPromiseState(promise).then((state) => console.log(state)); // 'pending'
// setTimeout(() => {
//   getPromiseState(promise).then((state) => console.log(state)); // 'fulfilled'
// }, 1500);

// const urls = new Promise((result) => {
//   result(["user.json", "guest.json"]);
// });

// let urlsArr = [];

// urls
//   .then((data_one) => {
//     urlsArr.push(data_one[0]);
//     return data_one;
//   })
//   .then((data_two) => {
//     urlsArr.push(data_two[1]);
//     return urlsArr;
//   })
//   .then((res) => console.log(res));

const featchGames = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Человек-паук" },
        { id: 2, name: "Марио" },
      ]);
    }, 1000);
  });
};

async function fetchData() {
  try {
    const games = await featchGames();
    console.log(games[0].name);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Конец загрузки");
  }
}

fetchData();
