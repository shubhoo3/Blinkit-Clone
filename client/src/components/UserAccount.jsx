import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Divider from './Divider'
import Axios from '../utils/Axios'
import SummaryApi from '../configApi/SummaryApi'
import { logout } from '../store/userSlice.js'
import toast from 'react-hot-toast'
import AxiosToastError from '../utils/AxiosToastError'
import { HiOutlineExternalLink } from "react-icons/hi";
import Admin from '../utils/Admin.js'

const UserAccount = ({ close }) => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const response = await Axios({
                ...SummaryApi.logout
            })

            if (response.data.success) {
                if (close) {
                    close()
                }
                dispatch(logout())
                localStorage.clear()
                toast.success(response.data.message)
                navigate("/")
            }

        }
        catch (error) {
            console.log(error)
            AxiosToastError(error)
        }

    }
    const handleClose = () => {
        if (close) {
            close()
        }
    }
    return (
        <div>
            <div className='font-semibold'>My Account</div>
            <div className='text-sm flex items-center gap-2'>
                <span className='max-w-52 text-ellipsis line-clamp-1'>{user.name || user.mobile} <span className='text-medium text-violet-600'>{user.role === "ADMIN" ? "(Admin)" : ""}</span></span>
                <Link onClick={handleClose} to={"/dashboard/profile"} className='hover:text-primary-200'>
                    <HiOutlineExternalLink size={15} />
                </Link>
            </div>
            <Divider />
            <div className='text-sm grid gap-1'>
                {
                    Admin(user.role) && (
                        <Link to={"/dashboard/category"} onClick={handleClose} className='px-2 hover:bg-yellow-100 py-1'>Category</Link>
                    )
                }

                {
                    Admin(user.role) && (
                        <Link to={"/dashboard/sub-category"} onClick={handleClose} className='px-2 hover:bg-yellow-100 py-1'>Sub Category</Link>
                    )
                }

                {
                    Admin(user.role) && (
                        <Link to={"/dashboard/upload-product"} onClick={handleClose} className='px-2 hover:bg-yellow-100 py-1'>Upload Product</Link>
                    )
                }
                {
                    Admin(user.role) && (
                        <Link to={"/dashboard/product"} onClick={handleClose} className='px-2 hover:bg-yellow-100 py-1'> Product</Link>
                    )
                }

                <Link to={"/dashboard/myorders"} onClick={handleClose} className='px-2 hover:bg-yellow-100 py-1'>My orders</Link>
                <Link to={"/dashboard/address"} onClick={handleClose} className='px-2 hover:bg-yellow-100 py-1'>Save Address</Link>
                <button className='text-left px-2 hover:bg-green-100 py-1' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default UserAccount
