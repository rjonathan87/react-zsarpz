interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombre: "Johnny",
    edad: 41,
    direccion: {
      pais: "México CDMX",
      casaNo: 245
    }
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona)}</pre>
      </code>
    </>
  );
};
