import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <header className="bg-blue-600 text-white py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Welcome Home</h1>
                </div>
            </header>
            
            <main className="container mx-auto px-4 py-8">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                    <p className="text-gray-600">
                        This is your home page. Add your content here.
                    </p>
                </section>
            </main>
        </div>
    );
}