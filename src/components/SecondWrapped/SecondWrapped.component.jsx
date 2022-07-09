import { Component } from "react";
import withDevice from '../../HOCs/withDevice';

class SecondWrapped extends Component {

	render() {
		const { isMobile, isTablet, isDesktop, isPrinting } = this.props

		let show

		if (isMobile) {
			show = 'Welcome from phone';
		} else if (isTablet) {
			show = 'Welcome from tablet';
		} else if (isDesktop) {
			show = 'Welcome from desktop';
		} else if (isPrinting) {
			show = 'printing';
		}

		return <h1>{show}</h1>
	}
}

export default withDevice(SecondWrapped, '(min-width: 480px)', 'isMediaMatched');