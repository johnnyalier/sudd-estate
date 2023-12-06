import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const date = new Date()
    return (
        <footer className='fixed h-28 bottom-0 w-full bg-slate-700 shadow-slate-800 flex-col p-5 text-white text-center'>
            <div className='flex justify-between items-center max-w-6xl mx-auto'>
                <div>
                    <Link to='/conditions'>Terms & Conditions</Link>
                </div>
                <div className='flex justify-between gap-8 text-white uppercase'>
                    <Link to='/about'>
                        <h3 className=''>About</h3>
                    </Link>
                    <Link to='/'>
                        <h3 className='/home'>Home</h3>
                    </Link>
                    <Link to='/contact-us'>
                        <h3 className=''>Contact Us</h3>
                    </Link>
                </div>
                <div>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                </div>
            </div>
            <h3 className='p-4'>Copyright &copy; {date.getFullYear()} SuddEstate | All rights Reserved</h3>
        </footer>
    )
}

export default Footer