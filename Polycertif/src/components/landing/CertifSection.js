import Title from 'components/landing/Title';
import Button from '@material-tailwind/react/Button';
import CertifCard from 'components/CertifCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CertifSection() {
    const [allCertif, setAllCertif] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/v1/certif/view")
        .then((res) => res.json())
        .then((data) => { setAllCertif(data) });
    }, []);
    const lastCertif = allCertif.slice(
        allCertif.length-6,
        allCertif.length
      );
    const certifEl = lastCertif.map((certif)=> (<CertifCard certif={certif} />))
    return (
        <section className="pt-20 pb-24">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Nouveaux Certifications">
                Ne ratez pas nos nouveaux Certifications! Abonnez Vous!
                </Title>
                <div className='container max-w-7xl mx-auto px-4'>
                    <div className="flex flex-wrap gap-y-9 ">
                       {certifEl}
                    </div>
                    <div className="flex justify-center mt-10">
                    <Link to="/certification">
                        <Button color="red" ripple="light">
                            Lire plus
                        </Button>
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
