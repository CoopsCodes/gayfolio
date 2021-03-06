import React from "react";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<div className="icon rain">
				<div className="rainbow"></div>
			</div>
			<div className="icon uni">
				<div className="unicorn"></div>
			</div>
			<div className="icon fl">
				<div className="flag"></div>
			</div>
			<div className="icon ca">
				<div className="cat"></div>
			</div>
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
// <span role="img" aria-label="unicorn" className="icon">
// 						🦄
// 					</span>
