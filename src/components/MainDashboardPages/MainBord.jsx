import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import takaLogo from '../../assets/images/taka.png'
import bitcoinLogo from '../../assets/images/bitcoin.png'

const data = [
  { time: '7:15 PM', price: 26600 },
  { time: '12:55 AM', price: 26700 },
  { time: '6:35 AM', price: 26650 },
  { time: '12:15 PM', price: 26690 },
  { time: '5:55 PM', price: 26670 }
];

const MainBord = () => {
  return (

    <div className=" mt-6 bg-gray-100 min-h-screen max-w-6xl mx-auto">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 ">
        {/* Current Price + Graph */}
        <div className="bg-white rounded-xl shadow p-4  flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-gray-600 text-sm">Current Price</p>
              <p className="text-2xl font-bold">৳26,670.25 <span className="text-green-500 text-sm">▲ 0.04%</span></p>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm cursor-pointer">Buy</button>
              <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm cursor-pointer">Sell</button>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2 mt-2">
            <button className="bg-gray-200 px-3 py-1 rounded text-sm">1H</button>
            <button className="bg-purple-600 text-white px-3 py-1 rounded text-sm">1D</button>
            <button className="bg-gray-200 px-3 py-1 rounded text-sm">1W</button>
            <button className="bg-gray-200 px-3 py-1 rounded text-sm">1M</button>
          </div>

          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line type="monotone" dataKey="price" stroke="#8b5cf6" strokeWidth={2} />
                <XAxis dataKey="time" />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col">
          <p className="text-lg font-semibold mb-3">Recent Transactions</p>
          <div className="flex justify-between items-center p-4 ">
            <div className="flex items-center gap-2">
              <img src={bitcoinLogo}
                className="w-[25px]  bg-gray-300 rounded-full p-1"></img>
              <div>
                <p className="font-medium">BDT Deposit</p>
                <p className="text-xs text-gray-500">2022-06-09 7:06 PM</p>
              </div>
            </div>
            <p className="text-green-600 font-bold ">+ ৳81,123.10</p>
          </div>
          <hr className="w-10/12 border-t border-gray-300 mx-auto" />

          <div className="flex justify-between items-center p-4 ">
            <div className="flex items-center gap-2">
              <img src={bitcoinLogo}
                className="w-[25px]  bg-gray-300 rounded-full p-1"></img>
              <div>
                <p className="font-medium">BTC Sell</p>
                <p className="text-xs text-gray-500">2022-05-27 12:32 PM</p>
              </div>
            </div>
            <p className="text-red-600 font-bold">- 12.48513391 BTC</p>
          </div>
          <hr className="w-10/12 border-t border-gray-300 mx-auto" />


          <div className="flex justify-between items-center p-4 ">
            <div className="flex items-center gap-2 ">
              <img src={bitcoinLogo}
                className="w-[25px]  bg-gray-300 rounded-full p-1"></img>
              <div>
                <p className="font-medium">BDT Deposit</p>
                <p className="text-xs text-gray-500">2022-06-09 7:06 PM</p>
              </div>
            </div>
            <p className="text-green-600 font-bold">+ ৳81,123.10</p>
          </div>
          <hr className="w-10/12 border-t border-gray-300 mx-auto" />


          <button className="mt-5 bg-gray-200 hover:bg-gray-300 font-semibold text-gray-800 p-2 rounded-full cursor-pointer">View All</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white rounded-xl shadow p-4 flex flex-col">
          <button className="bg-purple-500 text-white px-2 py-1 rounded-full text-base w-fit mb-4 cursor-pointer">Loans</button>
          <p className="text-gray-700 text-base">
            Learn more about Loans – Keep your Bitcoin, access its <br /> value without selling it.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400
 rounded-xl shadow p-4 flex flex-col">
          <span className="bg-white text-purple-600 px-2 py-1 rounded-full text-base w-fit mb-4">Contact</span>
          <p className="text-white text-base">
            Learn more about our real estate, mortgage, and  <br />corporate account services.
          </p>
        </div>
      </div>
    </div>

  );
};

export default MainBord;