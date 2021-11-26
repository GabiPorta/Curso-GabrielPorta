import '../styles/components/pages/contactoPage.css'

import React from "react";

const contactoPage = (props) => {
    return (
        <main class="holder">
        <div class="columna">
            <h2>Se voluntario!</h2>
            <form action="action" method="" class="formulario">
                <p>
                    <label for="Nombre">Nombre y Apellido</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="Email">Email</label>
                    <input name="Correo Electronico"
                    type="email"/>
                </p>
                <p>
                    <label for="Teléfono">Teléfono</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="comentario">Comentarios/Sugerencias</label>
                    <textarea id="comentario"></textarea>
                </p>
                <p class="acciones"><input type="submit" value="Enviar"/></p>
            </form>
        </div>
    </main>
    )
}
export default contactoPage;   