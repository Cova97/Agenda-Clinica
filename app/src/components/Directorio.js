import React, {useState} from "react";

const FormDirectorio = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="./Dashboard.js">Inicio</a>
                </li>
            </ul>
            <div><p></p></div>
            <div className="grid"> 
                    <div className='card'>
                        <div className="container">
                            <div className="card-header">Cardiología</div>
                            <div className="card-body">
                                <p></p>
                                <p className="card-title" > Dr. Manuel López Sánchez</p>
                                <p className="card-text" > 222 9688067</p>
                                <p className="card-title"> Dra. María Carmen Jiménez</p>
                                <p className="card-text" > 222 6071131</p>
                                <p className="card-title"> Dr. Jesús Miguel Navarro</p>
                                <p className="card-text" > 222 4156772</p>
                                <p className="card-title"> Dr. Carlos Antonio Díaz Ruíz</p>
                                <p className="card-text" > 222 4111349</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="container">
                            <div className="card-header">Dermatología</div>
                            <div className="card-body">
                                <p></p>
                                <p className="card-title" > Dr. Rubén Iván Pérez Jiménez</p>
                                <p className="card-text" > 222 3850234</p>
                                <p className="card-title"> Dra. Irene Beatriz Ortiz Calero</p>
                                <p className="card-text" > 222 6679264</p>
                                <p className="card-title"> Dr. Luis Daniel Castillo Picazo</p>
                                <p className="card-text" > 222 7283554</p>
                                <p className="card-title"> Dr. Pablo Antonio Marín Cuenca</p>
                                <p className="card-text" > 222 41123964</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="container">
                            <div className="card-header">Ginecología</div>
                            <div className="card-body">
                                <p></p>
                                <p className="card-title" > Dra. Ana Dolores Sáez Muñoz</p>
                                <p className="card-text" > 222 8812127</p>
                                <p className="card-title"> Dra. Rosa María Cuenca</p>
                                <p className="card-text" > 222 9418123</p>
                                <p className="card-title"> Dr. José Antonio García Martínez</p>
                                <p className="card-text" > 222 7586122</p>
                                <p className="card-title"> Dr. Diego Vicente Nuñez</p>
                                <p className="card-text" > 222 8784519</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="container">
                            <div className="card-header">Hematología</div>
                            <div className="card-body">
                                <p></p>
                                <p className="card-title" > Dr. Fernando Ramón Torres</p>
                                <p className="card-text" > 222 1733542</p>
                                <p className="card-title"> Dr. Raúl Alberto Valero Cebrián</p>
                                <p className="card-text" > 222 9273345</p>
                                <p className="card-title"> Dr. Vicente Álvaro Cebrián Gil</p>
                                <p className="card-text" > 222 5553692</p>
                                <p className="card-title"> Dr. Emilio Emiliano Valero Calero</p>
                                <p className="card-text" > 222 2554879</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="container">
                            <div className="card-header">Neumología</div>
                            <div className="card-body">
                                <p></p>
                                <p className="card-title"> Dr. Joaquín Martínez Martínez</p>
                                <p className="card-text" > 222 8312227</p>
                                <p className="card-title"> Dra. Ana Karla Ruíz Díaz</p>
                                <p className="card-text" > 222 9316679</p>
                                <p className="card-title"> Dra. Nery Alacarez Nuñez</p>
                                <p className="card-text" > 222 4964798</p>
                                <p className="card-title"> Dra. Circe López Carin</p>
                                <p className="card-text" > 222 4765462</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="container">
                            <div className="card-header">Neurología</div>
                            <div className="card-body">
                                <p></p>
                                <p className="card-title" > Dr. Levi Cesar Osorio Hernández</p>
                                <p className="card-text" > 222 7639291</p>
                                <p className="card-title"> Dra. Yamile Hernández Fernández</p>
                                <p className="card-text" > 222 9187394</p>
                                <p className="card-title"> Dr. Luis Balcán Lorena</p>
                                <p className="card-text" > 222 2748548</p>
                                <p className="card-title"> Dr. Juan Nuñez Enterria</p>
                                <p className="card-text" > 222 4486589</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="container">
                            <div className="card-header">Oftamología</div>
                            <div className="card-body">
                                <p></p>
                                <p className="card-title" > Dra. Yemine Martínez Gil</p>
                                <p className="card-text" > 222 4655487</p>
                                <p className="card-title"> Dra. Marta Hernández Ruíz</p>
                                <p className="card-text" > 222 5325655</p>
                                <p className="card-title"> Dr. José Nieto Ambrosio</p>
                                <p className="card-text" > 222 5552144</p>
                                <p className="card-title"> Dr. Diego Alaniz Durán</p>
                                <p className="card-text" > 222 8234521</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="container">
                            <div className="card-header">Pediatría</div>
                            <div className="card-body">
                                <p></p>
                                <p className="card-title" > Dr. Alan Huerta Victoria</p>
                                <p className="card-text" > 222 1234565</p>
                                <p className="card-title"> Dra. Ramona Álvarez Martín</p>
                                <p className="card-text" > 222 4552145</p>
                                <p className="card-title"> Dr. Arturo Laug Nieto</p>
                                <p className="card-text" > 222 6548562</p>
                                <p className="card-title"> Dra. Valeria Calera Bosques</p>
                                <p className="card-text" > 222 2586319</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default FormDirectorio;