function Liens() {
  return (
    <div className="liens">
      <h1 className="titre">Liste de liens utiles</h1>
      <p className="paragraphe">
        {" "}
        Voici une liste de liens utiles afin de s'informer ou de trouver du
        support dans l'arrêt de la cigarette.
      </p>
      <ul>
        <p className="paragraphe">
          <a
            className="App-link"
            href="https://www.tabac-info-service.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🍌 TABAC INFO SERVICE
          </a>
          <p className="paragraphe">
            Ce site permet de s'informer sur les risques liés au tabagisme. Il
            permet également de trouver du soutien ainsi que des témoignages.
          </p>
          <p className="paragraphe">
            <a
              className="App-link"
              href="https://www.ameli.fr/medecin/exercice-liberal/prescription-prise-charge/regles-de-prescription-et-formalites/medicaments-et-dispositifs/prise-en-charge-sevrage-tabagique"
              target="_blank"
              rel="noopener noreferrer"
            >
              🍌 AMELI
            </a>
            <p className="paragraphe">
              La section tabac du site de l'assurance maladie pour la prise en
              charge du sevrage tabagique.
            </p>
          </p>
          <p className="paragraphe">
            <a
              className="App-link"
              href="https://www.santepubliquefrance.fr/determinants-de-sante/tabac/documents/outils-d-intervention/mois-sans-tabac-le-kit-pour-arreter-de-fumer"
              target="_blank"
              rel="noopener noreferrer"
            >
              🍌 MOIS SANS TABAC
            </a>
            <p>Sited'informations sur le mois sans tabac.</p>
          </p>
        </p>
      </ul>
    </div>
  );
}

export default Liens;
