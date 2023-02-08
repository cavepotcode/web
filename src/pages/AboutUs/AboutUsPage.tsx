import { OurHistory } from "../../components/aboutUs/ourHistory/OurHistory";
import { WeAre } from "../../components/aboutUs/weAre/WeAre";
import { WhereNameComeFrom } from "../../components/aboutUs/whereNameComeFrom/WhereNameComeFrom";
import { IntroAboutUs } from "../../components/aboutUs/introAboutUs/IntroAboutUs";
import './AboutUsPage.scss'
import { Numbers } from "../../components/aboutUs/numbers/Numbers";

export function AboutUsPage() {
    const years = new Date().getFullYear() - 2013;
    return (
        <div className="about-us">
            <IntroAboutUs />
            <WhereNameComeFrom />
            <OurHistory />
            <Numbers numbers={[{ number: years, title: "Years", text: 'Over 10 Years of Experience in delivering Successful Projects' },
            { number: 20, plus: true, title: 'Clients', text: 'More Than 20 Satisfied Clients' },
            { number: 30, plus: true, title: 'Projects', text: 'Over 30 Successful Projects Delivered' }]} />
            <WeAre />
        </div>
    );

}