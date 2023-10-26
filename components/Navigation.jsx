import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navigation() {
    return (
        <div className="navigation mt-3">
            <section className="text-end mx-4">
                <Link href="/">
                    <Image
                        src="/images/shaper__logo.png"
                        priority={true}
                        width={100}
                        height={35}
                        alt="Shaper ambassador lady"
                    />
                </Link>
            </section>
        </div>
    );
}
