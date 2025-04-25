import React from "react";

//create your first component
const Home = () => {
	const [listValue , setListValue] = useState('lista');


// agregar y completar hook 


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">ToDo list</h1>
			<div>
				<input
				type="text"
				onChange={''}
				value={''}
				placeholder="Type your ToDo's"
				/>
			</div>

			<ul className="list-group col-4 text-center">
				<li className="list-group-item active" aria-current="true">An active item</li>
				<li className="list-group-item">A second item</li>
			</ul>
		</div>
	);
};

export default Home;