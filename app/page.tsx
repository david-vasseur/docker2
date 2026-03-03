import React from "react";

async function fetchAge(name: string) {
	const res = await fetch(`https://api.agify.io/?name=${name}`);
	const data = await res.json();
	return data; // { name: "michael", age: 69, count: 12345 }
}

export default async function Home() {
	const ageData = await fetchAge("michael");

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<h1 className="text-5xl text-red-600 mb-4">DOCKER 2</h1>
			<p className="text-xl text-gray-700 dark:text-white">
				Nom : {ageData.name} <br />
				Âge estimé : {ageData.age} ans
			</p>
		</div>
	);
}