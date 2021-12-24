import React, { Component } from 'react';
import './App.css';

const liff = window.liff;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      userLineID: '',
      pictureUrl: '',
      statusMessage: '',
      languageDevice: '',
      versionSDK: '',
      client: '',
      isLogin: '',
      os: ''
    };
  }

  componentDidMount() {
    liff.init({ liffId: '1579235015-DRJy4vn9' })
      .then(async () => {
        if (!liff.isLoggedIn()) {
          liff.login();
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }

  getProfile() {
    liff.getProfile().then(dataInfo => {
      this.setState({
        name: dataInfo.displayName,
        userLineID: dataInfo.userId,
        pictureUrl: dataInfo.pictureUrl,
        statusMessage: dataInfo.statusMessage
      });
    });

    const languageDevice = liff.getLanguage();
    const versionSDK = liff.getVersion();
    const client = liff.isInClient();
    const isLogin = liff.isLoggedIn();
    const os = liff.getOS();

    this.setState({
      languageDevice: languageDevice,
      versionSDK: versionSDK,
      client: (client === true) ? 'YES' : 'NO',
      isLogin: (isLogin === true) ? 'Login' : 'Not Login',
      os: os
    });
  }

  sendMessage() {
    liff.sendMessages([{
      type: 'text',
      text: "Hi LIFF"
    }]).then(() => {
      liff.closeWindow();
    });
  }

  closeLIFF() {
    liff.closeWindow();
  }

  render() {
    return (
      <div className="App">
        <div class="container">
  <div class="wrapper">
    <div class="content">
      <div class="item">
        <h1>COMING SOON</h1>
        <p>This website is under construction.</p>
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
}

export default App;
