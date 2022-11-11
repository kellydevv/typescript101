
//api getch하고 json을 return하는 함수 만들기
export async function FetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
