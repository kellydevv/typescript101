import { useOutletContext, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
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
  console.log(data ? data?.map((price) => parseFloat(price.close)) : []);
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
              data: data ? data?.map((price) => parseFloat(price.close)) : [],
              //no error in vscode, but console error, data.map is not a function
              //data: data?.map ((price) => Number(price.close)) as number[],-->no error in vscode, but console error, data.map is not a function
              // data: data?.map((price => price.close)) ?? [], -->vscode error
            },
          ]}
          options={{
            theme: { mode: "dark" },
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            grid: { show: false },
            yaxis: { show: false },
            xaxis: {
              axisTicks: { show: false },
              axisBorder: { show: false },
              labels: { show: false },
              type: "datetime",
              categories:data ? data?.map((price) => parseFloat(price.time_close)) : [],
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#2ecc71"], stops: [0, 100] },
            },
            colors: ["#3498db"],
            tooltip: { y: { formatter: (value) => `$ ${value.toFixed(2)}` } },
            stroke: {
              curve: "smooth",
              width: 3,
            },
          }}
        />
      )}
      console.log(data);
    </div>
  );
}

export default Chart;
