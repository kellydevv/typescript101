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
              name: "sales",
              data:[15,82,33,34],
            },
          ]}
          options={{
            theme: { mode: "dark" },
            chart: { height: 500, width: 500 },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
