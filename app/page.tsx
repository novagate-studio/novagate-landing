import Poster from '@/assets/games/banner1.jpg'
import Logo from '@/assets/logo/PNG_WHITE.png'
import classNames from 'classnames'
import { ChevronsDown, KeyIcon, SparkleIcon, ZapIcon } from 'lucide-react'
import { Goldman } from 'next/font/google'
import Image from 'next/image'
import Game from './components/game'
const goldManFont = Goldman({
  weight: ['400', '700'],
})
export default function Home() {
  return (
    <div>
      <div className='relative z-10' id='hero-section'>
        <video
          src={'/assets/videos/hero_video.webm'}
          autoPlay
          muted
          loop
          playsInline
          className='w-full h-full object-cover absolute inset-0'>
          Your browser does not support the video tag.
        </video>
        <div className='w-screen h-[calc(100vh-2rem)] items-center relative bg-black/20 flex flex-col justify-center text-white px-4'>
          <Image src={Logo} alt='NovaGate Logo' width={150} height={50} className='h-56 md:h-64 w-auto' />
          <h1 className={classNames(goldManFont.className, 'font-medium md:text-xl text-center')}>
            Không chỉ là trò chơi, đây còn là một thế giới huyền bí
          </h1>
        </div>
        <ChevronsDown className='absolute bottom-4 left-1/2 text-primary size-10 animate-bounce-slow opacity-80 hover:opacity-40 transition-opacity duration-300' />
      </div>
      {/* <Game /> */}
      <div className='px-4 mt-14 lg:mt-28'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
          <div className='lg:col-span-2'>
            <div className='italic lg:text-lg'>Sứ mệnh của chúng tôi</div>
            <h1 className='text-3xl md:text-5xl lg:leading-tight font-bold text-yellow-600'>
              Không chỉ là trò chơi, đây còn là một trải nghiệm
            </h1>
          </div>
          <div className='space-y-10 lg:col-span-3 lg:text-lg'>
            <div className='flex gap-4'>
              <div className='w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-yellow-600 shrink-0 grid place-items-center'>
                <KeyIcon className='text-yellow-600 size-4 lg:size-6' />
              </div>
              <div>
                <div className='font-bold text-xl lg:text-2xl'>Bảo mật thông tin</div>
                <div className=''>Toàn bộ thông tin cá nhân của người chơi đều được bảo mật và an toàn.</div>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-yellow-600 shrink-0 grid place-items-center'>
                <ZapIcon className='text-yellow-600 size-4 lg:size-6' />
              </div>
              <div>
                <div className='font-bold text-xl lg:text-2xl'>Nhanh chóng, chuyên nghiệp</div>
                <div>Chúng tôi cam kết mang đến trải nghiệm người dùng nhanh chóng và chuyên nghiệp nhất.</div>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-yellow-600 shrink-0 grid place-items-center'>
                <SparkleIcon className='text-yellow-600 size-4 lg:size-6' />
              </div>
              <div>
                <div className='font-bold text-xl lg:text-2xl'>Hệ sinh thái đa dạng</div>
                <div>Chúng tôi xây dựng một hệ sinh thái trò chơi đa dạng, phong phú và hấp dẫn.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 mt-32 lg:mt-56'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-3xl md:text-5xl lg:leading-tight font-bold text-yellow-600'>
            Đem lại sự hài lòng tuyệt đối cho mọi game thủ, kể cả những người khó tính nhất
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 lg:gap-10 mt-4 md:mt-10 lg:mt-16 lg:text-lg'>
            <div className='sm:row-span-3'>
              <Image
                src={Poster}
                alt='Black Myth Wukong Poster'
                className='w-full h-auto rounded-lg shadow-lg aspect-[9/12] object-cover'
              />
            </div>
            <div>
              <h2 className='font-bold text-yellow-600 text-xl lg:text-2xl lg:mb-3'>Tầm Nhìn</h2>
              <p>
                Tầm nhìn của chúng tôi là trở thành địa chỉ hàng đầu cho trải nghiệm trò chơi trực tuyến, với sự đa dạng
                phong phú và chất lượng hàng đầu, mang lại niềm vui và hứng thú cho người chơi.
              </p>
            </div>
            <div>
              <h2 className='font-bold text-yellow-600 text-xl lg:text-2xl lg:mb-3'>Sứ Mệnh</h2>
              <p>
                Đối với chúng tôi, sứ mệnh không chỉ là cung cấp trò chơi trực tuyến, mà còn là mở ra cánh cửa của sự
                sáng tạo và khám phá.
              </p>
            </div>
            <div className='lg:col-span-2'>
              <h2 className='font-bold text-yellow-600 text-xl lg:text-2xl lg:mb-3'>Chiến Lược</h2>
              <p>
                Chiến lược của chúng tôi là tạo ra một nền tảng trò chơi trực tuyến đa dạng và phong phú, kết hợp giữa
                sự sáng tạo, công nghệ tiên tiến và sự tận tâm đến từng chi tiết. Chúng tôi cam kết cung cấp những trò
                chơi chất lượng cao, đa dạng về thể loại và phong cách, đồng thời liên tục cải tiến và nâng cao trải
                nghiệm người dùng để đáp ứng nhu cầu đa dạng của cộng đồng game thủ. Bằng cách này, chúng tôi hy vọng
                tạo ra một môi trường trò chơi trực tuyến thú vị và hấp dẫn nhất, nơi mà mọi người có thể tận hưởng niềm
                đam mê chung và kết nối với nhau qua trò chơi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
