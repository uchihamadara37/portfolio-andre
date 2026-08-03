import Contact from "@/components/Contact";
import BackgroundEllipses from "@/components/EllipseBackground";
import LightPillar from "@/components/lightpillar";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Image from "next/image";

export default function Home() {
  // const [tabActive, setTabActive] = useState("main");
  return (
    <div id="main" className="relative w-full flex flex-col flex-1 items-center bg-slate-900 font-sans overflow-x-hidden">
      <LightPillar
        topColor="#5227FF"
        bottomColor="#FF9FFC"
        intensity={1}
        rotationSpeed={1.5}
        glowAmount={0.002}
        pillarWidth={3}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={25}
        interactive={false}
        mixBlendMode="screen"
        quality="high"
      />
      <Navbar/>

      {/* elipse blur */}
      {/* <div className="elips1 fixed right-[-100] top-[200] w-100 h-100 rounded-full bg-linear-to-r from-purple-500/60 to-pink-500/80 opacity-30 blur-3xl"></div>
      <div className="elips1 fixed left-[-100] top-[-100] w-100 h-100 rounded-full bg-linear-to-r from-pink-500/60 to-purple-400/80 opacity-30 blur-3xl"></div> */}
      <BackgroundEllipses/>


      {/* hero */}
      <div className="flex flex-col gap-2 items-center justify-center mt-44 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">ANDREA ALFIAN</h1>
        <h3 className="text-lg md:text-2xl font-light text-white drop-shadow-lg"><span className="font-semibold">Fullstack Programmer</span> and AI Enthusiast</h3>
        <h3 className="text-md md:text-lg font-light text-white drop-shadow-lg text-center">Focused and experienced in building multi-platform applications.</h3>
      </div>
      

      <div className="flex flex-col gap-1 items-center justify-center mt-20 mb-20">
        <div className="text-lg">Bachelor of <span className="font-semibold">Informatics Engineering</span></div>
        <div className="text-lg">UPN Veteran Yogyakarta</div>
      </div>

      <Portfolio/>

      <Contact/>
    </div>
  );
}
