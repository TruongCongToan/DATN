import React from 'react'
import './OutStandingDoctor.css'
import Slider from "react-slick";

const OutStandingDoctor = (props) => {
    return (
       <div className='section-share'>

        <div className='section-outstanding-doctor'>
          <div className='section-container'>
            
            <div className='section-header'>
                <span className='section-title'>Bác sỹ nổi bật</span>
                <button className='btn-section'>Xem thêm</button>
            </div>

          <div className='section-body'>
          <Slider {...props.settings}>

          <div className=' section-custom'>
            <div className='custom-boder'>
              <div className='outer-bg'>
                 <div className='bg-img-bacsy'/>
              </div>
              <div className='position text-center'>
                <div className='position-custom-title' >Giáo sư,Tiến Sĩ Trương Công Toàn</div>
                <div>Cơ xương khớp 1</div>
              </div>     
            </div>
            </div>
        
              <div className=' section-custom'>
            <div className='custom-boder'>
              <div className='outer-bg'>
                 <div className='bg-img-bacsy'/>
              </div>
              <div className='position text-center'>
                <div className='position-custom-title' >Giáo sư,Tiến Sĩ Trương Công Toàn</div>
                <div>Cơ xương khớp 2</div>
              </div>     
            </div>
            </div>

               <div className=' section-custom'>
            <div className='custom-boder'>
              <div className='outer-bg'>
                 <div className='bg-img-bacsy'/>
              </div>
              <div className='position text-center'>
                <div className='position-custom-title' >Giáo sư,Tiến Sĩ Trương Công Toàn</div>
                <div>Cơ xương khớp 3</div>
              </div>     
            </div>
            </div>
        
            <div className=' section-custom'>
            <div className='custom-boder'>
              <div className='outer-bg'>
                 <div className='bg-img-bacsy'/>
              </div>
              <div className='position text-center'>
                <div className='position-custom-title' >Giáo sư,Tiến Sĩ Trương Công Toàn</div>
                <div>Cơ xương khớp 4</div>
              </div>     
            </div>
            </div>

            <div className=' section-custom'>
            <div className='custom-boder'>
              <div className='outer-bg'>
                 <div className='bg-img-bacsy'/>
              </div>
              <div className='position text-center'>
                <div className='position-custom-title' >Giáo sư,Tiến Sĩ Trương Công Toàn</div>
                <div>Cơ xương khớp 5</div>
              </div>     
            </div>
            </div>

            <div className=' section-custom'>
            <div className='custom-boder'>
              <div className='outer-bg'>
                 <div className='bg-img-bacsy'/>
              </div>
              <div className='position text-center'>
                <div className='position-custom-title' >Giáo sư,Tiến Sĩ Trương Công Toàn</div>
                <div>Cơ xương khớp 6</div>
              </div>     
            </div>
            </div>
          

            </Slider>
            </div>
            
           </div>
          </div>
      </div>  
    );
}

export default OutStandingDoctor
