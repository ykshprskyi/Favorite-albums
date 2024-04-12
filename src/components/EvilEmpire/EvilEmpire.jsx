import "./EvilEmpire.scss";
import Image from "next/image";

const EvilEmpire = () => {
    return (
        <section className="evil-empire" id="evil-empire">
            <div className="evil-empire-title">Rage Against The Machine - Evil Empire</div>
            <div className="evil-empire-wrapper">
            <div className="evil-empire-wrapper__image">
            <Image
             src="/evilempire.jpg" 
             width={650}
             height={650}
             alt="Cover of Evil Empire album"/>
             </div>
             <div className="evil-empire-wrapper__text">
             <div className="evil-empire-wrapper__text__description">Evil Empire is the second studio album 
             by the American rock band Rage Against the Machine, released on April 16, 1996, by Epic Records. It debuted at number 1 
             on the US Billboard 200 chart with first week sales of 249,000 copies, and the song "Tire Me" won a 1996 Grammy Award for
             Best Metal Performance; "Bulls on Parade" and "People of the Sun" were nominated for Grammys for Best Hard Rock Performance.
             On May 24, 2000, the album was certified triple platinum by the Recording  Association of America.
             The album's title is a reference to a term used in the early 1980s by President  Reagan and many American 
             conservatives to describe the Soviet Union.
             According to MTV News, "The title 'Evil Empire' is taken from what Rage Against The Machine see as  Reagan's 
             slander of the Soviet Union in the eighties.
             "Year of tha Boomerang" had previously been included in the film Higher Learning, though its title was written as "Year of the Boomerang"
             </div>
             
             <ul className="evil-empire-wrapper__text__tracklist">
             <li>1.	People of the Sun</li>
             <li>2.	Bulls on Parade</li>
             <li>3.	Vietnow</li>
             <li>4.	Revolver</li>
             <li>5.	Snakecharmer</li>
             <li>6.	Tire Me</li>
             <li>7.	Down Rodeo</li>
             <li>8.	Without a Face</li>
             <li>9.	Wind Below </li>
             <li>10. Roll Right</li>
             <li>11. Year of tha Boomerang</li>
            </ul>
             <a className="evil-empire-wrapper__text__link" href="https://open.spotify.com/album/24E6rDvGDuYFjlGewp4ntF?si=dhn2JWZgS5mb_M1Jv6ffcA">Open album in spotify</a>
             </div></div>
         </section>
    )
}
export default EvilEmpire;