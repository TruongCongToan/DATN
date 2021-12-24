import React from 'react';
import { useSelector } from 'react-redux';
import './HomeHeader.css';
import logo from '../../../assets/logo/logo.svg'
import Slider from "react-slick";

const HomeHeader = () => {
    //connect voi redux , lay ra du lieu
    const currentUser = useSelector(state => state.users);
    const isLogin = currentUser.loggedIn;
    const linkToDirect = isLogin ? '/' : '/login';

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <React.Fragment>        
        <div className = 'home-header-container' >
        <div className = ' home-header-content' >
            <div className = 'left-content' >
            <i className = "fas fa-bars" > </i> 

            <img src={logo} className='header-logo'/>
          <div className = 'header-logo'/>
            </div> 
        <div className = 'center-content' >

        <div className = 'child-content' >
            <div >
                <b >Chuyên khoa</b>
           </div> 
             <div className='sub-title'>
             Tìm kiếm bác sỹ theo chuyên khoa
             </div>
         </div>
         <div className = 'child-content' >
         <div >
                <b >Cơ sở y tế</b>
           </div> 
           <div className='sub-title'>
                Chọn bệnh viện, phòng khám
             </div>

         </div> 
         <div className = 'child-content' >
         <div >
                <b >Bác Sỹ</b>
           </div> 
           <div className='sub-title'>
                Chọn bác sỹ giỏi
             </div>
        </div> 
        
        <div className = 'child-content' >
        <div >
                <b >Gói Khám</b>
           </div> 
           <div className='sub-title'>
                Khám sức khỏe tổng hợp
             </div>
        </div>

    </div>
        
         <div className = 'right-content' >
            <div className='support'>
            <i className="fas fa-question-circle"></i>
            Hỗ trợ
            </div>
            <div className='language-vi'>VN</div>
            <div className='language-en'>EN</div>
        </div>
    </div>

        </div>
        <div className='home-header-banner'>
          <div className='content-up'>
          <div className='title-1'>
            NỀN TẢNG Y TẾ
            </div>
            <div className='title-2'>
            CHĂM SÓC SỨC KHỎE TOÀN DIỆN
            </div>
            <div className='search'>
            <i className="fas fa-search"></i>
                <input type='text' className='search-input' placeholder='Tìm kiếm...'/>
            </div>
          </div>
          <div className='content-down'>
            <div className='options'>
                <div className='options-child'>
                    <div className='icon-child'>
                       <i className="fas fa-stethoscope"></i>
                    </div>
                    <div className='text-child'>
                        Khám chuyên khoa
                    </div>
                </div>

                <div className='options-child'>
                    <div className='icon-child'>
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className='text-child'>
                        Khám từ xa
                    </div>
                </div>

                <div className='options-child'>
                    <div className='icon-child'>
                    <i className="fas fa-child"></i>
                    </div>
                    <div className='text-child'>
                        Khám tổng quát
                    </div>
                </div>

                <div className='options-child'>
                    <div className='icon-child'>
                 <i className="fas fa-thermometer"></i>
                    </div>
                    <div className='text-child'>
                        Xét nghiệm y học
                    </div>
                </div>

                <div className='options-child'>
                    <div className='icon-child'>
                    <i className="fas fa-running"></i>
                    </div>
                    <div className='text-child'>
                        Sức khỏe tinh thần
                    </div>
                </div>

                <div className='options-child'>
                    <div className='icon-child'>
                    <i className="fas fa-tooth"></i>
                    </div>
                    <div className='text-child'>
                        Khám nha khoa
                    </div>
                </div>
                 
                
            </div>
          </div>
        </div>
        </React.Fragment>
    );
}

export default HomeHeader;