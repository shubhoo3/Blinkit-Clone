import React from 'react'
import UserAccount from '../components/UserAccount.jsx'
import { IoClose } from "react-icons/io5";

const UserAccountMobile = () => {
    return (
        <section className='bg-white h-full w-full py-2'>
            <button onClick={() => window.history.back()} className='text-neutral-800 block w-fit ml-auto'>
                <IoClose size={25} />
            </button>
            <div className='container mx-auto px-3 pb-8'>
                <UserAccount />
            </div>
        </section>
    )
}

export default UserAccountMobile
