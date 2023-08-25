import './Footer.css'

function Footer() {
    return (
        <footer>

            <div className='footer-container'>
                <div className='description-info'>
                    <img src="" alt="" className='logo-img' />
                    <h6>
                        Tiene un toque tropical que evoca imágenes de la playa y el mar azul del Caribe.
                        Es un nombre que seguramente atraerá a los amantes de la buena comida.
                    </h6>
                </div>
                <div className='contact-info'>
                    <h3>Contáctenos:</h3>
                    <div><p>Teléfono: </p> <span> +5351234567</span> <i></i></div>
                    <div><p>Dirección: </p> <span> La quinta</span> <i></i></div>
                </div>
            </div>
            <div className='sing-dev'>
                <p>Rancho Taberna Caribe 2023.</p>
            </div>
        </footer>
    )
}

export default Footer