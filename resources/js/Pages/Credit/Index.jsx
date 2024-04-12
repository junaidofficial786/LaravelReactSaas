import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import CreditPricingCards from '@/Components/CreditPricingCards'

export default function Index({ auth, packages, features, success, error }) {
    const availableCredits = auth.user.available_credits;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Credits
                </h2>
            }

        >
            <Head title="Your Credits" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && <div className="mb-3 py-3 px-5 rounded text-white text-xl bg-emerald-600">{success}</div>}
                    {error && <div className="mb-3 py-3 px-5 rounded text-white text-xl bg-red-600">{error}</div>}

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg relative">
                        <div className="p-4 flex flex-col gap-3 items-center">
                            <img src="/images/coin.png" alt="
                            coin image" className="w-[100px]" />
                            <h3 className="text-white">You have {availableCredits} credits</h3>
                        </div>
                    </div>
                    <CreditPricingCards packages={packages.data} features={features.data} />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}