import React from 'react'
import success_thing from '../../../public/mock-imges/success-thing.png';
import { Arrow, Button, Hero, Factory, Tractor } from '../../components/common';
import spicy from '../../../public/mock-imges/spicy.png'
import feeds from '../../../public/mock-imges/feeds.png'
import fruits from '../../../public/mock-imges/fruits.png'
import vegetables from '../../../public/mock-imges/vegetables.png'

export const About = () => {
  return (
    <div>
      <Hero content={"About Us"} backgroundImg={success_thing} />
      <div className="w-full py-[186px]">
        <div className="container">
          <div className="mb-[180px]">
            <div className="flex">
              <div className="img">
                <img src={success_thing} alt="" />
              </div>
              <div className="content">
                <div>
                  <span className='font-yellowtail text-[36px] text-Padua'>About Us</span>
                  <h2 className='mt-[8px] mb-[14px] font-roboto text-[50px] font-[800] leading-[59px] text-Arapawa'>We do Creative
                    Things for Success</h2>
                  <p className='mb-[50px] text-[18px] text-CityRain leading-[165%]'>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                  </p>
                  <p className=' text-[18px] text-CityRain leading-[165%]'>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                  </p>
                </div>
                <div className="flex gap-[65px] mt-[50px] mb-[58px]">
                  <div className="flex">
                    <Tractor />
                    <span className='font-roboto text-[25px] text-Arapawa leading-[29px] font-[500]'>Modern Agriculture Equipment</span>
                  </div>
                  <div className="flex">
                    <Factory />
                    <span className='font-roboto text-[25px] text-Arapawa leading-[29px] font-[500]'>No growth hormones are used</span>
                  </div>
                </div>
                <Button icon={<Arrow />}>Explore now</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-Arapawa py-[188px] text-white">
            <div className="container">
              <div className="flex flex-col gap-2 text-center mb-[35px]">
                <span className='font-yellowtail text-Padua text-[36px] leading-[49px]'>About Us</span>
                <h2 className='font-roboto text-[50px] font-[800] leading-[59px]'>What We Offer for You</h2>
              </div>
              <div className="flex justify-between text-center">
                <div className="flex flex-col gap-[25px]">
                  <div className="bg-white rounded-[30px]">
                    <img src={spicy} alt="spicy" />
                  </div>
                  <span className='font-roboto text-[25px] font-[500]'>Spicy</span>
                </div>
                <div className="flex flex-col gap-[25px]">
                  <div className="bg-white rounded-[30px]">
                    <img src={feeds} alt="feeds" />
                  </div>
                  <span className='font-roboto text-[25px] font-[500]'>Nuts & Feeds</span>
                </div>
                <div className="flex flex-col gap-[25px]">
                  <div className="bg-white rounded-[30px]">
                    <img src={fruits} alt="fruits" />
                  </div>
                  <span className='font-roboto text-[25px] font-[500]'>Fruits</span>
                </div>
                <div className="flex flex-col gap-[25px]">
                  <div className=" bg-[#fff] rounded-[30px]">
                    <img src={vegetables} alt="vegetables" />
                  </div>
                  <span className='font-roboto text-[25px] font-[500]'>Vegetables</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
