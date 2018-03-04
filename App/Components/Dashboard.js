import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
	} from 'react-native';
	import Profile from './Profile'
	import api from '../Utils/api'
	import Repositories from './Repositories'
	import Notes from './Notes'

let styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1
    },
    image: {
        height: 350,
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
});

class Dashboard extends React.Component{
	constructor(props) {
		super(props);
		this.goToProfile = this.goToProfile.bind(this);
		this.goToNotes = this.goToNotes.bind(this);
		this.goToRepos = this.goToRepos.bind(this);
	}

	makeBackground(btn) {
		let obj = {
			flexDirection: 'row',
			alignSelf: 'stretch',
			justifyContent: 'center',
			flex: 1
		}

		if (btn === 0) {
			obj.backgroundColor = "#48BBEC";
		} else if (btn === 1) {
			obj.backgroundColor = "#E77AAE";
		} else {
			obj.backgroundColor = "#758Bf4";
		}

		return obj;
	}

	goToProfile() {
		this.props.navigator.push({
			title: 'Profile page',
			component: Profile,
			passProps: {userInfo: this.props.userInfo}
		});
	}

	goToRepos() {
		api.getRepos(this.props.userInfo.login)
		.then((res) => {
			this.props.navigator.push({
				title: 'Profile page',
				component: Repositories,
				passProps: {
					userInfo: this.props.userInfo,
					repos: res
				}
			});
		})
		
	}

	goToNotes() {
		api.getNotes(this.props.userInfo.login)
		.then((res) => {
			res = res || {};
			this.props.navigator.push({
				title: 'Notes',
				component: Notes,
				passProps: {
					notes: res,
					userInfo: this.props.userInfo
				}
			})
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}></Image>
				<TouchableHighlight
					style = {this.makeBackground(0)}
					onPress={this.goToProfile}
					underlayColor="#88D4F5">
					<Text style={styles.buttonText}>View Profile</Text>
				</TouchableHighlight>

				<TouchableHighlight
					style = {this.makeBackground(1)}
					onPress={this.goToRepos}
					underlayColor="#88D4F5">
					<Text style={styles.buttonText}>View Repositories</Text>
				</TouchableHighlight>

				<TouchableHighlight
					style = {this.makeBackground(2)}
					onPress={this.goToNotes}
					underlayColor="#88D4F5">
					<Text style={styles.buttonText}>Take Notes</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

export default Dashboard