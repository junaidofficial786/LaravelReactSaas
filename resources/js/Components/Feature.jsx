import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, Head, Link } from '@inertiajs/react';

export default function Feature({ auth, feature, answer, children }) {
    // const { auth } = usePage().props; // another way to get information of authenticated user from props
    const availableCredits = auth.user.available_credits;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-3xl text-gray-800 dark:text-gray-200 leading-tight">
                    {feature.name}
                </h2>
            }
        >
            <Head title="Feature 1" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {answer !== null && (
                        <div className="mb-3 py-3 px-5 rounded text-white text-xl bg-emerald-600">
                            Result of calculation: {answer}
                        </div>
                    )}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg relative">
                        {availableCredits !== null && feature.required_credits > availableCredits && (
                            <div className="absolute top-0 right-0 left-0 bottom-0 z-20 flex flex-col items-center justify-center bg-white/70 gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                                <div>
                                    You don not have enough credits for this feature. Go {""}
                                    <Link href={route('credit.index')} className="underline">Buy more credits</Link>
                                </div>
                            </div>
                        )}
                        <div>
                            <div className="p-4 flex dark:text-white gap-10 justify-center italic">
                                <p>Required Credits: {feature.required_credits}</p> 
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}