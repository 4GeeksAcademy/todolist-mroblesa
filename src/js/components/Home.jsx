import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from  '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


//create your first component
const Home = () => {
	const [listValue , setListValue] = useState('');
	const [toDoList , setToDoList] = useState([]);



	return (
		<div className="text-center principal">
			<h1 className="text-center mt-5 title">-Your ToDo list-</h1>
			<ul className="list-group col-4 text-center">
			<input className="input list-group-item"
				type="text"
				onChange={(e)=> setListValue(e.target.value)}
				value={listValue}
				placeholder="Type your ToDo's"
				onKeyUp={(e)=> {
					if (e.key === "Enter") { setToDoList([ ...toDoList , listValue]);
						setListValue("");
					}}}
				/>
				{toDoList.map((list)=> 
				<li className="list-group-item border border-info-subtle d-flex justify-content-between hover-item">{list}
				<FontAwesomeIcon className='check' 
				icon={faCircleCheck} style={{color: "#000000"}} 
				onClick={()=> setToDoList(toDoList.filter(toDo => toDo != list))}
				
				/>
				</li>)}
				<li className="list-group-item border border-info-subtle task"><span>{toDoList.length} task</span></li>
			</ul>
			
		</div>
	);
};

export default Home;