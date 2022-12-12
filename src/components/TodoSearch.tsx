

const TodoSearch = () => {

const handleChange = () => {
	console.log("buscando todos en la lista de todos")
	}

	return (
		<>
			<input onChange={handleChange} type="text" placeholder="busqueda de todos" />
        </>
    )
}

export { TodoSearch }