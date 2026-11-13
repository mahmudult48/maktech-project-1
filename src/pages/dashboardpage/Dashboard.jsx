
import React from 'react';

const Dashboard = () => {

    const stats = [
        {
            id: 1,
            title: 'Total Products',
            value: '120',
            icon: '📦',
            color: 'bg-blue-100'
        },
        {
            id: 2,
            title: 'Total Orders',
            value: '85',
            icon: '🛒',
            color: 'bg-green-100'
        },
        {
            id: 3,
            title: 'Total Revenue',
            value: '$5,250',
            icon: '💰',
            color: 'bg-yellow-100'
        },
        {
            id: 4,
            title: 'Customers',
            value: '350',
            icon: '👥',
            color: 'bg-purple-100'
        }
    ];

    const orders = [
        {
            id: '#1001',
            customer: 'John Doe',
            product: 'Wireless Headphone',
            amount: '$120',
            status: 'Completed'
        },
        {
            id: '#1002',
            customer: 'Alex Smith',
            product: 'Smart Watch',
            amount: '$90',
            status: 'Pending'
        },
        {
            id: '#1003',
            customer: 'David Miller',
            product: 'Digital Camera',
            amount: '$250',
            status: 'Completed'
        }
    ];

    return (
        <div className="space-y-8">

            {/* Dashboard Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Dashboard Overview
                </h1>

                <p className="text-gray-500 mt-2">
                    Welcome back! Here is your business overview.
                </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {stats.map(stat => (
                    <div
                        key={stat.id}
                        className="bg-white p-6 rounded-xl shadow-md"
                    >
                        <div className="flex justify-between items-center">

                            <div>
                                <p className="text-gray-500">
                                    {stat.title}
                                </p>

                                <h2 className="text-3xl font-bold text-gray-800 mt-3">
                                    {stat.value}
                                </h2>
                            </div>

                            <div className={`${stat.color} text-3xl p-4 rounded-xl`}>
                                {stat.icon}
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* Recent Orders */}
            <section className="bg-white rounded-xl shadow-md overflow-hidden">

                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Recent Orders
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Latest customer orders
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">

                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-4">Order ID</th>
                                <th className="p-4">Customer</th>
                                <th className="p-4">Product</th>
                                <th className="p-4">Amount</th>
                                <th className="p-4">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id} className="border-b">

                                    <td className="p-4 font-medium">
                                        {order.id}
                                    </td>

                                    <td className="p-4">
                                        {order.customer}
                                    </td>

                                    <td className="p-4">
                                        {order.product}
                                    </td>

                                    <td className="p-4 font-semibold">
                                        {order.amount}
                                    </td>

                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-sm ${
                                            order.status === 'Completed'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </section>

        </div>
    );
};

export default Dashboard;
