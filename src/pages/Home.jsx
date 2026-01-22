import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

const Home = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Voxlom Innovative Solution",
        "url": "https://voxlom.com",
        "logo": "https://voxlom.com/logo.png",
        "description": "Leading technology solutions provider specializing in AI/ML, cloud engineering, software development, and IT consulting services.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kamarajar Tech Campus, 39/A, Gandhi East Street, Panagudi",
            "addressLocality": "Tirunelveli",
            "addressRegion": "Tamil Nadu",
            "postalCode": "627109",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "info@voxlom.com"
        },
        "sameAs": [
            "https://www.facebook.com/people/Voxlom-Innovative/pfbid02V1LwWnthEtk17snLNyXAHSgUmtozCMC1DmFKMVog7j65YUsGJJqbiUSPTXYLBqrsl/",
            "https://www.linkedin.com/company/voxlom",
            "https://www.instagram.com/voxlom"
        ]
    };

    return (
        <>
            <Helmet>
                <title>Voxlom Innovative Solution - AI, Cloud & Software Development Services</title>
                <meta name="description" content="Transform your business with Voxlom's innovative technology solutions. Expert AI/ML, cloud engineering, software development, cybersecurity, and IT consulting services." />
                <meta name="keywords" content="technology solutions, AI services, machine learning, cloud engineering, software development, IT consulting, web development, mobile apps, cybersecurity, digital transformation" />
                <link rel="canonical" href="https://voxlom.com" />

                {/* Open Graph */}
                <meta property="og:title" content="Voxlom Innovative Solution - Technology Solutions Provider" />
                <meta property="og:description" content="Transform your business with innovative AI, cloud, and software development solutions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://voxlom.com" />
                <meta property="og:site_name" content="Voxlom Innovative Solution" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Voxlom Innovative Solution - Technology Solutions" />
                <meta name="twitter:description" content="Transform your business with innovative AI, cloud, and software development solutions." />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <main>
                <Hero />
                <About />
                <Services />
                <Portfolio />
            </main>
        </>
    );
};

export default Home;