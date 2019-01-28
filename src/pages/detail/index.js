import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';

import {
	DetailWrapper,
	Header,
	Content,
} from './style.js';


class Detail extends Component {

	componentDidMount() {
		this.props.getDetailData(this.props.match.params.id);
	}

	render() {
		console.log(this.props.match.params.id);
		return (
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content dangerouslySetInnerHTML={{ __html: this.props.content }} ></Content>
			</DetailWrapper>
		)
	}
}
const mapState = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content']),
})

const mapDispatch = (dispatch) => ({
	getDetailData(id) {
		dispatch(actionCreators.getDetailInfo(id));
	}
})

export default connect(mapState, mapDispatch)(withRouter(Detail));