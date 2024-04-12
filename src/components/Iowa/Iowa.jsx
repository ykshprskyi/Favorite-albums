import "./Iowa.scss";
import Image from "next/image";

const Iowa = () => {
    return (
        <section className="iowa" id="iowa">
           <div className="iowa-title">Slipknot - Iowa</div> 
           <div className="iowa-wrapper">
                <div className="iowa-wrapper__image">
                    <Image
                    src="/iowa.jpg" 
                    width={650}
                    height={650} 
                    priority
                    alt="Cover of Iowa album"/></div>
                    <div className="iowa-wrapper__text">
                    <div className="iowa-wrapper__text__description">Iowa is the second studio album by American heavy metal band Slipknot.
                    Produced by the band and Ross Robinson, it was released on August 28, 2001, by Roadrunner Records. 
                    The title derives from the band's home state, Iowa, which members have stated is one of their greatest sources of inspiration. 
                    With much anticipation for the album following the success of their 1999 self-titled debut, pressures on the band were high. 
                    Their relationships with each other suffered and this was later described as the darkest time of their career.
                    It was also the first full album to feature guitarist Jim Root after only appearing on one song from their previous album.
                    Despite troubles within the band and with Iowa's development, Slipknot promoted it for almost a year.
                    </div>
                    <ul className="iowa-wrapper__text__tracklist">
                    <li>1. (515)</li>
                    <li>2. People = Shit</li>
                    <li>3. Disasterpiece</li>
                    <li>4. My Plague</li>
                    <li>5. Everything Ends</li>
                    <li>6. The Heretic Anthem</li>
                    <li>7. Gently</li>
                    <li>8. Left Behind</li>
                    <li>9. The Shape</li>
                    <li>10. I Am Hated</li>
                    <li>11. Skin Ticket</li>
                    <li>12. New Abortion</li>
                    <li>13. Metabolic</li>
                    <li>14. Iowa</li>
                    <li>15. My Plague (New Abuse Mix)</li>
                    </ul>
                    <a className="iowa-wrapper__text__link" href="https://open.spotify.com/album/5Zs0mNCTs73CqPKbZPWFX9?si=o3Qkj0lqQy673sItF6DG9g">Open album in spotify</a>
                    </div>
             </div>
        </section>
    )
}
export default Iowa;