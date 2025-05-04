import React from "react";

const ChallengePage = () => (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-12">
        <div
            id="contato"
            className="w-full max-w-xl bg-black/30 p-8 rounded-2xl shadow-[0_4px_30px_rgba(59,130,246,0.2)] border border-blue-300/10 scroll-mt-24 backdrop-blur-md"
            style={{ marginBottom: "100px" }}>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 font-color-white font-custom-playerfair">O MAIOR ENIGMA DE TODOS OS TEMPOS</h2>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 font-color-white">Preencha o Desafio</h3>
            <form>
                <div className="space-y-12 font-color-white">
                    <div className="border-b border-gray-900/10 pb-12">

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="first-name" className="block text-sm/8 font-medium text-gray-400">
                                    Nome:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="last-name" className="block text-sm/8 font-medium text-gray-400">
                                    Sobrenome:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm/8 font-medium text-gray-400">
                                    Email.:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm/6 font-semibold text-gray-400">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export default ChallengePage;