'use client'

import {EmblaOptionsType} from "embla-carousel";
import EmblaCarousel from "@/app/components/embla/EmblaCarousel";

export function MainContent() {
    const OPTIONS: EmblaOptionsType = {loop: true};
    return <main>
        <div className="container-lg my-5">
            <div className="row">
                <div className="col-lg-4">
                    <div className="border rounded sticky-top" style={{top: "2rem"}}>
                        <h1 className="text-center bg-gray-100 py-3 mb-0 h2">Horaires</h1>
                        <table className="table my-0">
                            <tbody>
                            <tr className="py-1 px-2 ">
                                <td className="align-middle">
                                    <strong>Lundi</strong>
                                </td>
                                <td>14:00 - 19:00</td>
                            </tr>
                            <tr className="py-1 px-2 ">
                                <td className="align-middle">
                                    <strong>Mardi</strong>
                                </td>
                                <td>
                                    09:00 - 12:00 <br/> 14:00 - 19:00
                                </td>
                            </tr>
                            <tr className="py-1 px-2 ">
                                <td className="align-middle">
                                    <strong>Mercredi</strong>
                                </td>
                                <td>09:00 - 12:00</td>
                            </tr>
                            <tr className="py-1 px-2 ">
                                <td className="align-middle">
                                    <strong>Jeudi</strong>
                                </td>
                                <td>
                                    09:00 - 19:00 <br/> <strong>NON-STOP</strong>
                                </td>
                                {" "}
                            </tr>
                            <tr className="py-1 px-2 ">
                                <td className="align-middle">
                                    <strong>Vendredi</strong>
                                </td>
                                <td>
                                    09:00 - 20:00 <br/> <strong>NON-STOP</strong>
                                </td>
                                {" "}
                            </tr>
                            <tr className="py-1 px-2 ">
                                <td className="align-middle">
                                    <strong>Samedi</strong>
                                </td>
                                <td>
                                    08:00 - 15:00 <br/> <strong>NON-STOP</strong>
                                </td>
                                {" "}
                            </tr>
                            </tbody>
                        </table>
                        <p className="text-center bg-gray-100 py-3 mb-0 border-top h4">
                            <a href="tel:+33450778037">
                                <i className="bi bi-telephone-fill mr-2"/> 04 50 77 80 37
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-lg-8 mt-5 mt-lg-0">
                    <section className="row">
                        <div className="col-12 mb-5">
                            <h1>
                                <i className="bi bi-calendar-check mr-2"/> Réservation en
                                ligne
                            </h1>
                        </div>
                        <div className="col-12">
                            <div className="card">
                                <a
                                    href="https://reservationcoiffeur.fr/bon-lieu-coiffure-sallenoves/coiffeur-barbier-sallenoves-rond-point-de-bonlieu-74270"
                                    className="d-flex align-items-center glow-on-hover"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/images/qrcode.png"
                                        alt="QR code réservation en ligne"
                                        id="qr"
                                    />
                                    <p className="ml-3 ml-lg-4 h5 font-body">
                                        <span>Réservez un créneau directement en ligne !</span>
                                        <span className="d-block mt-1 font-weight-normal">
                        avec notre nouveau service Réservation Coiffeur
                      </span>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-12 my-5">
                            <h1>Nos prestations</h1>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="card">
                                <div className="avatar text-center">
                                    <img
                                        src="/images/forfait-coiffure-femme.jpg"
                                        alt=""
                                        className="rounded-circle border p-2 bg-white"
                                        style={{maxWidth: 150, marginTop: "-75px"}}
                                    />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-body h3 text-center">
                                        Forfait femme
                                    </h2>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr className="bg-gray-100 text-uppercase gray-600">
                                                <th scope="col" className="border-0"/>
                                                <th scope="col" className="border-0">
                                                    Courts
                                                </th>
                                                <th scope="col" className="border-0">
                                                    Mi-longs
                                                </th>
                                                <th scope="col" className="border-0">
                                                    Longs
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">Shampooing + brushing</th>
                                                <td>27&nbsp;€</td>
                                                <td>32&nbsp;€</td>
                                                <td>35&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Shampooing/coupe + brushing</th>
                                                <td>38&nbsp;€</td>
                                                <td>41&nbsp;€</td>
                                                <td>44&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Sampoing/coupe coloration/brushing
                                                </th>
                                                <td>71&nbsp;€</td>
                                                <td>76&nbsp;€</td>
                                                <td>81&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Sampoing/coupe mèches/soin + brushing
                                                </th>
                                                <td>86&nbsp;€</td>
                                                <td>96&nbsp;€</td>
                                                <td>105&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Shampooing/coupe + mise en plis</th>
                                                <td colSpan={3} className="text-center">
                                                    38&nbsp;€
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Blond polaire</th>
                                                <td colSpan={3} className="text-center">
                                                    Sur devis
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Lissage brésilien ou semi-permanent
                                                </th>
                                                <td colSpan={3} className="text-center">
                                                    Sur devis
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p>
                                        <small>
                                            Supplément de 10&nbsp;€ à 20&nbsp;€ selon
                                            longueur/épaisseur
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-5 pt-5">
                            <div className="card">
                                <div className="avatar text-center">
                                    <img
                                        src="/images/forfait-coiffure-jeune-fille.jpg"
                                        alt=""
                                        className="rounded-circle border p-2 bg-white"
                                        style={{maxWidth: 150, marginTop: "-75px"}}
                                    />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-body h3 text-center">
                                        Forfait jeune fille (-12 ans)
                                    </h2>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Coupe + brushing</th>
                                                <td className="text-center">29&nbsp;€</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-5 pt-5">
                            <div className="card">
                                <div className="avatar text-center">
                                    <img
                                        src="/images/forfait-coiffure-homme.jpg"
                                        alt=""
                                        className="rounded-circle border p-2 bg-white"
                                        style={{maxWidth: 150, marginTop: "-75px"}}
                                    />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-body h3 text-center">
                                        Forfait homme
                                    </h2>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Shampooing / coupe / séchage</th>
                                                <td className="text-center">24&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    -11 ans =&gt; Shampooing / coupe
                                                </th>
                                                <td className="text-center">20&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">-5 ans =&gt; Shampooing / coupe</th>
                                                <td className="text-center">16&nbsp;€</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-5 pt-5">
                            <div className="card">
                                <div className="avatar text-center">
                                    <img
                                        src="/images/forfait-barbe.jpg"
                                        alt=""
                                        className="rounded-circle border p-2 bg-white"
                                        style={{maxWidth: 150, marginTop: "-75px"}}
                                    />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-body h3 text-center">
                                        Forfait barbe
                                    </h2>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Barbe tondeuse</th>
                                                <td className="text-center">9&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Entretien barbe</th>
                                                <td className="text-center">19&nbsp;€</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Rasage complet - Rituel à l&apos;ancienne
                                                </th>
                                                <td className="text-center">34&nbsp;€</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <p style={{lineHeight: "1.2"}}>
                                <small>
                                    Les tarifs présents sur ce site sont à titre indicatif et
                                    non contractuels. <br/>
                                    Bon Lieu Coiffure se réserve le droit de les modifier sans
                                    préavis.
                                </small>
                            </p>
                        </div>
                    </section>
                    <section className="row mt-5 pt-3">
                        <div className="col-12">
                            <h1>Le salon de coiffure</h1>
                            <p>
                                Salon de coiffure mixte et
                                barbier&nbsp;créé&nbsp;en&nbsp;2004, situé à Bonlieu sur la
                                commune de Sallenôves à 5&nbsp;mn de Frangy en direction
                                d&apos;Annecy (à côté de l&apos;entreprise S.E. LEVAGE). <br/>
                                Vous pourrez trouver une place de parking juste devant le
                                salon. <br/>
                                Nous vous accueillons dans une ambiance apaisante et détendue.
                                Nous vous apportons toutes nos compétences afin de mieux
                                répondre à vos envies. Nous vous proposons également toute une
                                gamme de produits professionnels pour répondre aux besoins de
                                vos cheveux, ainsi que les messieurs pour leur barbe !
                            </p>
                        </div>
                        <div className="col-10 offset-1 col-lg-12 offset-lg-0 mt-4">
                            <EmblaCarousel slides={[{
                                id: 1,
                                imageUrl: "/images/entree-salon-coiffure.jpg",
                                title: "Le salon Bon Lieu Coiffure à Sallenôves"
                            }, {
                                id: 2,
                                imageUrl: "/images/cote-coiffure-vue-shampoing.jpg",
                                title: "Le côté coiffure avec vue sur la partie shampoing"
                            }, {
                                id: 3,
                                imageUrl: "/images/cote-coiffure-2.jpg",
                                title: "Le côté coiffure"
                            }, {
                                id: 4,
                                imageUrl: "/images/cote-coiffure.jpg",
                                title: "Le côté coiffure vu depuis la zone shampoing"
                            }, {
                                id: 5,
                                imageUrl: "/images/cote-shampoings.jpg",
                                title: "Le côté shampoing"
                            }, {
                                id: 6,
                                imageUrl: "/images/salon.jpg",
                                title: "Le salon Bon Lieu Coiffure à Sallenôves"
                            }, {
                                id: 7,
                                imageUrl: "/images/siege-barbier.jpg",
                                title: "Siège de barbier"
                            }, {
                                id: 8,
                                imageUrl: "/images/statue.jpg",
                                title: "Statuette décorative"
                            }, {
                                id: 9,
                                imageUrl: "/images/materiel-rasage.jpg",
                                title: "Rasoir électrique et rasoir de barbier"

                            }]} options={OPTIONS}/>
                        </div>
                    </section>
                    <section className="row mt-5 pt-3">
                        <div className="col-12 mb-4">
                            <h1>L&apos;équipe</h1>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title font-body">Nadine</h2>
                                    <p>
                                        Je suis la créatrice et gérante de l&apos;entreprise Bon Lieu
                                        Coiffure depuis&nbsp;2004. <br/>
                                        La dynamique de mon caractère m&apos;entraîne à apporter de la
                                        nouveauté dans le salon. <br/>
                                        Toujours à la recherche de nouvelles techniques, j&apos;attache
                                        de l&apos;importance à une formation régulière, afin de vous
                                        apporter le meilleur service. <br/>
                                        Votre bien-être reste ma priorité !
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-4 mt-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title font-body">Méryl</h2>
                                    <p>
                                        Coiffeuse polyvalente et passionnée depuis l&apos;enfance par
                                        le métier, je suis titulaire d&apos;un CAP et BP coiffure.{" "}
                                        <br/>
                                        Spontanée, souriante, chaleureuse, je suis toujours à
                                        l&apos;écoute de mes clientes et clients !
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="row mt-5 pt-3">
                        <div className="col-12 mb-4">
                            <h1>Nos marques</h1>
                        </div>
                        <div className="col-10 offset-1 col-lg-12 offset-lg-0">
                            <EmblaCarousel slides={[{
                                id: 1,
                                imageUrl: "/images/marque-artisan.jpg",
                                title: "Logo marque Artisan"
                            }, {
                                id: 2,
                                imageUrl: "/images/marque-broaer.jpg",
                                title: "Logo marque Broaer"
                            }, {
                                id: 3,
                                imageUrl: "/images/marque-bandido.jpg",
                                title: "Logo marque Bandido"
                            }, {
                                id: 4,
                                imageUrl: "/images/marque-milkshake.jpg",
                                title: "Logo marque MilkShake"
                            }, {
                                id: 5,
                                imageUrl: "/images/marque-menstories.jpg",
                                title: "Logo marque Men Stories"
                            }]} options={OPTIONS}/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>;
}