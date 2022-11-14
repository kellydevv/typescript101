import { useOutletContext, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { FetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: string;
  volume: number;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const params = useParams();
  //const {coinId} = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    FetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "price",
              data: data ? data?.map(price => parseFloat(price.close)) : [],
              //no error in vscode, but console error, data.map is not a function
              //data: data?.map ((price) => Number(price.close)) as number[],-->no error in vscode, but console error, data.map is not a function
              // data: data?.map((price => price.close)) ?? [], -->vscode error
            },
          ]}
          options={{
            theme: { mode: "light" },
            chart: { height: 500, width: 500 },
          }}
        />
      )}
      console.log(data);
    </div>
  );
}

export default Chart;
