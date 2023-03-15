import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import H6 from '@material-tailwind/react/Heading6';
//import Teamwork2 from 'assets/img/teamwork.jpeg';
import Teamwork from 'assets/img/certificate.jpeg';
import Paragraph from '@material-tailwind/react/Paragraph';
import { CardImage } from '@material-tailwind/react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default function CertifCard({certif}) { 
        return (
        <div className="w-full md:w-4/12 px-4 flex justify-center text-center mt-7 ">
            <Link to={`/certification/${certif.certif_id}`}>
                <Card>
                    <CardImage alt="Card Image" src={Teamwork} />
                    <CardBody>
                        <H6 color="gray">{certif.certif_title}</H6>
                        <Paragraph color="blueGray">
                            {certif.certif_prix} DT
                        </Paragraph>
                    </CardBody>
                </Card>
            </Link>
        </div>
    );
}
