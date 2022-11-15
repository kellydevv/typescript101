import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Coins />} />
        <Route path=":coinId" element={<Coin />}>
          <Route path="/:coinId/chart" element={<Chart coinId={""} />} />
          <Route path="/:coinId/price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
