
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux'
import { getMarvelCharactersAction } from '../../Redux/Home/actions'
import login from '../../Assets/Images/Home/login.jpg'
import LTFInput from '../../Components/LTFInput/index'
import LTFButton from '../../Components/LTFButton/index'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      email: '',
      password: ''
    }
  }
  componentDidMount() {
    // this.props.getMarvelCharactersAction();
  }

  render() {
    const { characters } = this.props;
    const { email, password } = this.state;
    const results = characters.results
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'column', height: '100%' }}>
          <View>
            <Image style={{ flex: 1, position: 'absolute', top: 0, left: 0 }} source={login} />
          </View>
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Welcome</Text>
                <Text style={{ color: '#96969a', textAlign: 'center', margin: 10 }}>Login to your account</Text>
                <View style={{ padding: 5, height: 60 }}>
                  <LTFInput
                    placeholder='Email'
                    value={email}
                    onChangeText={value => this.setState({ email: value })}
                    backgroundColor='#ecedf1'
                  />
                </View>
                <View style={{ padding: 5, height: 60 }}>
                  <LTFInput
                    placeholder='Password'
                    value={password}
                    onChangeText={value => this.setState({ password: value })}
                    passwordInput
                    backgroundColor='#ecedf1'
                  />
                </View>
                <View style={{ height: 65, marginTop: 20 }}>
                  <LTFButton
                    onPress={() => alert("a")}
                    backgroundColor={'#f93963'}
                    buttonText={'Login'}
                    radius={30}
                    styles={{
                      marginTop: 10
                    }}
                  />
                </View>
                <Text style={styles.sectionDescription}>
                  {/* {results && results.map(item => {
                    return <Text style={{ color: '#D35400' }} key={item.id}> {item.name}</Text>
                  })} */}
                  Forgot your password ?
                </Text>
                <Text style={styles.sectionDescription}>
                  Don’t have an account?  Sign up
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

      </>
    );
  }


}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black',
    flex: 1,
    // height:200,
    // width:200
    flexDirection: 'row',

  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    borderRadius: 30,
    marginTop: 350,
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    bottom: 0,
    position: 'relative'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 0.7,
    // backgroundColor:'red',
    flexDirection: 'column'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 15,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'center'
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  backgroundContainer: {
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    // backgroundColor: 'red'

  },
  container: {
    // alignItems: 'center',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    width: 100,
    height: 100,
    backgroundColor: 'orange'
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000',

  },
});

function mapStateToProps(state) {
  return {
    characters: state.HomeState.characters
  }
}
export default connect(
  mapStateToProps,
  { getMarvelCharactersAction }
)(App);
