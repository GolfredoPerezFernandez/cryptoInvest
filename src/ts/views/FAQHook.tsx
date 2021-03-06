
import { Colors, Fonts, FontSizes } from '../app/Styles';


const Moralis = require('moralis');
const serverUrl = "https://dkmypapn65am.usemoralis.com:2053/server";
const appId = "eXd9zckjUGhiRrW5TVszfh7u5ZNfmxbXCTCMMjLc";
Moralis.start({ serverUrl, appId });


const _styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    backgroundColor: 'transparent',
  }),
  barControlsContainer: RX.Styles.createViewStyle({
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40
  }),
  editTodoItem: RX.Styles.createTextInputStyle({
    margin: 8,
    width: 700,
    height: 32,
    paddingHorizontal: 4,
    fontSize: FontSizes.size16,
    alignSelf: 'stretch',
  }),
  editTodoItem2: RX.Styles.createTextInputStyle({
    margin: 8,
    width: 300,
    height: 32,
    paddingHorizontal: 4,
    fontSize: FontSizes.size16,
    alignSelf: 'stretch',
  }),
  buttonContainer: RX.Styles.createViewStyle({
    margin: 8,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  slider: RX.Styles.createViewStyle({
    overflow: 'hidden' // for custom animations
  }),
  sliderContentContainer: RX.Styles.createViewStyle({
  }),
  titleStyle55: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center'
  }),
  grid: RX.Styles.createViewStyle({
    maxWidth: 1024,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#eee"
  }),
  chart: RX.Styles.createViewStyle({
    backgroundColor: "white",
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center'
  }),
  text1: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    color: 'black',
  }),
  text2: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 13,
    color: 'black',
  }),
  text3: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 13,
    color: '#9796CF',
  }),
  text4: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 13,
    color: 'white',
  }),
  label: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: FontSizes.size12,
    color: 'black',
  }),
  label2: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: FontSizes.size20,
    color: 'white',
  }),
  logoText: RX.Styles.createTextStyle({
    font: Fonts.displaySemibold,
    fontSize: 46,
    marginHorizontal: 4,
    fontWeight: '100',
    lineHeight: 50,
    color: Colors.white,
    opacity: 1,
    marginBottom: 20
  }),
  logoText5: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 28,
    marginHorizontal: 4,
    color: Colors.white,
    opacity: 1,
  }),
  logoText2: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 28,
    marginHorizontal: 4,
    color: Colors.white,
    opacity: 1,
  }),
  logoText4: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 16,
    marginHorizontal: 4,
    color: Colors.white,
    opacity: 1,
  }),
  logoText3: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 16,
    color: Colors.white,
  }),
  logoText3Tiny: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 12,
    color: Colors.white,
  }),
  logoText6: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 36,
    color: Colors.white,
  }),
  logoText8: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 24,
    color: Colors.white,
  }),
};

import ImageSource from 'modules/images';

import * as RX from 'reactxp';

export const FAQHook = ({
  width,
  height,
  isTiny,
}: {
  width: number;
  height: number;
  isTiny: boolean;
}) => {
  return <RX.ScrollView style={{ flex: 1, backgroundColor: 'black', alignSelf: 'stretch' }} >
    <RX.View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>


      {
        isTiny ?
          <RX.View style={{ flex: 1, marginTop: 60, flexDirection: 'column', width, height: height * 1.4, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
            <RX.View style={{ paddingBottom: 40, width: width, height: (height * 1.4), flex: 1, flexDirection: isTiny ? 'column' : 'row', alignSelf: 'stretch' }} >

              <RX.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }} >
                <RX.Image source={ImageSource.background} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: width * 0.7, height: 320, alignSelf: 'center' }} />


                <RX.Image source={ImageSource.front} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: width * 0.8, marginLeft: 0, marginBottom: 0, height: 90, }} />



                <RX.Text style={[_styles.logoText4, { width: width * 0.7, marginTop: 15, marginBottom: 40 }]}>
                  {'Our team consist of highly motivated and skilled specialists who know how to deal with any issue that might come across. This creates a basis for lasting relationships with our members built on trust and mutual understanding. We are devoted to creating unique and innovative projects along with high quality supporting services. Right now our team consist of 2 guys: Patrick from Netherlands and Golfredo from Colombia. We will be expanding our team as soon as possible with club members that can bring the needed expertise.'}
                </RX.Text>

                <RX.Text style={[_styles.logoText6, { textAlign: 'center', marginTop: 10, width: 200, marginBottom: 5, }]}>
                  {'Follow Us'}
                </RX.Text>
                <RX.Button onPress={() => RX.Linking.openUrl("https://discord.gg/zg6fhZH8tw")}>

                  <RX.Image source={ImageSource.todoLogo} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 10, marginBottom: 10, width: 70, height: 70, }} />

                </RX.Button>
                <RX.Button onPress={() => RX.Linking.openUrl("https://twitter.com/CryptoinvestNF1")}>
                  <RX.Image source={ImageSource.twitter} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 10, marginBottom: 100, width: 70, height: 70, }} />

                </RX.Button>
              </RX.View >

            </RX.View>
          </RX.View> :
          <RX.View style={{ flex: 1, marginTop: 40, flexDirection: 'row', width, height: (height - 80), alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
            <RX.View style={{ flex: 50, justifyContent: "center", alignItems: "center" }}>
              <RX.Image source={ImageSource.background} resizeMode={'cover'} resizeMethod={'auto'} style={{ width: width * 0.3, marginRight: 30, height: width * 0.3, alignSelf: 'flex-end' }} />

            </RX.View >
            <RX.View style={{ flex: 50, paddingRight: 50, paddingTop: 50, justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'stretch' }} >


              <RX.Image source={ImageSource.front} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 390, marginLeft: 0, marginBottom: 30, height: 50, }} />



              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'Out team consist of highly motivated and skilled specialists who know how to deal with any issue that might come across. This creates a basis for lasting relationships with our members built on trust and mutual understanding. We are devoted to creating unique and innnovative projects alogin with hight quality supporting services. Our team consist of 2 guys right now Patrick from Netherlands and Golfredo from Colombia. But will be expand our team as soon as possible with club members that can bring the needed expertise.'}
              </RX.Text>

              <RX.Text style={[_styles.logoText6, { textAlign: 'left', marginTop: 20, width: 200, marginBottom: 5, }]}>
                {'Follow Us'}
              </RX.Text>
              <RX.View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <RX.Button onPress={() => RX.Linking.openUrl("https://discord.gg/zg6fhZH8tw")}>
                  <RX.Image source={ImageSource.todoLogo} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 10, marginBottom: 100, width: 70, height: 70, }} />

                </RX.Button>

                <RX.Button onPress={() => RX.Linking.openUrl("https://twitter.com/CryptoReviewEth")}>
                  <RX.Image source={ImageSource.twitter} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 10, marginBottom: 100, marginLeft: 30, width: 70, height: 70, }} />

                </RX.Button>
              </RX.View >
            </RX.View >

          </RX.View>
      }

      <RX.View style={{ width: width, height: height * 0.25, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
        <RX.Image source={ImageSource.logo} style={{ width: 250, marginTop: 5, height: 70 }} />

      </RX.View >
    </RX.View >

  </RX.ScrollView >


}

