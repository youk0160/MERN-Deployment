import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import banner from '../img/banner.jpg';
import others from '../img/others.jpeg';
import siding from '../img/siding.jpg';
import carpenter from '../img/carpenter.jpg';
import roofing from '../img/roofing.jpg';
import light from '../img/light.jpg';
import remodeling from '../img/remodeling.jpg';
import plumbing from '../img/plumbing.jpg';
// import { urlencoded } from 'express';

const Main = (props)=>{

    return(
        <>
            <div id='banner' style={{backgroundImage:'url(' + banner + ')'}}>
                {/* <h5 style={{ transform: 'translate(6vmax, 10vmin)', fontSize:'2.4vmax'}}>Reliable way to take care of your troubles</h5> */}
            </div>
            
            <div className='text-white' id='content'>
                <div className='contentRow bg-white mx-auto d-flex justify-content-between'>
                    <div>
                        <img src={carpenter} className='imgBlock' alt='ftf'></img>
                        <h4 className='txtCenter'>Carpenter</h4>
                    </div>

                    <div>
                        <img src={roofing} className='imgBlock' alt='ftf'></img>
                        <h4 className='txtCenter'>Roofing</h4>
                    </div>
                </div>

                <div className='contentRow bg-white mx-auto d-flex justify-content-between'>
                    <div>
                        <img src={light} className='imgBlock' alt='ftf'></img>
                        <h4 className='txtCenter'>Light/Electric</h4>
                    </div>
                    <div>
                        <img src={remodeling} className='imgBlock' alt='ftf'></img>
                        <h4 className='txtCenter'>Remodeling</h4>
                    </div>
                </div>
                
                <div className='contentRow mx-auto d-flex justify-content-between'>
                    <div>
                        <img src={siding} className='imgBlock' alt='ftf'></img>
                        <h4 className='txtCenter'>Siding</h4>
                    </div>
                    
                    <div>
                        <img src={plumbing} className='imgBlock' alt='ftf'></img>
                        <h4 className='txtCenter'>Plumbing</h4>
                    </div>
                </div>
                
                <div className='contentRow mx-auto'>
                    <div>
                        <img src={others} className='imgBlock' alt='ftf'></img>
                        <h4 className='txtCenter'>Others</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;