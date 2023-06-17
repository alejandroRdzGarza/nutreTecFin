import React, { useEffect, useState } from "react";
import "./Survey.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Survey = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ sueno: 0 });
  const [success, setSuccess] = useState(false);
  const [showHoursSlept, setShowHoursSlept] = useState(true);
  const [showExerciseHours, setShowExerciseHours] = useState(false);
  const [showMedicInput, setShowMedicInput] = useState(false);
  const [data, setData] = useState(null);
  const [, setError] = useState(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(formData);

    axios
      .post("http://localhost:8080/api/cuestionario", formData)
      .then((response) => {
        console.log(response.data);
        setSuccess(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInsomniaChange = (inputData) => {
    const isChecked = inputData.target.checked;
    setFormData({
      ...formData,
      insomnio: isChecked ? "si" : "no",
      sueno: isChecked ? 0 : formData.sueno,
    });
    setShowHoursSlept(!isChecked);
  };

  const handleExerciseChange = (inputData) => {
    const isChecked = inputData.target.checked;
    setShowExerciseHours(isChecked);
    setFormData({
      ...formData,
      ejercicio: isChecked ? "si" : "no",
      tiempo: isChecked ? formData.tiempo : 0,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/alimentos");
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleMedicamentoChange = (inputData) => {
    const isChecked = inputData.target.checked;
    setShowMedicInput(isChecked);
    setFormData({
      ...formData,
      medicamento: isChecked ? "si" : "no",
    });
  };

  return (
    <div className="SeccionEntera_Survey">
      {success ? (
        <section className="registrada">
          <h1>
            <span className="text">RESPUESTA REGISTRADA!</span>
          </h1>
          <p className="botones_respondi">
            <button className="volverInicio" onClick={() => navigate("/")}>
              Volver al inicio
            </button>
            <button className="" onClick={() => navigate("/videojuego")}>
              Ir al Videojuego
            </button>
          </p>
        </section>
      ) : (
        <div className="survey_total">
          <h1>
            <span className="titulo_survey">Formulario diario</span>
          </h1>
          <div className="formulario">
            <div className="left_survey">
              <h2>
                <span className="text-black">Fecha del cuestionario</span>
              </h2>
              <h2>
                <span className="text-black">Sueño</span>
              </h2>
              <h2>
                <span className="text-black">Dieta</span>
              </h2>
              <h2>
                <span className="text-rutina">Rutina</span>
              </h2>
              <h2>
                <span className="text-black">Medicamentos</span>
              </h2>
            </div>
            <div className="right_survey">
              <form className="form_survey" onSubmit={onSubmitForm}>
                <div className="fecha_survey">
                  <label>Fecha: </label>
                  <input
                    onChange={(inputData) => {
                      setFormData({
                        ...formData,
                        fecha: inputData.target.value,
                      });
                    }}
                    type="date"
                    name="fecha"
                    id="date"
                  />
                </div>
                <hr />
                <div className="insomnio_survey">
                  <div>
                    <label>Tuviste insomnio?</label>
                    <input
                      className="insomnio_check"
                      onChange={handleInsomniaChange}
                      type="checkbox"
                      name="no_sueno"
                      id="insomnio"
                    />
                  </div>
                  {showHoursSlept && (
                    <div className="sueno_survey">
                      <label>Cuantas horas dormiste?</label>
                      <input
                        onChange={(inputData) => {
                          setFormData({
                            ...formData,
                            sueno: inputData.target.value,
                          });
                        }}
                        type="number"
                        name="h_sueno"
                        id="sueno"
                        value={formData.sueno}
                      />
                    </div>
                  )}
                </div>
                <hr />
                <div className="comidas_survey">
                  <div className="cuadro_desa">
                    <div className="hijo_desa">
                      <label>Desayuno</label>
                      <input
                        onChange={(inputData) => {
                          setFormData({
                            ...formData,
                            desayuno: inputData.target.value,
                          });
                        }}
                        type="checkbox"
                        name="desayuno_r"
                        id="desayuno"
                      />
                    </div>
                    <div>
                      {data && (
                        <tr>
                          <td className="td_cuadro">
                            <div className="nombre_comida_survey">
                              {data[11].nombre}
                            </div>
                            <div className="descripcion_comida_survey">
                              {data[11].descripcion}
                            </div>
                            <div className="gramos_comida_survey">
                              {data[11].gramos}gr
                            </div>
                          </td>
                        </tr>
                      )}
                    </div>
                  </div>

                  <div className="cuadro_comi">
                    <div className="hijo_desa">
                      <label>Comida</label>
                      <input
                        onChange={(inputData) => {
                          setFormData({
                            ...formData,
                            comida: inputData.target.value,
                          });
                        }}
                        type="checkbox"
                        name="comida_r"
                        id="comida"
                      />
                    </div>
                    <div>
                      {data && (
                        <tr>
                          <td className="td_cuadro">
                            <div className="nombre_comida_survey">
                              {data[17].nombre}
                            </div>
                            <div className="descripcion_comida_survey">
                              {data[17].descripcion}
                            </div>
                            <div className="gramos_comida_survey">
                              {data[17].gramos}gr
                            </div>
                          </td>
                        </tr>
                      )}
                    </div>
                  </div>

                  <div className="cuadro_cena">
                    <div className="hijo_desa">
                      <label>Cena</label>
                      <input
                        onChange={(inputData) => {
                          setFormData({
                            ...formData,
                            cena: inputData.target.value,
                          });
                        }}
                        type="checkbox"
                        name="cena_r"
                        id="cena"
                      />
                    </div>
                    <div>
                      {data && (
                        <tr>
                          <td className="td_cuadro">
                            <div className="nombre_comida_survey">
                              {data[0].nombre}
                            </div>
                            <div className="descripcion_comida_survey">
                              {data[0].descripcion}
                            </div>
                            <div className="gramos_comida_survey">
                              {data[0].gramos}gr
                            </div>
                          </td>
                        </tr>
                      )}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="rutina_survey">
                  <div className="ejer_survey">
                    <label>Hiciste ejercicio hoy?</label>
                    <input
                      onChange={handleExerciseChange}
                      type="checkbox"
                      name="ejercicio"
                      id="ejer"
                    />
                  </div>
                  {showExerciseHours && (
                    <div className="horas_survey">
                      <label>Cuantas horas te ejercitaste?</label>
                      <input
                        onChange={(inputData) => {
                          setFormData({
                            ...formData,
                            tiempo: inputData.target.value,
                          });
                        }}
                        type="number"
                        name="h_ejercicio"
                        id="duracion"
                        value={formData.tiempo}
                      />
                    </div>
                  )}
                </div>
                <hr />
                <div className="medic_part">
                  <div className="medicamneto_survey">
                    <label>Tomaste algun medicamento?</label>
                    <input
                      onChange={handleMedicamentoChange}
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </div>
                  {showMedicInput && (
                    <div className="input_medic">
                      <label>¿Qué medicamento tomaste?</label>
                      <input
                        type="text"
                        onChange={(inputData) => {
                          setFormData({
                            ...formData,
                            medicamento: inputData.target.value,
                          });
                        }}
                      />
                    </div>
                  )}
                </div>
                <hr />
                <div>
                  <button className="" type="submit">
                    COMPLETAR CUESTIONARIO
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Survey;
