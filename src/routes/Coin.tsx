import { useParams } from 'react-router';

interface Params {
coinId: String;
}

function Coin() {
const { coinId } = useParams() as unknown as Params;
console.log(coinId);
return <h1>Coin : {coinId}</h1>;
}
export default Coin;