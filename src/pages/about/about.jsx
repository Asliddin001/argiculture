import React from 'react'
import success_thing from '../../../public/mock-imges/success-thing.png';
import { Arrow, Button, Hero, Factory, Tractor } from '../../components/common';
import second from '../../../public/mock-imges/card-2.png'

export const About = () => {
  return (
    <div>
      <Hero content={"About Us"} backgroundImg={success_thing} />
      <div className="w-full py-[186px]">
        <div className="container">
          <div className="">
            <div className="flex">
              <div className="img">
                <img src={success_thing} alt="" />
              </div>
              <div className="content">
                <div>
                  <span>About Us</span>
                  <h2>We do Creative
                    Things for Success</h2>
                  <p className='mb-[50px]'>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                  </p>
                  <p>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                  </p>
                </div>
                <div className="flex gap-[65px] mt-[50px] mb-[58px]">
                  <div className="flex">
                    <Tractor />
                    <span>Modern Agriculture Equipment</span>
                  </div>
                  <div className="flex">
                    <Factory />
                    <span>No growth hormones are used</span>
                  </div>
                </div>
                <Button icon={<Arrow />}>Explore now</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-Arapawa py-[188px]">
            <span>About Us</span>
            <h2>What We Offer for You</h2>
            <div className="">
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
