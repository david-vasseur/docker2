"use client"

import { useState } from "react";

async function fetchAge(name: string) {
	const res = await fetch(`https://api.agify.io/?name=${name}`);

	const data = await res.json();

	return data;
}



export default function Home() {

	const [name, setName] = useState("");
	const [result, setResult] = useState("Aucun nom enregistré");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (name) {
			const res = await fetchAge(name);
			res.age
				? setResult(`Age estimé : ${res.age}`)
				: setResult("Aucun résultat");
		}
	};

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<h1 className="text-5xl text-red-600 mb-4">TEST DOCKER 2</h1>
			<form  onSubmit={handleSubmit} className="flex flex-col gap-8 p-5 bg-zinc-400 rounded-2xl">
				<div className="flex flex-col gap-2">
					<label className="text-center" htmlFor="name">Entrez un nom</label>
					<input onChange={(e) => {setName (e.target.value)}} className="bg-gray-600 text-zinc-200 rounded-2xl px-4 h-10" type="text" name="name" id="name" />
				</div>				
				<button className="px-4 py-2 h-10 rounded-2xl bg-gray-900 text-zinc-100 cursor-pointer" type="submit">Valider</button>
			</form>
			<p className="text-xl text-gray-700">{result}</p>
		</div>
	);
}