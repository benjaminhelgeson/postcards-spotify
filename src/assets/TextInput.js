const TextInputLabel = ({ className='', htmlFor, children }) => {
	return(
		<label htmlFor={htmlFor} className={className}>
			{children}
		</label>
	);
}

console.log("TEXT INPUT WAS LOADED.");

const TextInput = ({ 
	value,
	changeHandler,
	className='',
	required=false,
	centered=false,
	errorMessage='',
	...rest
}) => {
	return (
		<>
			<input 
				value={value}
				onChange={e => changeHandler(e.target.value)}
				className={className}
				{...rest}
			/>
		</>
	);
}

export {
	TextInputLabel,
	TextInput
}