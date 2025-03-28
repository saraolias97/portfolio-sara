function Education() {
  return (
    <section className="education py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Educación</h2>
      <div className="education-item">
        <h3 className="text-2xl font-semibold">Máster en Lógica, Computación e Inteligencia Artificial</h3>
        <p><strong>Septiembre 2020 - Junio 2022</strong></p>
        <ul>
          <li>Especialización en Machine Learning, Big Data e Inteligencia Artificial.</li>
          <li>Trabajo de fin de máster sobre la predicción del precio de Bitcoin.</li>
        </ul>
      </div>
      <div className="education-item">
        <h3 className="text-2xl font-semibold">Grado en Matemáticas</h3>
        <p><strong>Septiembre 2015 - Junio 2019</strong></p>
        <ul>
          <li>Especialización en análisis numérico avanzado, optimización y teoría de probabilidad.</li>
        </ul>
      </div>
      {/* Agrega más educación aquí si lo deseas */}
    </section>
  );
}

export default Education;
