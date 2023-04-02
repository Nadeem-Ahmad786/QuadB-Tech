import React, { useEffect, useState } from 'react'
import { getData } from '../api/product'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import {FaTelegramPlane} from 'react-icons/fa';
const Home = () => {
    const [data, setData] = useState("");

    useEffect(()=>{
        loadData()
    },[]);
    const loadData=()=>{
        getData()
        .then(response => {
            console.log(response.data.product)
            setData(response.data.product);
        })
    }
    const minuteSeconds = 60;
    const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
    };
    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 243248;
    const remainingTime = endTime - stratTime;
    const renderTime = (dimension, time) => {
        return (
          <div className="time-wrapper fw-bold">
            <div className="time" >{time}</div>
            <div style={{fontSize: "19px"}}>{dimension}</div>
          </div>
        );
      };
      const getTimeSeconds = (time) => (minuteSeconds - time) | 0;

  return (
    <div className='container-fluid min-vh-100 p-2 px-4'>
        <nav class="navbar ">
        <div class="container-fluid">
            <a class="navbar-brand " style={{width: "23%"}}><img src='https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png' className='w-100'/><span className='fs-3 text-white text-decoration-none fw-light'>.com</span></a>
            <div className='d-flex'>
            <select class="form-select form-select-lg text-white fw-bold mb-3 me-4" style={{width: "90px", backgroundColor: "#343a40"}} aria-label="Default select example">
                <option selected>INR</option>
            </select>
            <select class="form-select form-select-lg text-white fw-bold mb-3" style={{width: "90px", backgroundColor: "#343a40"}} aria-label="Default select example">
                <option selected>BTC</option>
                <option>ETH</option>
                <option>USDT</option>
                <option>XRP</option>
                <option>TRX</option>
                <option>DASH</option>
                <option>ZEC</option>
                <option>XEM</option>
                <option>IOST</option>
                <option>WIN</option>
                <option>BTT</option>
                <option>WRX</option>
            </select>
            </div>
            <div className='d-flex'>
            <CountdownCircleTimer 
        {...timerProps}
        colors="#218380"
        size={37}
        strokeWidth={3}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime(getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <button type="button" class="btn text-white m-0 mx-3 p-2 py-0 rounded" style={{backgroundColor : "#3dc6c1"}}><FaTelegramPlane className='me-1'/>Connect Telegram</button>
        <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
        </label>  
        </div>
        </div>
        </nav>  
        <p className='text-secondary mt-2 ps-3'>Powered By <span style={{color: "#3dc6c1"}}>Finstreet</span></p>
      
        <table class="table table-borderless text-center" style={{borderCollapse: 'separate', borderSpacing: "0 1em"}}>
            <thead>
                <tr className='text-secondary fs-5'>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">Last</th>
                    <th scope="col">Buy / Sell Price</th>
                    <th scope="col">volume</th>
                    <th scope="col">base_unit</th>
                </tr>
            </thead>
            <tbody>
        { data && data.map((element,i)=>{
            return (
                <tr className='text-white fs-5 fw-bold ' style={{backgroundColor: "#2e3241" }}> 
                    <th scope="row">{i+1}</th>
                    <td className='align-middle'>{element.name}</td>
                    <td className='align-middle'>₹ {element.last}</td>
                    <td className='align-middle'>₹ {element.buy} / ₹ {element.sell}</td>
                    <td className='align-middle'>{element.volume}</td>
                    <td className='align-middle'>{element.base_unit}</td>
                </tr>
        )})}
        </tbody>
    </table>
    </div>
  )
}

export default Home