import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Polycampus from 'assets/img/Poly-campus.jpg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="red" icon="folder_open" title="Microsoft Office Specialist">
                        Une certification Microsoft indiquant qu'un professionnel est un expert de Microsoft Office.
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="autorenew"
                        title="IT Specialist"
                    >
                        Un moyen pour les étudiants de valider les compétences informatiques.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="fingerprint"
                        title="IBM"
                    >
                        International Business Machines Corporation.
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Poly Formation et Certification</H4>
                        <LeadText color="blueGray">
                        POLYFC, centre de Formation et Certification à l’école Polytechnique de Sousse,
                        est un centre de formation leader dans le domaine de la formation…
                        </LeadText>
                      
                        <a
                            href="https://www.polytecsousse.tn/polyfc/"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Lire Plus
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Polycampus} />
                            <CardBody>
                                <H6 color="gray">L'école Polytechnique De Sousse</H6>
                                <Paragraph color="blueGray">
                                Fondée en 2009, L’Ecole Polytechnique de Sousse est une grande école privée
                                d’enseignement et de recherche à vocation internationale, accréditée EUR- ACE
                                et qui a pour unique vocation de former des ingénieurs ayant un niveau technique
                                et scientifique conforme aux meilleurs standards internationaux.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
