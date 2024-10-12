import Image from 'next/image';

function FacebookIcon() {
    return (
        <a href="https://web.facebook.com/ta.impresiones">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Facebook</title>
                <path
                    d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0zm-2.225 12.219h-3.042v9.263h-4.11v-9.263h-2.848v-3.428h2.848v-2.517c0-2.805 1.24-4.56 4.658-4.56 1.25 0 2.56.225 2.56.225v3.196h-1.444c-1.39 0-1.833.867-1.833 1.753v2.015h3.42l-.54 3.428z"
                    fill="currentColor"
                />
            </svg>
        </a>
    );
}

function InstagramIcon() {
    return (
        <a href="https://www.instagram.com/taimpresiones3dlaplata/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 256 256"
            >
                <g
                    fill="#ffffff"
                    fillRule="nonzero" // Usar camelCase
                    stroke="none"
                    strokeWidth="1" // Usar camelCase
                    strokeLinecap="butt" // Usar camelCase
                    strokeLinejoin="miter" // Usar camelCase
                    strokeMiterlimit="10" // Usar camelCase
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                >
                    <g transform="scale(8.53333,8.53333)">
                        <path d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"></path>
                    </g>
                </g>
            </svg>
        </a>
    );
}

type Data = {
    name: string;
    avatar: string;
    links: Array<{
        href: string;
        title: string;
        image?: string;
    }>;
    socials: Array<{
        href: string;
        title: string;
    }>;
};

function LinkCard({
    href,
    title,
    image,
}: {
    href: string;
    title: string;
    image?: string;
}) {
    return (
        <a
            href={href}
            className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all 
      border border-gray-300 mb-3 bg-gray-100 max-w-3xl"
        >
            <div className="flex text-center w-full">
                {image && ( // Mostrar solo si existe la imagen
                    <div className="w-10 h-10">
                        <Image
                            className="rounded-sm"
                            alt={title}
                            src={image}
                            width={40}
                            height={40}
                        />
                    </div>
                )}
                <h2
                    className="flex justify-center items-center 
        font-semibold w-full text-gray-700 -ml-10"
                >
                    {title}
                </h2>
            </div>
        </a>
    );
}

const data: Data = {
    name: 'TA Impresiones 3D',
    avatar: '/img/logo.png',
    links: [
        {
            href: 'https://www.instagram.com/taimpresiones3dlaplata/',
            title: 'Instagram',
            image: '/img/instagram.png',
        },
        {
            href: 'https://web.facebook.com/ta.impresiones',
            title: 'Facebook',
            image: '/img/facebook.png',
        },
        {
            href: 'https://www.tiktok.com/@taimpresiones3dlaplat',
            title: 'TkKtok',
            image: '/img/tiktok.png',
        },
    ],
    socials: [
        {
            href: 'https://web.facebook.com/ta.impresiones',
            title: 'Facebook',
        },
        {
            href: 'https://www.instagram.com/taimpresiones3dlaplata/',
            title: 'Instagram',
        },
    ],
};

export default function HomePage() {
    return (
        <div
            className="flex items-center flex-col mx-auto w-full justify-center mt-16
    px-8"
        >
            <Image
                className="rounded-full"
                alt={data.name}
                src={data.avatar}
                width={96}
                height={96}
            />

            <h1 className="font-bold mt-4 text-xl mb-8 text-white">
                {data.name}
            </h1>

            {data.links.map((link) => (
                <LinkCard key={link.href} {...link} />
            ))}

            <div className="flex items-center gap-4 mt-8 text-white">
                {data.socials.map((social) => {
                    if (social.href.includes('facebook')) {
                        return <FacebookIcon key={social.href} />;
                    }
                    if (social.href.includes('instagram')) {
                        return <InstagramIcon key={social.href} />;
                    }
                    return null;
                })}
            </div>
        </div>
    );
}
