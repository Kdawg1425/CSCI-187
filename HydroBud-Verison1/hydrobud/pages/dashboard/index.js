
import React from 'react';
{/*import SemiCircleProgressBar from 'react-progressbar-semicircle';*/}
import Header from '../../components/Header'


const Dashboard = () => {
    return (
        <div className='w-screen h-screen'>
            <Header />
            <div style={{border: '1px solid black', height: '30vh'}}>
                <div style={{display: 'flex', width: '40vh'}}>
                    test
                </div>
                {/*<SemiCircleProgressBar percentage={33} showPercentValue/>*/}
            </div>
            
        </div>
    )
}

export default Dashboard