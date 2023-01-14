
import React, { useState, useEffect } from 'react';
import { TextInput } from '../assets/TextInput';
import myData from '../data/data.json';
import IMG_4642 from '../assets/postcards/v1/IMG_4642.jpg';

console.log("THIS IS MY DATA: ", myData);

function CodeInput({ property, value="", changeHandler, children }) {
	return(
		<div className="px-2 mt-2">
			<div>
				<label htmlFor={property} className="text-3xl font-bold">{children}</label>
			</div>
			<div>
				<TextInput key="codeInput" name={property} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={ value } onChange={ e => changeHandler(property, e.target.value) } />
			</div>
		</div>
		);
}

export default function HomeScreen() {

	const [codeToCheck, setCodeToCheck] = useState('');
	const [isError, setIsError] = useState(false);
	const [successDisplay, setSuccessDisplay] = useState(false);
	const [userCode, setUserCode] = useState('');

	let changeCode = (property, value) => {
		setCodeToCheck(value);
	}

	function checkCode() {
		if (myData?.codes[codeToCheck]) {			
			setIsError(false);
			setSuccessDisplay(true);
			setUserCode(myData.codes[codeToCheck]);
		} else {
			setIsError(true);
			setUserCode('');
			setSuccessDisplay(false);
		}
	};

	return (
		<div className="px-10 mt-2">
			{ !successDisplay && 
				<>
					<CodeInput property="codeToCheck" value={codeToCheck ?? ""} changeHandler={changeCode}>
						Enter the code you were sent.
					</CodeInput>
					<div className="px-2 mt-2">
						<button type="submit" onClick={ checkCode } className="border-2 rounded-sm border-black px-4">Check Your Code</button>
					</div>
					{ isError && 
						<div className="font-bold text-red-800 px-2 mt-2">There is an error with the code that was entered</div>
					}
				</>
			}
			{ successDisplay && userCode && 
				<>
					<div>
						<div className="px-2 mt-2 font-bold">
							{userCode[0].who}
						</div>
						<div className="px-2 mt-2">
							{userCode[0].message}
						</div>
						<div className="px-2 mt-2">		
							<a href={'https://open.spotify.com/playlist/' + userCode[0].link}>
								Here's yr playlist...
							</a>
						</div>
					</div>
					<div>
						<div className="px-2 mt-2">
							<img src={('/postcards/v1/' + userCode[0].image)} />
						</div>
					</div>
				</>
			}
		</div>
	);
}