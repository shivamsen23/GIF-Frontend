import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'


export default function Home() {
  return (
  
    <div className='homepage'>
      <Navbar/>
      <div className="center">

        <div className="centerL">
        <h1>Welcome to GIF world </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel assumenda vero, vitae saepe ad magni. Optio nihil tenetur aliquid cum hic, dolorum praesentium!</p>
        <div className='user'>
      <Link className='sign' href="/SignIn">Connect With Us</Link>
      </div>
        </div>
        <div className="centerR">
        {/* <Image src="/image/home.png" height={400} width={400} /> */}
        <Image
            src="/chat-internet-communication-set-cartoon-young-people-chatting-in-social-media-messenger-phone-app-2DCHTYE-removebg-preview.png" 
            alt="Your Alt Text"
            layout="fill"
            objectFit="cover"
          />
       
    </div>

      </div>
     
      
     
    </div>
  )
}
