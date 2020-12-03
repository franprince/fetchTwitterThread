import Head from "next/head";
import { useState, useEffect } from "react";
import Buscador from "../components/Buscador";
import Card from "../components/Cards";
import { getData } from "../lib/getData";
import styles from "../styles/Home.module.css";

export default function Home({ tweetData, userData }) {
  const [emprendimientos, setEmprendimientos] = useState(tweetData.data);
  const [usuarios, setUsuarios] = useState(userData.data);
  const [resultados, setResultados] = useState(tweetData.data);
  const [palabraClave, setPalabraClave] = useState("");

  const handleChange = (e) => setPalabraClave(e.target.value);
  useEffect(() => {
    const resultados = emprendimientos.filter((emprendimiento) =>
      emprendimiento.text.toLowerCase().includes(palabraClave.toLowerCase())
    );
    setResultados(resultados);
  }, [palabraClave]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Encontrá el regalo perfecto!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Buscador handleChange={handleChange} value={palabraClave} />
      <main className={styles.main}>
        <div className="flex flex-wrap -m-4">
          {(resultados.length &&
            resultados.map((negocio, index) => {
              const currentUserData = usuarios.find(
                (user) => user.id == negocio.author_id
              );
              return (
                negocio && (
                  <Card
                    key={`${negocio.id}-${index}`}
                    userId={negocio.id}
                    text={negocio.text}
                    user={negocio.author_id}
                    urls={negocio.entities.urls}
                    userData={currentUserData}
                  />
                )
              );
            })) || <p>No se encontró ningún resultado para tu búsqueda</p>}
        </div>
      </main>

      <footer className={styles.footer}>Hecho por Fran 🐱‍👤 </footer>
    </div>
  );
}

export async function getStaticProps() {
  const { tweetData, userData } = await getData();
  if (!tweetData || !userData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { tweetData, userData },
    revalidate: 1,
  };
}
