import './Menu.css'
import SectionMenu from './SectionMenu.jsx'
import offert from '../data/offert.json'

function Menu() {
    return (
        <ul className='menu-list'>
                    <li className='item-list-menu'>
                        <SectionMenu Nombre={"Bebidas"} content={offert.Bebidas} />
                    </li>
                    <li className='item-list-menu'>
                        <SectionMenu Nombre={"Tapas"} content={offert.Tapas} />
                    </li>
                    <li className='item-list-menu'>
                        <SectionMenu Nombre={"Pizzas y Espaguetis"} content={offert.PizzasyEspaguetis} />
                    </li>
        </ul>
    )
}

export default Menu