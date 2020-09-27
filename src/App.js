import React from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					<span role="img" aria-label="man shrugging">
						🤷🏼‍♂️
					</span>{" "}
					i'm here{" "}
					<span role="img" aria-label="woman sassing">
						💁🏼‍♀️
					</span>
				</p>
				<p>
					<span role="img" aria-label="rainbow flag">
						🏳️‍🌈
					</span>{" "}
					i'm queer{" "}
					<span role="img" aria-label="rainbow">
						🌈
					</span>
				</p>
				<p>
					<span role="img" aria-label="construction female">
						👷‍♀️
					</span>{" "}
					i'm under construction{" "}
					<span role="img" aria-label="construction">
						🚧
					</span>
				</p>
			</header>
		</div>
	);
}

export default App;
