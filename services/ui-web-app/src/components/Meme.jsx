//hyperlink every card its url, when the url is clicked, open the meme on full page.
//use react-router to achieve the above goal
import { Card } from "grommet";
import MemeBody from "./MemeBody";
import MemeHeader from "./MemeHeader";

const Meme = ({ value }) => {

	return (
		<Card
			key={value.id}
			// onClick={() => {
			
			//   open the card on fullscreen
			// }}
			height='medium'
			width='medium'
		>
			<MemeHeader title={value.data.title} />
			
			<MemeBody
				type={value.type} s
				rc={value.data.url}
			/>
		</Card>
	)	
}

export default Meme;