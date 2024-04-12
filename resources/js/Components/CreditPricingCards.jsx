import { usePage } from "@inertiajs/react";

export default function CreditPricingCards({packages, features}) {
    const { csrf_token } = usePage().props;
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4">
                <div className="text-centert mb-8">
                    <h2 className="mb-4 text-4xl font-extrabold text-white">The more credits you choose the bigger savings you will make.</h2>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {packages.map((p) => (
                        <div
                            key={p.id}
                            className="flex flex-col align-stretch p-6 mx-auto lg:mx-0 max-w-lg text-center rounded-lg border shadow border-gray-600 bg-gray-800 text-white"
                        >
                            <h3 className="mb-4 text-2xl font-semibold">
                                {p.name}
                            </h3>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold"> ${p.price} </span>
                                <span className="text-2xl dark:text-gray-400"> / {p.credits} credits </span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left">
                                {features.map((f) => (
                                    <li key={f.id} class="flex items-center space-x-3">
                                        <span>{f.name}</span>
                                    </li>
                                ))}
                            </ul>
                            <form action={route("credit.buy", p)} method="post" className="w-full">
                                <input type="hidden" name="_token" value={csrf_token} autoComplete="off" />
                                <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900">Get Started</button>
                            </form>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}