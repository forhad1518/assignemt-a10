// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../customCss/style.css';

// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@material-tailwind/react';
import { JackInTheBox, Roll, Zoom } from 'react-awesome-reveal';

export default function Slide() {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Parallax, Pagination, Navigation]}
                className="mySwiper min-h-screen"
            >
                <SwiperSlide
                    style={{
                        'background-image':
                            'url(https://sportdox-codezeeel.myshopify.com/cdn/shop/files/main-banner-1_1903x.jpg?v=1678776979;)',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                    className='min-h-screen '
                >
                    <div className='flex justify-between'>
                        <div className='w-[50%] min-sm:hidden'>

                        </div>
                        <div className='w-[50%] flex flex-col justify-start gap-y-5 pt-10'>
                            <JackInTheBox>
                                <h1 className='text-2xl md:text-4xl lg:text-6xl leading-normal font-bold'>Professional Basketball Player at The Game</h1>
                            </JackInTheBox>
                            <div>
                                <Button className='btn'>Lear More</Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        'background-image':
                            'url(https://sportdox-codezeeel.myshopify.com/cdn/shop/files/main-banner-2_1903x.jpg?v=1679031175;)',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                    className='min-h-screen'
                >
                    <div className='flex justify-between'>
                        <div className='w-[50%]'>

                        </div>
                        <div className='w-[50%] flex flex-col justify-start gap-y-5 pt-10'>
                            <Zoom>
                                <h1 className='text-2xl md:text-4xl lg:text-6xl leading-normal font-bold'>Professional Boxer Training At The Gym</h1>
                            </Zoom>
                            <div>
                                <Button className='btn'>Lear More</Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        'background-image':
                            'url(https://img.freepik.com/free-photo/male-boxer-boxing-punching-bag_155003-6125.jpg?t=st=1733500875~exp=1733504475~hmac=224912f9ebeb2068e9370a7ab3b2c3025203b4fca15303a66d4325751380038d&w=740)',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                    className='min-h-screen'

                >
                    <div className='flex justify-between'>
                        <div className='w-[50%]'>

                        </div>
                        <div className='w-[50%] flex flex-col justify-start gap-y-5 pt-10'>
                            <Roll>
                                <h1 className='text-2xl md:text-4xl lg:text-6xlleading-normal font-bold'>Professional Boxer in The Biggest World!</h1>
                            </Roll>
                            <div>
                                <Button className='btn'>Lear More</Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
