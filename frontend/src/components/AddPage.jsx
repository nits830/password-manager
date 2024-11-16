import React, { useState } from 'react'

const AddPage = () => {

    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
         
    }
  return (
    <div>
        <div className="flex justify-center items-center min-h-screen text-green-500">
            <form onSubmit={handleSubmit} className="bg-gray-200 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">Store Password</h2>

                {/* Email Input */}
                <div className="mb-4">
                    <label htmlFor="account" className="block text-gray-700">Account</label>
                    <input 
                        type="text" 
                        id="account" 
                        name="account" 
                        placeholder="Password for"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

               
                <button 
                    type="submit" 
                    className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Store
                </button>
            </form>
        </div>
      
    </div>
  )
}

export default AddPage
