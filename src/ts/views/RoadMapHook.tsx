
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


import * as RX from 'reactxp';

import ImageSource from 'modules/images';
export const RoadMapHook = ({
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

        <RX.View style={{ flex: 1, width: width, height: (height * 1.2), borderColor: "#FFC06F", justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }} >


          <RX.Image source={ImageSource.stripe} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 390, marginLeft: 0, marginTop: 40, marginBottom: 20, height: 50, }} />
          <RX.View style={{ borderLeftWidth: 5, borderTopWidth: 0, borderBottomWidth: 0, borderRightWidth: 0, paddingLeft: 40, borderColor: '#FFC06F', justifyContent: 'center', alignItems: 'center' }}>
            <RX.View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <RX.Image source={ImageSource.check} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 50, marginTop: 30, height: 50, }} />

              <RX.Text style={[_styles.logoText6, { minWidth: 280, textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>
                {'#1 Preparation'}
              </RX.Text>
            </RX.View>

            <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
              {'At this stage we prepare the membership cards and create the collection on Opensea. Our programmer created the backend system for selecting the random winners of the amazing prizes and the jackpots. We are setting up the our website (V1), Twitter and Discord'}
            </RX.Text>
            <RX.Text style={[_styles.logoText6, { minWidth: 280, textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>
              {'#2 Token creation'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
              {'The smart contract of our $CIC (Crypto Invest Club) token will be created and checked by an external company. The contract will be deployed on the Ethereum blockchain. Some of our features will be: '}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
              {'- 1.000.000.000.000 Initial token supply.'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
              {'- 50% burn at launch to become deflationary '}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
              {'- 10% buy fee => 4% Hyper-deflationary buyback and auto-adding liquidity, 5% Reflections to token holders, 1% Reflections to the max. 2500 NFT holders.'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
              {'- 10% sell fee => This will go into the treasury for cross-chain investments => daily profits from these investments will be used for: 80% Buyback and auto-adding liquidity, 10% Goes into our NFT project, 10% goes into the marketing wallet.'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
              {'BIG advantage for our NFT holders: '}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
              {'The Double Dip - (1) Just by holding the Crypto Invest Membership card (NFT) you will receive free $CIC tokens every day. (2) By holding the free $CIC tokens you also get reflections on your free tokens! (You are of course free to sell your tokens on Uniswap, or to buy extra tokens on Uniswap).'}
            </RX.Text>

            <RX.Text style={[_styles.logoText6, { minWidth: 280, textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>

              {'#3 DAO'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
              {'The DAO will be formed and the first (free) voting will take place to decide the future of the club. For example what will the next step be? Launch of a new project? What kind of software do we want?'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
              {'We will use a service like snapshot.org for voting.'}
            </RX.Text>
            <RX.Text style={[_styles.logoText6, { minWidth: 280, textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>

              {'#4 Vault'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
              {"The vault will be set up and secured with a multi-sign wallet. 80% of the Opensea sale proceeds will be deposited into the vault  to buy blue chip nft's for fractionalizing.  The remaining 20% will be used  for the development of our software and launchpad."}
            </RX.Text>
            <RX.Text style={[_styles.logoText6, { minWidth: 280, textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>

              {'#5 Launchpad & Whitelist'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
              {'Creation of a launchpad website to be jumping-off point for the best projects launching in the NFT spaces with multi-chain and cross chain creation capabilities. We will organize partnerships with other (upcoming) projects and arrange guaranteed whitelist spots for all our NFT holders.'}
            </RX.Text>

            <RX.Text style={[_styles.logoText6, { minWidth: 280, textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>

              {'#6 Software'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
              {"Development of the nft software for all our members. Mass-bidding options and sniping option to find nft's that are X percent under floor price. Build-in rarity tool and more. Using the DAO there will be a voting if the software should be for sale to the public and generate income for the vault."}
            </RX.Text>
          </RX.View >

        </RX.View > :
        <RX.View style={{ flex: 1, width: width, height: width < 1200 ? (height * 2) : (height * 1.7), marginBottom: 100, borderColor: "#FFC06F", justifyContent: 'flex-start', paddingTop: 100, alignItems: 'center', alignSelf: 'center' }} >



          <RX.Image source={ImageSource.stripe} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 390, marginLeft: 0, marginBottom: 40, height: 50, }} />
          <RX.View style={{ borderLeftWidth: 5, borderTopWidth: 0, borderBottomWidth: 0, borderRightWidth: 0, paddingLeft: 40, borderColor: '#FFC06F', justifyContent: 'center', alignItems: 'center' }}>
            <RX.View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <RX.Image source={ImageSource.check} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 80, height: 80, marginTop: 20, }} />

              <RX.Text style={[_styles.logoText6, { textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>
                {'#1 Preparation'}
              </RX.Text>
            </RX.View>

            <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
              {'At this stage we prepare the membership cards and create the collection on Opensea. Our programmer created the backend system for selecting the random winners of the amazing prizes and the jackpots. We are setting up the our website (V1), Twitter and Discord'}
            </RX.Text>
            <RX.Text style={[_styles.logoText6, { textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>
              {'#2 Token creation'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
              {'The smart contract of our $CIC (Crypto Invest Club) token will be created and checked by an external company. The contract will be deployed on the Ethereum blockchain. Some of our features will be: '}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
              {'- 1.000.000.000.000 Initial token supply.'}
            </RX.Text>
            <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
              {'- 50% burn at launch to become deflationary '}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
              {'- 10% buy fee => 4% Hyper-deflationary buyback and auto-adding liquidity, 5% Reflections to token holders, 1% Reflections to the max. 2500 NFT holders.'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
              {'- 10% sell fee => This will go into the treasury for cross-chain investments => daily profits from these investments will be used for: 80% Buyback and auto-adding liquidity, 10% Goes into our NFT project, 10% goes into the marketing wallet.'}
            </RX.Text>
            <RX.Text style={[_styles.logoText6, { textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>
              {'#3 DAO'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
              {'The DAO will be formed and the first (free) voting will take place to decide the future of the club. For example what will the next step be? Launch of a new project? What kind of software do we want?'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
              {'We will use a service like snapshot.org for voting.'}
            </RX.Text>
            <RX.Text style={[_styles.logoText6, { textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>

              {'#4 Vault'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
              {"The vault will be set up and secured with a multi-sign wallet. 80% of the Opensea sale proceeds will be deposited into the vault  to buy blue chip nft's for fractionalizing.  The remaining 20% will be used  for the development of our software and launchpad."}
            </RX.Text>


            <RX.Text style={[_styles.logoText6, { textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>

              {'#5 Launchpad & Whitelist'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
              {'Creation of a launchpad website to be jumping-off point for the best projects launching in the NFT spaces with multi-chain and cross chain creation capabilities. We will organize partnerships with other (upcoming) projects and arrange guaranteed whitelist spots for all our NFT holders.'}
            </RX.Text>

            <RX.Text style={[_styles.logoText6, { textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>

              {'#6 Software'}
            </RX.Text>

            <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
              {"Development of the nft software for all our members. Mass-bidding options and sniping option to find nft's that are X percent under floor price. Build-in rarity tool and more. Using the DAO there will be a voting if the software should be for sale to the public and generate income for the vault."}
            </RX.Text>
          </RX.View >

        </RX.View >
    }
    <RX.View style={{ width: width, height: height * 0.25, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
      <RX.View style={{ flex: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <RX.Image source={ImageSource.eth} style={{ width: 100, marginTop: 5, height: 70 }} />

        <RX.Text style={[_styles.logoText44, { width: 600, minWidth: 300 }]}>
          {'CryptoInvest, is dedicated to providing the most value to our users and is the only 100% community- driven project!'}
        </RX.Text>
      </RX.View >
      <RX.View style={{ flex: 40, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>

        <RX.View style={{ justifyContent: 'center', alignItems: 'center', flex: 50, }}>
          <RX.Text style={[_styles.logoText44, { width: width * 0.40, marginTop: 40, minWidth: 300 }]}>
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

        </RX.View >
      </RX.View >
    </RX.View >
  </RX.ScrollView >


}

