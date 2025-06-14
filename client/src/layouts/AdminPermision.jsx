import React from 'react'
import { useSelector } from 'react-redux'
import Admin from '../utils/Admin'
const AdminPermision = ({children}) => {
    const user = useSelector(state => state.user)


    return (
        <>
            {
                Admin(user.role) ? children : <p className='text-violet-600 bg-red-100 p-4'>Do not have permission</p>
            }
        </>
    )
}

export default AdminPermision
