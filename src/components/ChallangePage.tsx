import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DrawingInput from "./DrawingInput";

const ChallengePage = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        bridgeMeaning: "",
        enigma2_1: "",
        enigma2_2: "",
        enigma2_3: "",
        enigma2_4: "",
        enigma2_5: "",
        enigma2_6: "",
        enigma3_1: "",
        enigma3_2: "",
        enigma3_3: "",
        enigma3_a_1: "",
        enigma3_a_2: "",
        enigma3_a_3: "",
        enigma3_b_1: "",
        enigma3_b_2: "",
        enigma3_b_3: "",
        enigma4_1: "",
        enigma4_2: "",
        enigma4_3: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
    };

    const handleSave = (imageData:any) => {
        console.log('Imagem salva:', imageData);
        // Aqui você pode enviar a imagem para o servidor ou fazer o que quiser com ela
    };

    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-xl bg-black/30 p-8 rounded-2xl shadow-[0_4px_30px_rgba(59,130,246,0.2)] border border-blue-300/10 backdrop-blur-md mb-20">
                <h2 className="text-2xl font-bold mb-6 text-center text-white font-custom-playerfair">
                    O MAIOR ENIGMA DE TODOS OS TEMPOS
                </h2>

                {step === 1 && (
                    <>
                        <h3 className="text-2xl font-bold mb-6 text-center text-white/80">Informe seus Dados:</h3>
                        <form onSubmit={handleNext}>
                            <div className="space-y-12 text-white">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-400">Nome:</label>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                                            required
                                        />
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-400">Sobrenome:</label>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                                            required
                                        />
                                    </div>
                                    <div className="sm:col-span-6">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email:</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <NavLink to="/app">
                                    <button type="button" className="text-sm font-semibold text-gray-400">Voltar</button>
                                </NavLink>
                                <button
                                    type="submit"
                                    className="rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    Iniciar
                                </button>
                            </div>
                        </form>
                    </>
                )}

                {step === 2 && (
                    <form onSubmit={handleNext}>
                        <h3 className="text-xl font-bold mb-6 text-white/80 text-center">O que é a ponte?</h3>
                        <div className="mb-6">
                            <label htmlFor="bridgeMeaning" className="block text-sm font-medium text-white/80 mb-2 text-left">
                                Responda com suas palavras:
                            </label>
                            <textarea
                                id="bridgeMeaning"
                                name="bridgeMeaning"
                                value={formData.bridgeMeaning}
                                onChange={handleChange}
                                rows={4}
                                className="w-full rounded-md px-3 py-2 text-gray-900 text-base bg-white outline-gray-300 focus:outline-indigo-600"
                                required
                            />
                        </div>
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="text-sm font-semibold text-gray-400">Voltar</button>
                            <button type="submit" className="rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-colors">
                                Proximo
                            </button>
                        </div>
                    </form>
                )}

                {step === 3 && (
                    <form onSubmit={handleNext}>
                        <h3 className="text-xl font-bold mb-6 text-white/80 text-center">Enigma 1:</h3>
                        <div className="space-y-4 mb-6">
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                                <div key={`enigma2_${n}`} className="flex items-center gap-4">
                                    <label
                                        htmlFor={`enigma2_${n}`}
                                        className="text-sm font-medium text-white/80 w-2"
                                    >
                                        {n}:
                                    </label>
                                    <input
                                        id={`enigma2_${n}`}
                                        name={`enigma2_${n}`}
                                        value={formData[`enigma2_${n}` as keyof typeof formData]}
                                        onChange={handleChange}
                                        className="flex-1 rounded-md px-3 py-2 text-gray-900 text-base bg-white outline-gray-300 focus:outline-indigo-600"
                                        maxLength={999}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="text-sm font-semibold text-gray-400">Voltar</button>
                            <button type="submit" className="rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-colors">
                                Proximo
                            </button>
                        </div>
                    </form>
                )}

                {step === 4 && (
                    <form onSubmit={handleNext}>
                        <h3 className="text-xl font-bold mb-6 text-white/80 text-center">Enigma 2:</h3>
                        <div className="space-y-4 mb-6">
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                                <div key={`enigma3_${n}`} className="flex items-center gap-4">
                                    <label
                                        htmlFor={`enigma3_${n}`}
                                        className="text-sm font-medium text-white/80 w-2"
                                    >
                                        {n}:
                                    </label>
                                    <input
                                        id={`enigma3_${n}`}
                                        name={`enigma3_${n}`}
                                        value={formData[`enigma3_${n}` as keyof typeof formData]}
                                        onChange={handleChange}
                                        className="flex-1 rounded-md px-3 py-2 text-gray-900 text-base bg-white outline-gray-300 focus:outline-indigo-600"
                                        maxLength={999}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="text-sm font-semibold text-gray-400">Voltar</button>
                            <button type="submit" className="rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-colors">
                                Proximo
                            </button>
                        </div>
                    </form>
                )}

                {step === 5 && (
                    <form onSubmit={handleNext}>
                        <h3 className="text-xl font-bold mb-6 text-white/80 text-center">Enigma 3:</h3>
                        <h4 className="text-xl font-bold mb-6 text-white/80 text-center">Onde estamos?</h4>
                        <span>Faça uma forma geometrica:</span>
                        <div className="space-y-4 mb-6">
                            <DrawingInput onSave={handleSave} />
                        </div>
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="text-sm font-semibold text-gray-400">Voltar</button>
                            <button type="submit" className="rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-colors">
                                Proximo
                            </button>
                        </div>
                    </form>
                )}

                {step === 6 && (
                    <form onSubmit={handleNext}>
                        <h3 className="text-xl font-bold mb-6 text-white/80 text-center">Enigma 3:</h3>
                        <h4 className="text-xl font-bold mb-6 text-white/80 text-center">O que sou?</h4>
                        <span className="font-color-white">A:</span>
                        <div className="space-y-4 mb-6">
                            {[1, 2, 3].map((n) => (
                                <div key={`enigma3_a_${n}`} className="flex items-center gap-4">
                                    <label
                                        htmlFor={`enigma3_a_${n}`}
                                        className="text-sm font-medium text-white/80 w-2"
                                    >
                                        {n}:
                                    </label>
                                    <input
                                        id={`enigma3_a_${n}`}
                                        name={`enigma3_a_${n}`}
                                        value={formData[`enigma3_a_${n}` as keyof typeof formData]}
                                        onChange={handleChange}
                                        className="flex-1 rounded-md px-3 py-2 text-gray-900 text-base bg-white outline-gray-300 focus:outline-indigo-600"
                                        maxLength={999}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <span className="font-color-white">B:</span>
                        <div className="space-y-4 mb-6">
                            {[1, 2, 3].map((n) => (
                                <div key={`enigma3_b_${n}`} className="flex items-center gap-4">
                                    <label
                                        htmlFor={`enigma3_b_${n}`}
                                        className="text-sm font-medium text-white/80 w-2"
                                    >
                                        {n}:
                                    </label>
                                    <input
                                        id={`enigma3_b_${n}`}
                                        name={`enigma3_b_${n}`}
                                        value={formData[`enigma3_b_${n}` as keyof typeof formData]}
                                        onChange={handleChange}
                                        className="flex-1 rounded-md px-3 py-2 text-gray-900 text-base bg-white outline-gray-300 focus:outline-indigo-600"
                                        maxLength={999}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="text-sm font-semibold text-gray-400">Voltar</button>
                            <button type="submit" className="rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-colors">
                                Proximo
                            </button>
                        </div>
                    </form>
                )}

                {step === 7 && (
                    <form onSubmit={handleNext}>
                        <h3 className="text-xl font-bold mb-6 text-white/80 text-center">Enigma 3:</h3>
                        <h4 className="text-xl font-bold mb-6 text-white/80 text-center">Como entender a realidade?</h4>
                        <div className="space-y-4 mb-6">
                            {[1, 2, 3].map((n) => (
                                <div key={`enigma4_${n}`} className="flex items-center gap-4">
                                    <label
                                        htmlFor={`enigma4_${n}`}
                                        className="text-sm font-medium text-white/80 w-2"
                                    >
                                        {n}:
                                    </label>
                                    <input
                                        id={`enigma4_${n}`}
                                        name={`enigma4_${n}`}
                                        value={formData[`enigma4_${n}` as keyof typeof formData]}
                                        onChange={handleChange}
                                        className="flex-1 rounded-md px-3 py-2 text-gray-900 text-base bg-white outline-gray-300 focus:outline-indigo-600"
                                        maxLength={999}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="text-sm font-semibold text-gray-400">Voltar</button>
                            <button type="submit" className="rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-colors">
                                Proximo
                            </button>
                        </div>
                    </form>
                )}

                {step === 8 && (
                    <form onSubmit={handleNext}>
                        <h3 className="text-xl font-bold mb-6 text-white/80 text-center">Enigma 3:</h3>
                        <h4 className="text-xl font-bold mb-6 text-white/80 text-center">Como é a realidade?</h4>
                        <span>Faça uma forma geometrica:</span>
                        <div className="space-y-4 mb-6">
                            <DrawingInput onSave={handleSave} />
                        </div>
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="text-sm font-semibold text-gray-400">Voltar</button>
                            <button type="submit" className="rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-colors">
                                Enviar
                            </button>
                        </div>
                    </form>
                )}

                {step === 9 && (
                    <div className="text-white text-center space-y-6">
                        <h3 className="text-2xl font-bold">Desafio enviado com sucesso!</h3>
                        <p className="text-lg">Muito obrigado por participar. Em breve você receberá novidades.</p>
                        <NavLink to="/app">
                            <button className="text-sm font-semibold text-gray-400 underline mt-4">Voltar</button>
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChallengePage;