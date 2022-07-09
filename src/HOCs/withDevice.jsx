import { Component } from "react";
import { isMediaMatched } from '../isMediaMatched.js'

const withDevice = (WrappedComponent) => {
	class withDevice extends Component {
		state = {
			isMobile: false,
			isTablet: false,
			isDesktop: false,
			isPrinting: false,
		};

		handleChangeDevice = () => {
			this.setState({
				isMobile: isMediaMatched("screen and (max-width: 720px)"),
				isTablet: isMediaMatched("screen and (min-width: 721px) and (max-width: 1200px)"),
				isDesktop: isMediaMatched("screen and (min-width: 1201px)"),
				isPrinting: isMediaMatched("print"),
			});
		};

		componentDidMount() {
			this.handleChangeDevice();
			window.addEventListener('resize', this.handleChangeDevice);
		};

		componentWillUnmount() {
			window.removeEventListener('resize', this.handleChangeDevice)
		};

		render() {
			return <WrappedComponent {...this.state} />;
		};
	};

	withDevice.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	return withDevice;
};

export default withDevice;