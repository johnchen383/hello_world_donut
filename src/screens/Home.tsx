import { useEffect, useState, useRef } from "react";
import "../styles/screens/home.scss";
import Engine from "../engine/engine";

function Home() {
	const [engine, setEngine] = useState<Engine | null>(null);
    const engineRef = useRef<number>();

	useEffect(() => {
		setEngine(new Engine((ref: number) => { engineRef.current = ref; }));

		return () => {
            if (engineRef.current !== undefined) {
                window.cancelAnimationFrame(engineRef.current);
            }
        };
	}, []);

	return (
		<div className="home">
			<div className="title">Hello Donut World!</div>
			<div id="scene"></div>
			<div className="attribution">"Donut" (https://skfb.ly/oCW9I) by JoeDev is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</div>
		</div>
	);
}

export default Home;
