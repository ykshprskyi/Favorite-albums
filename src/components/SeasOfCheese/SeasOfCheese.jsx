import "./SeasOfCheese.scss";
import Image from "next/image";


const SeasOfCheese = () => {
    return (
        <section className="seas-of-cheese" id="seas-of-cheese">
            <div className="seas-of-cheese-title">Primus - Sailing the Seas of Cheese</div>
            <div className="seas-of-cheese-wrapper">
            <div className="seas-of-cheese-wrapper__image">
            <Image
             src="/seasofcheese.jpg" 
             width={650}
             height={650}
             alt="Cover of Sailing the Seas of Cheese album"/>
             </div>
             <div className="seas-of-cheese-wrapper__text">
             <div className="seas-of-cheese-wrapper__text__description">Sailing the Seas of Cheese is the second studio album and major label debut by the American rock band Primus. 
             It was released on May 14, 1991, through Interscope Records.
             It spawned three singles: "Jerry Was a Race Car Driver", "Tommy the Cat", and "Those Damned Blue-Collar Tweekers".
             The album's lead single "Jerry Was a Race Car Driver" is known for its intricate bassline that Les Claypool played on a six-string bass using the tapping technique.
             It also contains a sample from the movie The Texas Chainsaw Massacre 2 in which the character Chop Top exclaims "Dog will hunt!" 
             The track "Los Bastardos" contains samples from the BBC television series The Young Ones including Vyvyan shouting, "Shut up, you bastards!", Vyvyan's mother saying, "He is a bastard isn't he?", as well as Rick saying, "You just called me a bastard, didn't you?"
           
             </div>
             
             <ul className="seas-of-cheese-wrapper__text__tracklist">
             <li>1.	Seas of Cheese</li>
             <li>2.	Here Come the Bastards</li>
             <li>3.	Sgt. Baker</li>
             <li>4. American Life</li>
             <li>5.	Jerry Was a Race Car Driver</li>
             <li>6.	Eleven</li>
             <li>7.	Is It Luck?</li>
             <li>8.	Grandad's Little Ditty</li>
             <li>9.	Tommy the Cat" </li>
             <li>10. Sathington Waltz"</li>
             <li>11. Those Damned Blue-Collar Tweekers</li>
             <li>12. Fish On (Fisherman Chronicles, Chapter II)</li>
             <li>13. Los Bastardos</li></ul>
             <a className="seas-of-cheese-wrapper__text__link" href="https://open.spotify.com/album/2sjF68plsvYE7M3FaMf6rD?si=8lvnQiPqSDW8PD6EX-HN0Q">Open album in spotify</a>
             </div></div>
        </section>
    )
}
export default SeasOfCheese;