import { useParams, useLocation } from "react-router";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 40px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface Params {
  coinId: String;
}

interface LocationState {
  state: {
    name: string;
    rank: number;
  };
}

interface InfoData {
      id: string;
      name: string;
      symbol: string;
      rank: number;
      is_new: boolean;
      is_active: boolean;
      type: string;
      logo: string;
      description: string;
      message: string;
      open_source: boolean;
      started_at: string;
      development_status: string;
      hardware_wallet: boolean;
      proof_type: string;
      org_structure: string;
      hash_algorithm: string;
      first_data_at: string;
      last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const [loading,setLoading] = useState(true);
  const { coinId } = useParams() as unknown as Params;
  const { state } = useLocation() as LocationState;
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  useEffect(() => {
    (async () => {
      const InfoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      console.log(InfoData);
      //1st await for json, 2nd await for fetch()
      const PriceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      setInfo(InfoData);
      setPriceInfo(PriceData);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
