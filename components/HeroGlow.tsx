"use client";

export default function HeroGlow({ className }: { className?: string }) {
    return (
        // Container utama: relative dengan tinggi sangat kecil (h-px) sebagai jangkar
        // bg-[#08082D]
        <div className={`flex items-center justify-center w-full mx-auto h-52 pointer-events-none  ${className}`}>
            <div
                // className="absolute inset-0 mix-blend-color-dodge"
                className="absolute inset-0"
                style={{
                    background: `
      conic-gradient(from 270deg at 30% 52%, #FAFAFA 0%, #5B5A5A 20%, #111111 96%) right / calc(50% + 1px) 100% no-repeat,
        conic-gradient(from 90deg at 70% 52%, #111111 4%, #5B5A5A 20%, #FAFAFA 100%) left / calc(50% + 1px) 100% no-repeat
    `
                }}
            />
            {/* <div
                className="absolute w-full h-full bg-[linear-gradient(to_bottom,#08082D_0%,#08081b00_49%,#08082D_100%)]"
            /> */}
        </div>
    );
}