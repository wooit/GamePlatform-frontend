import React, { Component } from 'react'
import TextFormater from '../Formater/TextFormater/TextFormater'
import TitleFormater from '../Formater/TitleFormater/TitleFormater'

class About extends Component {
    render() {
        return (
            <div>
                <TextFormater title='About Me'/>
                <TitleFormater className="justify-content-center">
                    <p>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. </p>
                    <p>“It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”</p>
                    <p>As Cicero would put it, “Um, not so fast.” The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.</p>
                    <p>Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text.</p> 
                    <p>In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word.</p> 
                    <p>Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C.</p>
                    <p>text from the Roman philosopher Cicero.</p>
                </TitleFormater>
            </div>
        )
    }
}

export default About;
