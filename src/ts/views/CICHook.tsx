
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

export const CICHook = ({
  width,
  height,
  isTiny,
}: {
  width: number;
  height: number;
  isTiny: boolean;
}) => {
  return <RX.ScrollView style={{ flex: 1, backgroundColor: 'black', alignSelf: 'stretch' }} >
    {
      isTiny ?
        <RX.View style={{ flex: 1, marginTop: 60, flexDirection: 'column', width, height: height * 1.4, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
          <RX.View style={{ paddingBottom: 40, width: width, height: (height * 1.4), flex: 1, flexDirection: isTiny ? 'column' : 'row', alignSelf: 'stretch' }} >

            <RX.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }} >
              <RX.Image source={ImageSource.background} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: width * 0.7, height: 320, alignSelf: 'center' }} />



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
        <RX.View style={{ flex: 1, marginTop: 40, flexDirection: 'column', width, height: (height - 80), alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
          <RX.View style={{ flex: 50, justifyContent: "center", alignItems: "center" }}>
            <RX.Image source={ImageSource.background} resizeMode={'cover'} resizeMethod={'auto'} style={{ width: width * 0.3, marginRight: 30, height: width * 0.3, alignSelf: 'flex-end' }} />

          </RX.View >
          <RX.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: width * 0.5, alignSelf: 'stretch' }} >


            <RX.Image source={ImageSource.front} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 390, marginLeft: 0, marginBottom: 30, height: 50, }} />
            <RX.View style={{ justifyContent: 'center', alignItems: 'center', width: 700 }}>


              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'$CIC is the next generation Hyper Deflationary token in the crypto world. The Tokenomics for this token are very simple, yet very smart. The smart contract of our $CIC (Crypto Invest Coint) will be created and checked by an external company. the contract will be deployed on the Ethereum blockchain. Some of our features will be:'}
              </RX.Text>

              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'1.000.000.000.000 Initial Token Supply.'}
              </RX.Text>
              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'50% Burn at lauch to become deflationary'}
              </RX.Text>
              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'10% Buy fee => 4$ Hyper- deflationary buyback and auto-adding liquidy, 5% in $CIC reflections to token holders, 1% in $CIC reflections to the max. 2500 NFT holders. (Crypto Invest members will "double-dip" because they receive reflections for holding their NFT, and earning reflections on the free tokens they received).'}
              </RX.Text>
              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'10% sell fee in $ETH, is deposited to the treasury for cross-chain investments => Daily profits from these invesments will be used for:'}
              </RX.Text>
              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'80% Buyback and auto-adding liquidty (Daily at random times)'}
              </RX.Text>
              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'10% Goes into our NFT project'}
              </RX.Text>
              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'10% Goes into the marketing wallet'}
              </RX.Text>

              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'75 ETH Starting Capital for initial investments + liquidity.'}
              </RX.Text>
              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'25 Eth Marketing wallet at the launch of the token.'}
              </RX.Text>
              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'Invesments will be made on multiple chain and different strategies will be used this can include:'}
              </RX.Text>
              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'Investing in aggressive yield farms.'}
              </RX.Text>
              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'Investing in launchpads/IDO.'}
              </RX.Text>
              <RX.Text style={[_styles.logoText4, { width: width * 0.25, minWidth: 300 }]}>
                {'Investing in nodes like strongblock.'}
              </RX.Text>
            </RX.View >
          </RX.View >

        </RX.View>
    }
  </RX.ScrollView >


}

