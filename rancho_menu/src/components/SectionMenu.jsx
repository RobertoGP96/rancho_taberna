import './SectionMenu.css'



function SectionMenu({ Nombre, content }) {
    
    const handleClicK = () => {
        return ()=> {
            
        }
      }

    return (
        <section onClick={handleClicK}>
            <h3 className='sect-name'>
                {Nombre}
            </h3>
            <ul className='item-list'>
                {
                    content.map(item => (
                        <li key={item.id} className='item'>
                            <h4>{item.Nombre}</h4>
                            <div className='price-item'>
                                <h5>
                                    {item.Precio}
                                </h5>
                                <p>
                                    {item.Moneda}
                                </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default SectionMenu