import React, { useState } from 'react';
import HeaderDashboard from './Header';

function ContactQueries() {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState('');

    const tableItems = [
        {
            "first_name": "Ali",
            "last_name": "Ahmad",
            "phone_number": "2197383489123",
            "Email": "abc@gmail.com",
            "Message": "Nice Animes"
        },
        {
            "first_name": "Sarah",
            "last_name": "Johnson",
            "phone_number": "4157389023412",
            "Email": "sarah.j@example.com",
            "Message": "Love watching anime!"
        },
        {
            "first_name": "Mohammed",
            "last_name": "Khan",
            "phone_number": "6174590876234",
            "Email": "m.khan@example.com",
            "Message": "Anime enthusiast here!"
        },
        {
            "first_name": "Emily",
            "last_name": "Chang",
            "phone_number": "8325697812345",
            "Email": "emilyc@example.com",
            "Message": "Obsessed with anime!"
        },
        {
            "first_name": "Carlos",
            "last_name": "Garcia",
            "phone_number": "3057892345678",
            "Email": "cgarcia@example.com",
            "Message": "Looking for new anime recommendations!"
        },
        {
            "first_name": "Aiko",
            "last_name": "Tanaka",
            "phone_number": "8134906578321",
            "Email": "aiko.t@example.com",
            "Message": "Anime addict forever!"
        }
    ];

    const openDialog = (message) => {
        setSelectedMessage(message);
        setDialogVisible(true);
    };

    return (
        <>
        <HeaderDashboard/>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-40">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl underline underline-offset-1">
                        Contact Queries
                    </h3>
                </div>
            </div>
            <div className="mt-12 relative h-max overflow-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 pr-6">First_Name</th>
                            <th className="py-3 pr-6">Last_Name</th>
                            <th className="py-3 pr-6">Phone_No.</th>
                            <th className="py-3 pr-6">Email</th>
                            <th className="py-3 pr-6">Message.</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.first_name}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.last_name}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        {item.phone_number}
                                    </td>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.Email}</td>
                                    <td className="text-left whitespace-nowrap">
                                        <button
                                            onClick={() => openDialog(item.Message)}
                                            className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg"
                                        >
                                            Message
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {dialogVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 bg-white p-6 rounded-lg w-[50vw]">
                        <h3 className="text-xl font-semibold mb-4">Message</h3>
                        <p>{selectedMessage}</p>
                        <button
                            onClick={() => setDialogVisible(false)}
                            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default ContactQueries;
