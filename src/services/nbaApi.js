const BASE_URL = "https://api.balldontlie.io/v1";

const API_KEY = import.meta.env.VITE_BALLDONTLIE_API_KEY;

export class BalldontlieAPI {

  async fetchPlayers() {

    const allPlayers = [];

    for (let page = 1; page <= 1;) {

      const res = await fetch(
        `${BASE_URL}/players?per_page=100&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`
          }
        }
      );

      if (!res.ok) {
        throw new Error("API request failed");
      }

      const data = await res.json();

      allPlayers.push(...data.data);
    }

    return { data: allPlayers };
  }

}