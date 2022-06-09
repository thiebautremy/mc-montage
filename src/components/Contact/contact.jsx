import "./contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Vous souhaitez nous contacter ?</h2>
      <div className="contact__infos">
        <div className="contact__infos__adresse">
          <p>Notre adresse :</p>
          <p>158 rue Foin-Foin</p>
          <p>54000 Bénaménille</p>
          <p></p>
        </div>
        <div className="contact__infos__mailEtNumero">
          <p>
            <i className="pi pi-phone"></i> 06060606060
          </p>
          <p>
            <span>@</span> jeanclaude@gmail.com
          </p>
          <p>
            <i className="pi pi-linkedin"></i>{" "}
            <a href="https://google.com">Lien linkedin</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
