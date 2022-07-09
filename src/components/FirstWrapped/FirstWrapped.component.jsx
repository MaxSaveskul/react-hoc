import { Component } from "react";
import withMedia from '../../HOCs/withMedia';

class FirstWrapped extends Component {
	render() {
		return <h3>matchMedia says:</h3>;
	};
};

export default withMedia(FirstWrapped, '(min-width: 480px)', 'isMediaMatched');