import { Component } from 'react';
import { isMediaMatched } from '../isMediaMatched.js'

const withMedia = (WrappedComponent, media, option) => {
	class withMedia extends Component {
		state = {
			mediaMatched: false,
		};

		handleResize = () => {
			this.setState({ mediaMatched: isMediaMatched(media) });
		};

		componentDidMount() {
			this.handleResize();
			window.addEventListener("resize", this.handleResize);
		};

		componentWillUnmount() {
			window.removeEventListener("resize", this.handleResize);
		};

		render() {
			const props = { [option ?? "matchMedia"]: this.state.mediaMatched };
			return <WrappedComponent {...props} />;
		}
	}

	withMedia.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	return withMedia;
}

export default withMedia;