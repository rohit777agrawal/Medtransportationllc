import React from 'react'
import { Header } from './_components/header';
import { Footer } from './_components/footer';

const GeneralLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return(
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default GeneralLayout;
