"use client";

import Image from "next/image";
import Link from "next/link";
import HeroGlow from "./HeroGlow";

// Update data dengan menambahkan 'desc' dan 'image'
// Pastikan kamu menyiapkan screenshot web dan menaruhnya di folder /public/portfolio/
const portfolioData = [
    {
        id: 1,
        title: "Bocah Teknik Pengelasan",
        desc: "Aplikasi berbasis web untuk mendukung kegiatan promosi usaha pengelasan.",
        github: "https://github.com/uchihamadara37/op2_bocah_teknik_pengelasan",
        demo: "https://www.bocahteknik.my.id/",
        image: "/portfolio/bocahteknik.png", // Ganti dengan nama file gambarmu nanti
    },
    {
        id: 2,
        title: "Nodewave Task Helper",
        desc: "Frontend project untuk manajemen tugas yang membantu tim melacak progres dan kolaborasi secara efisien.",
        github: "https://github.com/uchihamadara37/frontend-project-task-helper",
        demo: "https://nodewavetask.vercel.app/",
        image: "/portfolio/nodewavetask.png",
    },
    {
        id: 3,
        title: "Sopra Dashboard",
        desc: "Dashboard interaktif dengan visualisasi data yang mempermudah pemantauan metrik stock barang.",
        github: "https://github.com/uchihamadara37/frontend-dashboard-sopra",
        demo: "https://sopra-dashboard.vercel.app/",
        image: "/portfolio/sopradashboard.png",
    },
    {
        id: 4,
        title: "Job Recommendation",
        desc: "Platform rekomendasi pekerjaan yang dibangun untuk peserta Codingcamp guna menemukan karir yang sesuai melalui fitur model Siamese Network DeepLearning.",
        github: "https://github.com/uchihamadara37/frontend-job-recomendation-Codingcamp",
        demo: "https://frontend-job-recomendation-codingca.vercel.app/",
        image: "/portfolio/jobrecommendation.png",
    },
    {
        id: 5,
        title: "Lapak Qurban",
        desc: "Website untuk penyedia hewan qurban yang bisa langsung antar dan sesuai syariat.",
        github: "https://github.com/uchihamadara37/onboarding_junior_fullstack_qurban",
        demo: "https://lapakqurban.vercel.app/",
        image: "/portfolio/lapakqurban.png", // Ini contoh untuk gambar yang kamu tunjukkan
    },
    {
        id: 6,
        title: "Bencana Dicoding App",
        desc: "Aplikasi pelaporan potensi kejadian gempa bumi berdasarkan titik lokasi dan data gempa terkini, dibangun untuk peserta Dicoding.",
        github: "https://github.com/uchihamadara37/bencana_dicoding_app",
        demo: "https://bencana-dicoding-app.vercel.app/",
        image: "/portfolio/bencanadicoding.png",
    },
    {
        id: 7,
        title: "Nova Solana Web3",
        desc: "Frontend desentralisasi (dApp) yang dibangun di atas ekosistem blockchain Solana untuk transaksi web3 (Devnet).",
        github: "https://github.com/uchihamadara37/Nova_frontend_SOLANA",
        demo: "https://nova-frontend-solana.vercel.app/",
        image: "/portfolio/frontendsolana.png",
    },
];

export default function Portfolio() {
    return (
        <div className="relative w-full mx-auto py-10 px-4 md:px-8 lg:px-16 " id="portfolio">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mt-5 mb-12 text-center">
                PORTFOLIO 
            </h2>
            {/* <HeroGlow className="relative"/> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col p-4 md:p-6 rounded-2xl md:rounded-4xl bg-white/10 backdrop-blur-sm border border-indigo-500/20 shadow-xl transition-transform duration-300 hover:scale-[1.04] hover:backdrop-blur-md hover:shadow-2xl"
                    >
                        {/* Header: Title & Description */}
                        <div className="mb-2 md:mb-4">
                            <h3 className="text-2xl font-bold text-white mb-1 md:mb-3">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                                {project.desc}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mb-4 md:mb-6">
                            {/* GitHub Button */}
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-2 py-1.5 bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-medium rounded-full transition-colors border border-white/30"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                Visit repository
                            </Link>

                            {/* Vercel / App Button */}
                            <Link
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-2 py-1.5 bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-medium rounded-full transition-colors border border-white/30"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                                </svg>
                                Visit App
                            </Link>
                        </div>

                        {/* Preview Image */}
                        <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden bg-gray-900 border border-white/10 mt-auto">
                            <Image
                                src={project.image}
                                alt={`Preview of ${project.title}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-top hover:object-bottom transition-all duration-[3000ms] ease-in-out"
                            // object-top dan efek hover ke object-bottom membuat 
                            // gambar bisa 'di-scroll' otomatis jika gambarnya panjang
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}