import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);

  const onSubmitRegister = (e) => {
    e.preventDefault();
    const currentDate = getCurrentDate();
    const updatedFormData = {
      ...formData,
      fechaDeRegistro: currentDate,
    };
    console.log(updatedFormData);

    axios
      .post("http://localhost:8080/api/usuario", updatedFormData)
      .then((response) => {
        console.log(response.data);
        setSuccess(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <div className="SeccionRegistro">
      {success ? (
        <section>
          <h1>
            <span className="text-black">Haz sido registrado!</span>
          </h1>
          <p>
            <Link to="/login">INICIA SESION</Link>
          </p>
        </section>
      ) : (
        <div className="registrito">
          <h1>
            <span className="text-black">Registro</span>
          </h1>
          <div className="questions">
            <form onSubmit={onSubmitRegister}>
              <div className="regis">
                <div className="personales">
                  <h3 className="personales-text">Datos Personales</h3>
                  <div className="input-nombre">
                    <h4 className="nombre-text">Nombre completo:</h4>
                    <input
                      onChange={(inputData) => {
                        setFormData({
                          ...formData,
                          nombre: inputData.target.value,
                        });
                      }}
                      type="text"
                      name=""
                      id=""
                    />
                    <div className="EdadyFecha">
                      <h4 className="edad-text">Edad:</h4>
                      <input
                        onChange={(inputData) => {
                          setFormData({
                            ...formData,
                            edad: inputData.target.value,
                          });
                        }}
                        type="text"
                        name=""
                        id=""
                      />

                      <h4 className="fecha-text">Fecha de Nacimiento:</h4>
                      <input
                        className="botonfechanace"
                        onChange={(inputData) => {
                          setFormData({
                            ...formData,
                            fechaNacimiento: inputData.target.value,
                          });
                        }}
                        type="date"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </div>

                <hr />

                <div className="contacto">
                  <h3 className="contacto-text">Datos de Contacto</h3>
                  <div>
                    <h4 className="telefono-text">Telefono:</h4>
                    <input
                      onChange={(inputData) => {
                        setFormData({
                          ...formData,
                          telefono: inputData.target.value,
                        });
                      }}
                      type="text"
                      name=""
                      id=""
                    />

                    <h4 className="correo-text">Correo electronico:</h4>
                    <input
                      onChange={(inputData) => {
                        setFormData({
                          ...formData,
                          email: inputData.target.value,
                        });
                      }}
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <hr />
                <div className="ocupacion">
                  <h3 className="ocupacion-text">Ocupación</h3>
                  <div className="nutrici-PyN">
                    <h4 className="PyN">Paciente:</h4>
                    <input
                      onChange={(inputData) => {
                        setFormData({
                          ...formData,
                          tipoUsuario: inputData.target.checked
                            ? "paciente"
                            : "",
                        });
                      }}
                      type="checkbox"
                      name=""
                      id=""
                    />

                    <h4 className="PyN">Nutricionista:</h4>
                    <input
                      onChange={(inputData) => {
                        setFormData({
                          ...formData,
                          tipoUsuario: inputData.target.checked ? "medico" : "",
                        });
                      }}
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <hr />

                <div className="contrasena">
                  <h3 className="contrasena-text">Contraseña</h3>
                  <div>
                    <h4 className="text-black">Contraseña:</h4>
                    <input
                      onChange={(inputData) => {
                        setFormData({
                          ...formData,
                          contrasena: inputData.target.value,
                        });
                      }}
                      type="password"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <hr />
                
              </div>
              <button id="reg">Registrarse</button>
            </form>
          </div>

          <p className="condicion">
            <span className="text-black">Ya estas registrado?</span> <br />
            <span className="line">
              <Link to="/login">Iniciar sesion</Link>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;
