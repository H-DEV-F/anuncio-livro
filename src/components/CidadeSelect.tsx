import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const CidadesSelect = () => {
    const [cidades, setCidades] = useState([]);

    useEffect(() => {
        fetch('./conts/cidades.json')
            .then((response) => response.json())
            .then((data) => setCidades(data))
            .catch((error) => console.error('Erro ao carregar as cidades:', error));
    }, []);

    return (
        <div className="sm:col-span-3">
            <label htmlFor="cidade" className="block text-sm/8 font-medium text-gray-400">
                Cidade:
            </label>
            <div className="mt-1 relative">
                <select
                    id="cidade"
                    name="cidade"
                    autoComplete="address-level2"
                    className="block w-full appearance-none rounded-md bg-white py-[3.5px] pr-8 pl-3 text-base text-gray-900 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="">Selecione uma cidade</option>
                    {cidades.map((cidade, index) => (
                        <option key={index} value={cidade}>
                            {cidade} - {cidade}
                        </option>
                    ))}
                </select>
                <ChevronDownIcon
                    className="pointer-events-none absolute right-2 top-1.5 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                />
            </div>
        </div>
    );
};

export default CidadesSelect;