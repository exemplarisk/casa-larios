import Image from 'next/image';
import React, { useState } from 'react';


function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

type ImageProps = {
    id: number
    href: string
    imageSrc: string
    name: string
    username: string
}


function BlurImage({ image }: { image: ImageProps }) {
    const [isLoading, setLoading] = useState(true);

    return (
        <a href={image.href} className="group">
            <div className="-z-50 w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <Image
                    alt="/images/apartment/terrace.jpg"
                    src={image.imageSrc}
                    layout="fill"
                    objectFit="cover"
                    className={cn(
                        'group-hover:opacity-75 duration-700 ease-in-out',
                        isLoading
                            ? 'grayscale blur-2xl scale-110'
                            : 'grayscale-0 blur-0 scale-100'
                    )}
                    onLoadingComplete={() => setLoading(false)}
                />
            </div>
            <p className="mt-1 text-lg font-medium text-gray-900">{image.name}</p>
        </a>
    );
} export default BlurImage