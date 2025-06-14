import './App.css'
import Header from './components/Header.jsx'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import getUserDetails from './utils/getUserDetails.js';
import { setUserDetails } from './store/userSlice.js'
import { setAllCategory, setAllSubCategory, setLoadingCategory } from './store/productSlice.js';
import { useDispatch } from 'react-redux'
import SummaryApi from './configApi/SummaryApi.js';
import Axios from './utils/Axios.js';
import GlobalProvider from './provider/GlobalProvider';
import CartMobileLink from './components/CartMobile';
function App() {
  const dispatch = useDispatch()
  const location = useLocation()

  const getUser = async () => {
    const userData = await getUserDetails()
    dispatch(setUserDetails(userData.data))
  }

  const fetchCategory = async () => {
    try {
      dispatch(setLoadingCategory(true))
      const response = await Axios({
        ...SummaryApi.getCategory
      })
      const { data: responseData } = response

      if (responseData.success) {
        dispatch(setAllCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name))))
      }
    } catch (error) {

    } finally {
      dispatch(setLoadingCategory(false))
    }
  }

  const fetchSubCategory = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.getSubCategory
      })
      const { data: responseData } = response

      if (responseData.success) {
        dispatch(setAllSubCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name))))
      }
    } catch (error) {

    } finally {
    }
  }

  useEffect(() => {
    getUser(),
      fetchCategory(),
      fetchSubCategory()
  }, [])

  return (
    <GlobalProvider>
      <Header />
      <main className='min-h-[78vh]'>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
      
      {
        location.pathname !== '/checkout' && (
          <CartMobileLink />
        )
      }
        
    </GlobalProvider>

  )

}

export default App
