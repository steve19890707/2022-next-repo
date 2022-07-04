import Head from 'next/head'
import Image from "next/image";
// icons
import { BsSuitHeartFill } from "react-icons/bs";

const homeImageList = [1, 2, 3, 4, 5];
export default function Home() {
  return (
    <div className='bg-bottom'>
      <Head>
        <title>My App</title>
        <meta name="description" content="Generated by create next app" />
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
      </main>
    </div>
  )
}