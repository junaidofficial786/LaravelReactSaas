import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const renderObject = (obj, indentLevel) => {
    return (
        <div style={{ marginLeft: `${indentLevel * 20}px` }}>
            {Object.keys(obj).map((key, index) => (
                <div key={index}>
                    <strong>{key}:</strong> {typeof obj[key] === 'object' ? renderObject(obj[key], indentLevel + 1) : obj[key]}
                </div>
            ))}
        </div>
    );
}

export default function Dashboard({ auth, usedFeatures }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Feature
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Credits
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Date
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Additional Data
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usedFeatures.data.map((usedFeature) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {usedFeature.feature.name}
                                            </th>
                                            <td class="px-6 py-4">
                                                {usedFeature.credits}
                                            </td>
                                            <td class="px-6 py-4">
                                                {usedFeature.created_at}
                                            </td>
                                            <td class="px-6 py-4">
                                                {renderObject(usedFeature, 0)}
                                            </td>
                                        </tr>
                                    ))}
                                    {!usedFeatures.data.length && (
                                        <tr>
                                            <td colSpan="4" className='text-center p-8'>
                                                No feature used yet.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination links={usedFeatures.meta.links} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
