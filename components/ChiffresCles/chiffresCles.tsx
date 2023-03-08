import styles from "./chiffresCles.module.scss";

const ChiffresCles = () => {
  return (
    <section className={styles.chiffresCles}>
      <h2 className={styles.chiffresClesTitle}>Chiffres clés</h2>
      <div className={styles.chiffres}>
        <p>
          <span>5</span>Salariés
        </p>
        <p>
          <span>1530</span>Chantiers
        </p>
        <p>
          <span>Plus de 30</span>Entreprises nous ont fait confiance
        </p>
      </div>
    </section>
  );
};

export default ChiffresCles;
