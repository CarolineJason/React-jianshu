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
	width: 280px;
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

export const RecommendWrapper = styled.div `
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div `
	width: 280px;
	height: 50px;
	margin-bottom: 10px;
	background: url("http://cdn2.jianshu.io/assets/web/seven-hot-344e8726a99ec07a8d552b33fe50be82.png");
	background-size: 100% 100%;
`;

export const RecommendInfo = styled.div`
	width: 280px;
	margin: 20px 0;
	padding: 10px 22px;
	height: 80px;
	display: flex;
	border-radius: 8px;
	border:1px solid #eee;
	.recommend-pic {
		width: 60px;
		height: 60px;
		display: block;
		opacity: .85;
		cursor: pointer;
	}
	.download {
		margin-left: 15px;
		margin-top: 6px;
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		.title {
			font-size: 15px;
			color: rgba(0,0,0, .85);
			margin-top: 3px;
			cursor: pointer;
		}
		.desc {
			color: #999;
			font-size: 13px;
			margin-top: -3px;
			cursor: pointer;
		}
	}
`;

export const WriterWrap = styled.div `
	width: 280px;
	height: 560px;
	margin-bottom: 20px;
	padding-top: 0;
	font-size: 13px;
`;

export const WriterItem = styled.div`
	width: 280px;
	height: 50px;
	margin-bottom: 20px;
	.writer {
		display: flex;
		.writer-pic {
			width: 48px;
			height: 48px;
			border-radius: 50%;
			cursor: pointer;
		}
		.writer-info {
			height: 50px;
			margin-left: 10px;
			.writer-name {
				overflow: hidden;
				width: 220px;
				margin-top: 5px;
				color: #333;
				font-size: 14px;
				cursor: pointer;
				.focus {
					float: right;
					color:#42c02e;
					cursor: pointer;
				}
			}
			.writer-desc {
				margin-top: -10px;
				font-size: 12px;
				color: #969696;
				cursor: pointer;
			}
		}
	}
`;

export const  LoadMore = styled.div `
	width: 100%;
	height: 40px;
	margin: 30px 0;
	line-height: 40px;
	color: #fff;
	font-size: 16px;
	border-radius: 8px;
	cursor: pointer;
	text-align: center;
	background: #ccc;

`;