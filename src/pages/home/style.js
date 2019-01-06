import styled from 'styled-components';

export const HomeWrapper = styled.div `
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div `
	float: left;
	width: 625px;
	margin-left: 15px;
	padding-top: 30px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div `
	width: 240px;
	float: right;

`;

export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	background: #f7f7f7;
	padding-right: 10px;
	margin-left: 18px;
	margin-bottom: 15px;
	color: #000;
	border-radius: 4px;
	.topic-pic {
		float: left;
		display: block;
		width: 32px;
		height: 32px;
		margin-right:10px;
		border-radius: 4px;
	}
`;

export const ListItem = styled.div `
	padding: 20px 0;
	border-bottom: 1px solid #ccc;
	overflow: hidden;
	.pic {
		display: block;
		float: right;
		width: 125px;
		height: 100px;
		border-radius: 10px;
	}
`;

export const ListInfo = styled.div`
	width: 490px;
	float: left;
	.title {
		font-size: 18px;
		line-height: 27px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 14px;
		color: #999;
	}
`;
