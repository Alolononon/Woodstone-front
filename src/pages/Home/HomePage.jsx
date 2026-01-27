import HeroBanner from "./components/HeroBanner";
import TuitionRates from "./components/TuitionRates";
import WelcomeBanner from "./components/WelcomeBanner";


export default function HomePage() {
    return (
        <div>
            <WelcomeBanner />
            <HeroBanner />
            <TuitionRates />
            
        </div>
    )
}