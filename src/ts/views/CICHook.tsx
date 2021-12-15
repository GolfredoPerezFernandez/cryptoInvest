
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
  logoText44: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 16,
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
  return <RX.ScrollView style={{ flex: 1, width, backgroundColor: 'black', alignSelf: 'stretch' }} >
    {isTiny ? <RX.View style={{ flex: 1, marginTop: 40, marginBottom: 100, flexDirection: 'column', width, height: (width < 330 ? height * 1.5 : width < 600 ? width < 420 ? height * 1.4 : height * 1.2 : height * 0.9), alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>

      <RX.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width, alignSelf: 'stretch' }} >


        <RX.Image source={ImageSource.cic} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: width, minWidth: 240, marginLeft: 0, marginBottom: 30, height: 50, }} />
        <RX.View style={{ justifyContent: 'center', alignItems: 'center', width: width }}>


          <RX.Text style={[_styles.logoText4, { width: width * 0.8, minWidth: 240 }]}>
            {'$CIC is the next generation Hyper Deflationary token in the crypto world. The Tokenomics for this token are very simple, yet very smart. The smart contract of our $CIC (Crypto Invest Coint) will be created and checked by an external company. the contract will be deployed on the Ethereum blockchain. Some of our features will be:'}
          </RX.Text>

          <RX.Text style={[_styles.logoText4, { marginTop: 10, width: width * 0.8, minWidth: 240 }]}>
            {'1.000.000.000.000 Initial Token Supply.'}
          </RX.Text>
          <RX.Text style={[_styles.logoText4, { marginTop: 10, width: width * 0.8, minWidth: 240 }]}>
            {'50% Burn at lauch to become deflationary'}
          </RX.Text>
          <RX.Text style={[_styles.logoText4, { marginTop: 10, width: width * 0.8, minWidth: 240 }]}>
            {'10% Buy fee => 4$ Hyper- deflationary buyback and auto-adding liquidy, 5% in $CIC reflections to token holders, 1% in $CIC reflections to the max. 2500 NFT holders. (Crypto Invest members will "double-dip" because they receive reflections for holding their NFT, and earning reflections on the free tokens they received).'}
          </RX.Text>
          <RX.Text style={[_styles.logoText4, { marginTop: 10, width: width * 0.8, minWidth: 240 }]}>
            {'10% sell fee in $ETH, is deposited to the treasury for cross-chain investments => Daily profits from these invesments will be used for:'}
          </RX.Text>
          <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'left', width: width * 0.8, minWidth: 240 }]}>
            {'80% Buyback and auto-adding liquidty (Daily at random times)'}
          </RX.Text>
          <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'left', width: width * 0.8, minWidth: 240 }]}>
            {'10% Goes into our NFT project'}
          </RX.Text>
          <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'left', width: width * 0.8, minWidth: 240 }]}>
            {'10% Goes into the marketing wallet'}
          </RX.Text>

          <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'left', width: width * 0.8, minWidth: 240 }]}>
            {'75 ETH Starting Capital for initial investments + liquidity.'}
          </RX.Text>
          <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'left', width: width * 0.8, minWidth: 240 }]}>
            {'25 Eth Marketing wallet at the launch of the token.'}
          </RX.Text>
          <RX.Text style={[_styles.logoText4, { marginTop: 10, width: width * 0.8, minWidth: 240 }]}>
            {'Invesments will be made on multiple chain and different strategies will be used this can include:'}
          </RX.Text>
          <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'left', width: width * 0.8, minWidth: 240 }]}>
            {'Investing in aggressive yield farms.'}
          </RX.Text>
          <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'left', width: width * 0.8, minWidth: 240 }]}>
            {'Investing in launchpads/IDO.'}
          </RX.Text>
          <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'left', width: width * 0.8, minWidth: 240 }]}>
            {'Investing in nodes like strongblock.'}
          </RX.Text>
        </RX.View >
      </RX.View >

    </RX.View> :
      <RX.View style={{ flex: 1, marginTop: 40, marginBottom: 100, flexDirection: 'column', width, height: (height * 0.8), alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>

        <RX.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: width, alignSelf: 'stretch' }} >


          <RX.Image source={ImageSource.cic} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 390, marginLeft: 0, marginBottom: 30, height: 50, }} />
          <RX.View style={{ justifyContent: 'center', alignItems: 'center', width: width }}>


            <RX.Text style={[_styles.logoText4, { width: width * 0.8, minWidth: 300 }]}>
              {'$CIC is the next generation Hyper Deflationary token in the crypto world. The Tokenomics for this token are very simple, yet very smart. The smart contract of our $CIC (Crypto Invest Coint) will be created and checked by an external company. the contract will be deployed on the Ethereum blockchain. Some of our features will be:'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'center', width: width * 0.8, minWidth: 300 }]}>
              {'1.000.000.000.000 Initial Token Supply.'}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'center', width: width * 0.8, minWidth: 300 }]}>
              {'50% Burn at lauch to become deflationary'}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'center', width: width * 0.8, minWidth: 300 }]}>
              {'10% Buy fee => 4$ Hyper- deflationary buyback and auto-adding liquidy, 5% in $CIC reflections to token holders, 1% in $CIC reflections to the max. 2500 NFT holders. (Crypto Invest members will "double-dip" because they receive reflections for holding their NFT, and earning reflections on the free tokens they received).'}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'center', width: width * 0.8, minWidth: 300 }]}>
              {'10% sell fee in $ETH, is deposited to the treasury for cross-chain investments => Daily profits from these invesments will be used for:'}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'center', width: width * 0.8, minWidth: 300 }]}>
              {'80% Buyback and auto-adding liquidty (Daily at random times)'}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'center', width: width * 0.8, minWidth: 300 }]}>
              {'10% Goes into our NFT project'}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'center', width: width * 0.8, minWidth: 300 }]}>
              {'10% Goes into the marketing wallet'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'center', width: width * 0.8, minWidth: 300 }]}>
              {'75 ETH Starting Capital for initial investments + liquidity.'}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'center', width: width * 0.8, minWidth: 300 }]}>
              {'25 Eth Marketing wallet at the launch of the token.'}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { marginTop: 10, width: width * 0.8, minWidth: 300 }]}>
              {'Invesments will be made on multiple chain and different strategies will be used this can include:'}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'center', width: width * 0.8, minWidth: 300 }]}>
              {'Investing in aggressive yield farms.'}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'center', width: width * 0.8, minWidth: 300 }]}>
              {'Investing in launchpads/IDO.'}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { marginTop: 10, textAlign: 'center', width: width * 0.8, minWidth: 300 }]}>
              {'Investing in nodes like strongblock.'}
            </RX.Text>
          </RX.View >
        </RX.View >

      </RX.View>
    }
    {isTiny ? <RX.View style={{ width: width, height: height * 0.6, justifyContent: 'center', alignItems: 'center' }} >
      <RX.View style={{ width: width, height: 200, justifyContent: 'center', alignItems: 'center' }}>
        <RX.Image source={ImageSource.eth} style={{ width: 100, marginTop: 5, height: 70 }} />

        <RX.Text style={[_styles.logoText4, { marginTop: 20, width: width * 0.7, minWidth: 200, textAlign: 'center' }]}>
          {'CryptoInvest, is dedicated to providing the most value to our users and is the only 100% community- driven project!'}
        </RX.Text>
      </RX.View >
      <RX.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

        <RX.View style={{ justifyContent: 'center', alignItems: 'center', flex: 50, }}>
          <RX.Text style={[_styles.logoText4, { width, marginBottom: 20, marginTop: 40, textAlign: 'center', minWidth: 300 }]}>
            {'Follow Us'}
          </RX.Text>

        </RX.View >
        <RX.View style={{ flex: 50, marginBottom: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <RX.Button onPress={() => RX.Linking.openUrl("https://discord.gg/zg6fhZH8tw")}>
            <RX.Image source={ImageSource.todoLogo} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 10, width: 50, height: 50, }} />
          </RX.Button>
          <RX.Button onPress={() => RX.Linking.openUrl("https://twitter.com/CryptoReviewEth")}>
            <RX.Image source={ImageSource.twitter} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 10, marginLeft: 30, width: 50, height: 50, }} />
          </RX.Button>

        </RX.View>
      </RX.View >
    </RX.View > : <RX.View style={{ width: width, height: height * 0.4, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
      <RX.View style={{ flex: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <RX.Image source={ImageSource.eth} style={{ width: 100, marginTop: 5, height: 70 }} />

        <RX.Text style={[_styles.logoText4, { width: 400, minWidth: 300 }]}>
          {'CryptoInvest, is dedicated to providing the most value to our users and is the only 100% community- driven project!'}
        </RX.Text>
      </RX.View >
      <RX.View style={{ flex: 40, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>

        <RX.View style={{ justifyContent: 'center', alignItems: 'center', flex: 50, }}>
          <RX.Text style={[_styles.logoText4, { width: width, marginTop: 40, minWidth: 300 }]}>
            {'Follow Us'}
          </RX.Text>

        </RX.View >
        <RX.View style={{ flex: 50, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
          <RX.Button onPress={() => RX.Linking.openUrl("https://discord.gg/zg6fhZH8tw")}>

            <RX.Image source={ImageSource.todoLogo} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 10, width: 50, height: 50, }} />

          </RX.Button>
          <RX.Button onPress={() => RX.Linking.openUrl("https://twitter.com/CryptoReviewEth")}>
            <RX.Image source={ImageSource.twitter} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 10, marginLeft: 30, width: 50, height: 50, }} />

          </RX.Button>

        </RX.View>
      </RX.View >
    </RX.View >}
  </RX.ScrollView >


}

