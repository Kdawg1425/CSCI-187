import { withRouter } from 'next/router'
import React from 'react'
import Alert from './Alert'
import Link from 'next/link'



const Header = ({children}) => {
    return (
        <div>
            <div className='bg-gradient-to-br from-[#92B4A7] to-[#A9D978]'>
                <div className='flex flex-row w-screen h-1/6 max-h-[10rem]'>
                    <div style={{color: 'white',display: 'flex', width: '200vh', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 50}}>
                        <h1>HydroBud</h1>
                    </div>
                </div>
                <div className='flex flex-row w-screen h-1/5 max-h-[10rem]'>
                    {/*Home Tab*/}
                    <div>
                        <Link href = "/dashboard">
                        <div style={{color: 'white', display: 'flex', width: '40vh', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 5}}>
                            Home
                        </div>
                        </Link> 
                    </div>
                    {/*Devices Tab*/}

                    <div>
                        <Link href = "/Devices"> {/*Need to add this... Also need to change to be dynamic and move with window size*/}
                        <div style={{color: 'white', display: 'flex', width: '10vh', marginLeft: 850, justifyContent: 'center', alignItems: 'center'}}>
                            Devices
                        </div>
                        </Link> 
                    </div>
                    {/*Account Tab*/}
                    <div>
                        <Link href = "/Account"> {/*Need to add this... May delete later*/}
                        <div style={{color: 'white', display: 'flex', width: '10vh', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                            Account
                        </div>
                        </Link> 
                    </div>
                    {/*Logout Tab*/}
                    <div> 
                        <Link href = "/login">
                        <div style={{color: 'white', display: 'flex', width: '10vh', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                            Logout
                        </div>
                        </Link> 
                    </div> 

                </div>
            </div>
        </div>
        
        
        
            
    )
}

export default Header