import Head from 'next/head'
import Image from "next/image";
// reducer
import { useSelector, useDispatch } from 'react-redux'
import { setInitData } from "../reducer/props";
// icons
import { BsSuitHeartFill } from "react-icons/bs";

const homeImageList = [1, 2, 3, 4, 5];
export default function Home() {
  const props = useSelector(state => state.props)
  const dispatch = useDispatch()
  return (
    <div className='bg-bottom'>
      <Head>
        <title>My App[Home]</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className='title'>
          <BsSuitHeartFill className='icon' />
          <span>WELCOME THIS WORLD</span>
          <BsSuitHeartFill className='icon' />
        </div>
        <div className='home-banners-content'>
          {homeImageList.map((v, k) => <div className='home-img' key={k}>
            <Image
              layout="fill"
              src={`/images/home/${v}.jpg`} alt="" />
          </div>)
          }
        </div>
        <div className='title'>
          <span>{props.initData}</span>
          <button className='btn'
            onClick={() => dispatch(setInitData('props is Change!'))}
          >TRY BTN</button>
        </div>
      </main>
    </div>
  )
}
