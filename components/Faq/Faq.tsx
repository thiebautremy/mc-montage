import Link from "next/link";
import styles from "./Faq.module.scss";
import { Accordion, AccordionTab } from "primereact/accordion";
import { FaAngleRight } from "react-icons/fa";

const Faq = () => {
  return (
    <div className={styles.faqContainer}>
      <h2>Questions fréquentes</h2>
      <div className={styles.accordionContainer}>
        <Accordion activeIndex={0}>
          <AccordionTab header="Comment choisir son rayonnage industriel ?">
            <p className={styles.paragraph}>
              Vous pourrez choisir le rayonnage industriel qui répond le mieux à
              vos besoins en prenant en compte les critères suivants :
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <strong>Le type de marchandises à stocker</strong>
                <p>
                  Si vous stockez des marchandises lourdes, des équipements ou
                  des palettes de matériaux de construction, vous aurez besoin
                  d&apos;un rayonnage à palettes.
                </p>
                <p>
                  Si vous stockez des marchandises légères, comme des produits
                  de consommation, des fournitures de bureau ou des produits en
                  vrac, vous pouvez choisir un rayonnage mi-lourd ou léger.
                </p>
              </li>
              <li className={styles.item}>
                <strong>La charge maximale à supporter</strong>
                <p>
                  Les rayonnages sont conçus pour supporter des charges
                  maximales différentes. Il est important de choisir un
                  rayonnage qui puisse supporter la charge maximale des
                  marchandises que vous stockerez.
                </p>
              </li>
              <li className={styles.item}>
                <strong>La dimension des marchandises</strong>
                <p>
                  Il est évidemment important de choisir un rayonnage qui ait la
                  bonne dimension pour les marchandises que vous stockerez.
                </p>
              </li>
              <li className={styles.item}>
                <strong>L&apos;espace disponible</strong>
                <p>
                  Les rayonnages prennent de la place. Il est important de
                  choisir un rayonnage qui s&apos;adapte à l&apos;espace
                  disponible dans votre entrepôt.Si vous avez un espace limité,
                  vous aurez besoin d&apos;un rayonnage compact.
                </p>
              </li>
            </ul>
            <p className={styles.paragraph}>
              Dans tous les cas, il est préférable de demander conseil à un
              professionnel qui saura vous guider pour trouver la meilleure
              solution pour vos besoin.
            </p>
          </AccordionTab>
          <AccordionTab header="Quels sont les différents types de rayonnage industriel ?">
            <p className={styles.paragraph}>
              Les rayonnages industriels sont classés en fonction de la charge
              qu&apos;ils peuvent supporter, de la nature des marchandises à
              stocker et de leur mode de construction.
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                Les rayonnages mi-lourds sont adaptés au stockage de charges
                légères à moyennes.
              </li>
              <li className={styles.item}>
                Les rayonnages à palettes sont adaptés au stockage de charges
                lourdes sur palettes.
              </li>
              <li className={styles.item}>
                Les rayonnages métalliques sont les plus courants et offrent une
                grande résistance.
              </li>
              <li className={styles.item}>
                Les racks de stockage sont une alternative aux rayonnages
                traditionnels.
              </li>
              <li className={styles.item}>
                Les racks de stockage sont une alternative aux rayonnages
                traditionnels.
              </li>
              <li className={styles.item}>
                Les rayonnages cantilever sont conçus pour le stockage de
                charges longues et volumineuses.
              </li>
              <li className={styles.item}>
                Les rayonnages mobiles permettent de déplacer facilement les
                marchandises.
              </li>
              <li className={styles.item}>
                Les rayonnages tablette sont adaptés au stockage de marchandises
                légères et de petite taille.
              </li>
            </ul>
            <p className={styles.paragraph}>
              En choisissant le bon type de rayonnage industriel, vous
              garantirez la sécurité et l&apos;efficacité du stockage de vos
              marchandises.
            </p>
            <Link
              href={"/stockage/rayonnage-mobile-archives"}
              className={styles.link}
            >
              Voir nos réalisations de rayonnage mobile d&apos;archives{" "}
              <FaAngleRight />
            </Link>
            <Link
              href={"/stockage/rayonnage-metallique-industriel"}
              className={styles.link}
            >
              Voir nos réalisations de rayonnage métallique industriel{" "}
              <FaAngleRight />
            </Link>
          </AccordionTab>

          <AccordionTab header="Quel est le prix d'un montage de rayonnage industriel ?">
            <p className={styles.paragraph}>
              Le prix d&apos;un montage de rayonnage industriel varie en
              fonction de plusieurs facteurs, notamment :
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>Le type de rayonnage</li>
              <li className={styles.item}>La taille du rayonnage</li>
              <li className={styles.item}>La complexité du montage</li>
              <li className={styles.item}>
                La distance entre le lieu de stockage et le lieu de montage
              </li>
            </ul>
            <p className={styles.paragraph}>
              En général, le prix du montage d&apos;un rayonnage industriel
              oscille entre 50 et 150 € par mètre linéaire. Par exemple, le
              montage d&apos;un rayonnage à palettes de 10 mètres de long et de
              2 mètres de haut coûterait environ 1 000 €. Il est important de
              demander plusieurs devis à des sociétés spécialisées pour obtenir
              le meilleur prix.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
