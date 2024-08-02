import './Saludo.css'
const Saludo = ({Bienvenidos}) => {
    return (
        <div className='Body'>
            <div className='tituloSaludo'>
                <h1>{Bienvenidos}</h1>
            </div>
        </div>
    )
}

export default Saludo