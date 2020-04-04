
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
import CustomInput from '../../Components/CustomInput/index'
import moduleName from '../../Components/CustomButton/index'
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
        <View style={{ flex: 1, backgroundColor: 'transparent' }}>
          <View>
            <Image style={{ flex: 1, position: 'absolute', top: 0, left: 0 }} source={login} />
          </View>
          <ScrollView style={{ flex: 1, }}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Welcome</Text>
                <View style={{ marginVertical: 5 }}>
                  <CustomInput
                    placeholder='Email'
                    value={email}
                    onChangeText={value => this.setState({ email: value })}
                    backgroundColor='#ecedf1'
                  />

                </View>
                <View style={{ marginVertical: 5 }}>
                  <CustomInput
                    placeholder='Password'
                    value={password}
                    onChangeText={value => this.setState({ password: value })}
                    passwordInput
                    backgroundColor='#ecedf1'
                  />
                </View>

                <View style={{ height: 100, backgroundColor: '#f93963', borderRadius: 30, justifyContent: 'center', }}>
                  <Button
                    title='Login'
                    color='white'
                    onPress={() => alert(password)}
                  />
                {/* <Text style={styles.sectionDescription}>
                  {results && results.map(item => {
                    return <Text style={{ color: '#D35400' }} key={item.id}> {item.name}</Text>
                  })}
                </Text> */}
                </View>
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
    backgroundColor: Colors.black,
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
    bottom: 0,
    top: 350,
    height: 500,
    flex: 1
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    // backgroundColor:'red',
    flexDirection: 'column'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
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
