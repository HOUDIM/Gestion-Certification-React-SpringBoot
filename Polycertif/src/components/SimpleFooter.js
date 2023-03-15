export default function SimpleFooter() {
    return (
        <>
            <footer className="pt-8 pb-6">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4 md:justify-between">
                        

                        <div className="text-sm text-white font-medium">
                        Copyright © {new Date().getFullYear()}  Developed
                                 by{' '}
                                <a
                                    href="https://www.facebook.com/people/Khouloud-Dimassi/100073964132304/"
                                    className="text-gray-700 hover:text-gray-900 transition-all"
                                >
                                    Khouloud DIMASSI
                                </a>
                                 <a> & </a>
                                 <a
                                    href="https://www.facebook.com/houssem.dimassi.5"
                                    className="text-gray-700 hover:text-gray-900 transition-all"
                                >
                                    Houssem DIMASSI
                                </a>
                                .
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
