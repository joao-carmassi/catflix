// // Seu token de leitura da API
// const apiToken =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mjk0YjhlZDU2MTRiNDA3YWE2OGRkMDhiNTRmODI5YSIsIm5iZiI6MTc0MzEyMzgzMC43MTIsInN1YiI6IjY3ZTVmNTc2YTZkZDliMDgwODAwNWViMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d8jXHzapL73AGsATPFv-3VorECeg5ga7V4_IOAl0Sbc";

// // Função para buscar um filme específico
// async function searchMovie(query: string) {
//   try {
//     const response = await fetch(
//       https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
//         query
//       )},
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${apiToken}`,
//           "Content-Type": "application/json;charset=utf-8",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Erro na requisição: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Erro ao buscar o filme:", error);
//   }
// }

// // Chamando a função com o nome do filme que deseja buscar
// searchMovie("Jurassic Park - O Parque dos Dinossauros"); // Substitua "Inception" pelo nome do filme que quer procurar

// // Seu token de leitura da API
// const apiToken = "seu_token_aqui";

// // Função para buscar informações de um filme pelo ID
// async function getMovieById(movieId: number) {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${apiToken}`,
//           "Content-Type": "application/json;charset=utf-8",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Erro na requisição: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Erro ao buscar informações do filme:", error);
//   }
// }

// // Chamando a função com o ID do filme que deseja buscar
// getMovieById(550); // Substitua 550 pelo ID do filme (exemplo: 550 é para "Clube da Luta")

// // Função para verificar se um site está online
// async function checkSiteStatus(url: string) {
//   try {
//     const response = await fetch(url, { method: "HEAD" }); // Faz uma requisição HEAD
//     if (response.ok) {
//       console.log(`${url} está online! Código de status: ${response.status}`);
//     } else {
//       console.log(
//         `${url} está acessível, mas retornou código de status: ${response.status}`
//       );
//     }
//   } catch (error) {
//     console.error(`Erro ao acessar ${url}:`, error);
//   }
// }

// // Teste a função com o URL do site
// checkSiteStatus("https://www.exemplo.com");

// const video = document.querySelector("video");

// // Salvar o tempo atual quando o usuário pausa ou fecha a página
// video.addEventListener("timeupdate", () => {
//   localStorage.setItem("videoTime", video.currentTime);
// });

// // Retomar do último tempo salvo
// window.addEventListener("load", () => {
//   const lastTime = localStorage.getItem("videoTime");
//   if (lastTime) {
//     video.currentTime = parseFloat(lastTime);
//   }
// });
