//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = ({nameStudent, favoriteCourse}) => {
  return (
    <div>
      <h2>Hola {nameStudent}!</h2>
      <p>Tu curso favorito es: {favoriteCourse}</p>
    </div>
  );
}

export default Card;
