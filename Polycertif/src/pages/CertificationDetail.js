import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import Detail from 'components/certificationDetail/Details';
import Comment from 'components/certificationDetail/Comment';

export default function CertificationDetail() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <section className=" bg-gray-100 pt-20 pb-24">
                <div className="container max-w-7xl px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                        <div className=" ">
                            <Detail/>
                            <Comment/>
                        </div>
                    </div>
                </div>
            </section>
               
            </main>
            <DefaultFooter />
        </>
    );
}
