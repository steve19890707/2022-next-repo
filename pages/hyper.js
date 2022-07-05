import Head from 'next/head'

export default function Hyper({ data, dataIsLoading = true, dataIsError }) {
  const dataMap = (data = {}) => {
    const mapData = Object.keys(data);
    return mapData.map((value, key) => <div key={key}>{value}</div>)
  }
  return <div className="hyper">
    <Head>
      <title>My App[Hyper]</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    is hyper:
    <div className="datas">{
      dataIsLoading ? <div>data is loading</div> :
        dataMap(data)
    }</div>
  </div>
}

export async function getServerSideProps() {
  const API_URL = "https://extreme-ip-lookup.com/json/";
  const res = await fetch(API_URL)
  let error = false;
  const data = await res.json();
  const isLoading = error && !data;
  if (!res.ok) {
    const dataError = {
      info: data,
      status: res.status,
      msg: "data error"
    }
    error = dataError
  }
  return {
    props: {
      data: data,
      dataIsLoading: isLoading,
      dataIsError: error
    },
  }
}