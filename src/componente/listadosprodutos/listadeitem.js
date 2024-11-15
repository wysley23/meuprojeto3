const listadascoisas = [
    { id: 1, nome: 'macaco' },
    { id: 2, nome: 'parafuseira' },
    { id: 3, nome: 'chave philps' },
    { id: 3, nome: 'chave philps' }


];

function listadascoisas() {
    return (
        <ul>
            {listadascoisas.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>

    )

}
export default listadascoisas