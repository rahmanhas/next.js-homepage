import Image from 'next/image'
import { FaUserAlt } from "react-icons/fa";
 const HomePage=()=> {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-7xl mx-auto">
      <div className='flex flex-row justify-between items-center gap-10'>
        <div>
            <h1 className='font-bold text-4xl '>Welcome Back</h1>
            <p className='py-10'>Check Out these Calendly benefits to more easily manage your team's scheduling</p>
            <button
            className='bg-[#046dec] text-white py-5 px-10 rounded-full inline-flex justify-center items-center'
            > <FaUserAlt/> My account</button>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
            <div className='px-5 py-10 shadow-xl rounded-xl'>
              <h2 className='text-xl font-bold'>Streamline Team Scheduling</h2>
              <p className='py-3'>Start booking webinars, co-hosted meetings, or even round-robin events automatically. To get started, simply invite team members to your account.</p>
              <p className='text-[#046dec] font-bold'>Learn more about Team Scheduling</p>
            </div>
            <div className='px-5 py-10 shadow-xl rounded-xl'>
              <h2 className='text-xl font-bold'>Avoid Cross-Calendar Conflicts</h2>
              <p className='py-3'>Add up to 6 calendars (business or personal) and eliminate double bookings with intelligent scheduling that cross-checks all your calendars.</p>
              <p className='text-[#046dec] font-bold'>Learn more about Calender Connections</p>
            </div>
        </div>
      </div>
    </main>
  )
}
export default HomePage;