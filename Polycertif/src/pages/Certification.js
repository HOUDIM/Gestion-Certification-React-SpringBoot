import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import CertificationSection from 'components/Certification/CertificationSection';

export default function Certification() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <CertificationSection/>
            </main>
            <DefaultFooter />
        </>
    );
}
