import { useTranslation, Trans } from 'react-i18next';
import { AllImages } from '../../helpers';
import './HowWeDoIt.scss';
export const HowWeDoIt = () => {
    const [t] = useTranslation("global");

    return (
        <div id="how-we-do-it" className="how-we-do-it">
            <div className="img-how-we-do-it">
                <img src={AllImages.Olla} alt="angular-logo" />
            </div>
            <div className='txt-how-we-do-it'>
                <label className="title">{t("how-we-do-it.title")}</label>
                <div className="text-wrapper">
                    <label className='textpart'>
                        <Trans>{t("how-we-do-it.text1")}</Trans>
                    </label>
                    <label  className='textpart'>
                        <Trans>{t("how-we-do-it.text2")}</Trans>
                    </label>
                    <label  className='textpart'>
                        <Trans>{t("how-we-do-it.text3")}</Trans>
                    </label>
                    <label  className='textpart'>
                        <Trans>{t("how-we-do-it.text4")}</Trans>
                    </label>
                </div>
            </div>

        </div>
    )
}
