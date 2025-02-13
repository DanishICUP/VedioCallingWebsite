import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateMetting = () => {
    const navigate = useNavigate()
    const [roomid, setRoomId] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        // alert(`room id is capture ${roomid}`)
        navigate(`/metting/${roomid}`)
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>


            <form onSubmit={handleSubmit} className="w-[450px] p-4 shadow rounded-lg">
                <h1 className='text-center font-bold text-2xl italic mb-3 '>Create Metting</h1>
                <div className="mb-5">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Room:id</label>
                    <input type="number" onChange={(e) => setRoomId(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
            </form>

        </div>
    )
}

export default CreateMetting