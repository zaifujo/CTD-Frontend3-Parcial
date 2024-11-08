import { useState } from "react";
import { validateStudent, validateCourse } from "../utils/validator";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [formData, setFormData] = useState({
    nameStudent: "",
    favoriteCourse: "",
  });

  const [ok, setOk] = useState(false);

  const [errors, setErrors] = useState({
    nameStudent: false,
    favoriteCourse: false,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errorsCustom = {
      nameStudent: !validateStudent(formData.nameStudent),
      favoriteCourse: !validateCourse(formData.favoriteCourse),
    };

    setErrors(errorsCustom);

    if (Object.values(errorsCustom).some(error => error)) {
      return;
    }

    setOk(true);
  }

  return (
    <div className="App">
      <h1>Curso favorito</h1>
      <form onSubmit={handleSubmit}>
        {/* aqui deberias escribir tu codigo */}
        <div>
          <label htmlFor="nameStudent">Nombre: </label>
          <input type="text" name="nameStudent" id="nameStudent" value={formData.nameStudent} onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="favoriteCourse">Curso favorito: </label>
          <input type="text" name="favoriteCourse" id="favoriteCourse" value={formData.favoriteCourse} onChange={handleChange} 
          />
        </div>

        <button type="submit">
          Enviar
        </button>

      </form>
      {Object.values(errors).some(error => error) && 
        (<h2>Por favor chequea que la información sea correcta</h2>)
      }
      {ok && 
      <Card nameStudent={formData.nameStudent} favoriteCourse={formData.favoriteCourse} />
      }
    </div>
  );
}

export default App;
