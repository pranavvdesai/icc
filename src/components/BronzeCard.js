import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegCheckCircle } from 'react-icons/fa'

const BronzeCard = () => {
    return (
        <div className="py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 bg-gradient-to-r from-[#804A00] to-[#895E1A]">
            <h4 className="text-2xl text-white font-bold mx-5">
                Bronze
            </h4>
            <div className="flex mt-3">
                <div className="flex flex-col">
                    <div className="flex m-2">
                        <FaRegCheckCircle className="text-white mx-2 mt-1" />
                        <div className="text-white">
                            1 Ticket
                        </div>
                    </div>
                    <div className="flex m-2">
                        <FaRegCheckCircle className="text-white mx-2 mt-1" />
                        <div className="text-white">
                            Seat choice
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex m-2">
                        <FaRegCheckCircle className="text-white mx-2 mt-1" />
                        <div className="text-white">
                            Ticket Refund
                        </div>
                    </div>
                    <div className="flex m-2">
                        <FaRegCheckCircle className="text-white mx-2 mt-1" />
                        <div className="text-white">
                            Contest Entry
                        </div>
                    </div>
                </div>
            </div>
            {/* Put a bottom border here */}
            <div className="border-b border-white w-full m-2" />
            {/* div to display prize of the ticket */}
            <div className="flex mt-2 mx-2">
                <h1 className="text-2xl text-white font-semibold mx-3">₹ 200</h1>
            </div>
        </div >
    )
}

export default BronzeCard