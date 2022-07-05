import Head from 'next/head'
import { useSimpleData } from "./api/useFetch";

export default function About() {
  const { data, dataIsLoading = true, dataIsError = {} } = useSimpleData();
  const dataMap = (data = {}) => {
    const mapData = Object.keys(data);
    return mapData.map((value, key) => <div key={key}>{value}</div>)
  }
  return <div className="about">
    <Head>
      <title>My App[About]</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    is about:
    <div className="datas">{
      dataIsLoading ? <div>data is loading</div> :
        dataMap(data)
    }</div>
  </div>
}