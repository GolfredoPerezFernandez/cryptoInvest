
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
    font: Fonts.displayBold,
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

export const ProjectHook = ({
  width,
  height,
  isTiny,
}: {
  width: number;
  height: number;
  isTiny: boolean;
}) => {
  return <RX.ScrollView style={{ flex: 1, backgroundColor: 'black', alignSelf: 'stretch' }} >
    {isTiny ? <RX.View style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch' }}>
      <RX.View style={{ marginTop: 20, minWidth: 1340, flexDirection: 'column', width: width * 0.7, height: height * 2.3, flex: 1, alignSelf: 'stretch' }} >
        <RX.View style={{ width: width, height: 50, marginTop: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
          <RX.Image source={ImageSource.road} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginBottom: 10, width: 350, height: 50, }} />

        </RX.View >
        <RX.View style={{ flex: 1, width: width, height: height, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'stretch' }} >

          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ justifyContent: "center", alignItems: "center", flexDirection: 'column', marginRight: 5, marginLeft: 5, minWidth: 180, width: width * 0.4, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >

            <RX.Image source={ImageSource.item1} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 20, marginBottom: 10, width: 100, height: 100, }} />
            <RX.Text style={[_styles.logoText8, { textAlign: 'center', width: 150, marginBottom: 10, }]}>
              {'Dao'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { width: 170, textAlign: "center" }]}>
              {'Vote on:'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3Tiny, { width: 170, textAlign: "center" }]}>
              {'- The future of this Project '}
            </RX.Text>

            <RX.Text style={[_styles.logoText3Tiny, { width: 170, textAlign: "center" }]}>
              {'- Artists for upcoming project(s)'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3Tiny, { width: 170, textAlign: "center" }]}>
              {'- Utilities for next project(s)'}
            </RX.Text>


          </RX.Image >
          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ justifyContent: "center", alignItems: "center", flexDirection: 'column', marginRight: 5, marginLeft: 5, minWidth: 180, width: width * 0.4, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >

            <RX.Image source={ImageSource.item2} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 20, marginBottom: 10, width: 100, height: 100, }} />
            <RX.Text style={[_styles.logoText8, { textAlign: 'center', justifyContent: "center", alignItems: "center", width: 220, marginBottom: 10, }]}>
              {'LaunchPad'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3Tiny, { width: 160, textAlign: "center" }]}>
              {'Creation of a lauchpad website to be the jumping-off point for the best projects launching in the NFT space.'}
            </RX.Text>

          </RX.Image >
        </RX.View >
        <RX.View style={{ flex: 1, width: width, height: height * 0.15, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'stretch' }} >


          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ justifyContent: "center", alignItems: "center", flexDirection: 'column', marginRight: 5, marginLeft: 5, minWidth: 180, width: width * 0.4, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >

            <RX.Image source={ImageSource.item3} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 20, marginBottom: 10, width: 100, height: 100, }} />
            <RX.Text style={[_styles.logoText8, { textAlign: 'center', width: 170, marginBottom: 10, }]}>
              {'Whitelists'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3Tiny, { width: 160, textAlign: "center" }]}>
              {'We will orgnize partnerships with other (upcoming) projects and arrange guaranteed whitelist spot for our holders'}
            </RX.Text>

          </RX.Image >
          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ justifyContent: "center", alignItems: "center", flexDirection: 'column', marginRight: 5, marginLeft: 5, minWidth: 180, width: width * 0.4, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
            <RX.Image source={ImageSource.item4} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 20, marginBottom: 10, width: 100, height: 107, }} />
            <RX.Text style={[_styles.logoText8, { textAlign: 'center', width: 170, marginBottom: 10, }]}>
              {'Airdrops'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3Tiny, { width: 160, textAlign: "center" }]}>
              {'- Free airdrop of 1 NFT on all our projects '}
            </RX.Text>
            <RX.Text style={[_styles.logoText3Tiny, { width: 160, textAlign: "center" }]}>
              {'- Free reflections (airdrops) of our $CIC token'}
            </RX.Text>

          </RX.Image >
        </RX.View >
        <RX.View style={{ flex: 1, width: width, height: height * 0.15, marginBottom: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'stretch' }} >
          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ justifyContent: "center", alignItems: "center", flexDirection: 'column', marginRight: 5, marginLeft: 5, minWidth: 180, width: width * 0.4, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
            <RX.Image source={ImageSource.item5} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 20, marginBottom: 10, width: 100, height: 100, }} />
            <RX.Text style={[_styles.logoText8, { textAlign: 'center', width: 170, marginBottom: 10, }]}>
              {'Community'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3Tiny, { width: 160, textAlign: "center" }]}>
              {'- VIP membership in our Discord'}
            </RX.Text>

            <RX.Text style={[_styles.logoText3Tiny, { width: 160, textAlign: "center" }]}>
              {'- VIP giveaways'}
            </RX.Text>

            <RX.Text style={[_styles.logoText3Tiny, { width: 160, textAlign: "center" }]}>
              {'- VIP contest'}
            </RX.Text>
          </RX.Image >
          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ justifyContent: "center", alignItems: "center", flexDirection: 'column', marginRight: 2, marginLeft: 2, minWidth: 180, width: width * 0.4, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
            <RX.Image source={ImageSource.item6} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 20, marginBottom: 10, width: 100, height: 100, }} />
            <RX.Text style={[_styles.logoText8, { textAlign: 'center', width: 170, marginBottom: 10, }]}>
              {'Software'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3Tiny, { width: 160, textAlign: "center" }]}>
              {'Development of nft software for our holders. Mass bindding sniping, build-in-rarity.'}
            </RX.Text>

          </RX.Image >

        </RX.View >

        <RX.View style={{ flex: 1, width: width, height: height * 0.15, marginBottom: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'stretch' }} >

          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ justifyContent: "center", alignItems: "center", flexDirection: 'column', marginRight: 2, marginLeft: 2, minWidth: 180, width: width * 0.4, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
            <RX.Image source={ImageSource.item7} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 20, marginBottom: 10, width: 100, height: 100, }} />
            <RX.Text style={[_styles.logoText8, { textAlign: 'center', width: 170, marginBottom: 10, }]}>
              {'Vault'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3Tiny, { width: 160, textAlign: "center" }]}>
              {'Vault with blu-chip nft’s for future ideas(fractionalizing)'}
            </RX.Text>

          </RX.Image >
        </RX.View >
      </RX.View>
    </RX.View > :

      <RX.View style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch' }}>
        <RX.View style={{ marginTop: 0, paddingTop: 30, minWidth: 1340, flexDirection: 'column', width: width * 0.7, height: height * 1.4, flex: 1, alignSelf: 'stretch' }} >
          <RX.View style={{ width: width, height: 100, marginTop: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
            <RX.Image source={ImageSource.project} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 400, height: 100, }} />

          </RX.View >
          <RX.View style={{ flex: 1, width: width, height: height * 0.15, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'stretch' }} >

            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >

              <RX.Image source={ImageSource.item1} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 5, }]}>
                {'Dao'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'Vote on:'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {' -The future of this Project '}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'- Artists for upcoming project(s)'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'- Utilities for next project(s)'}
              </RX.Text>


            </RX.Image >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >

              <RX.Image source={ImageSource.item2} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 5, }]}>
                {'LaunchPad'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'Creation of a launchpad website to be the jumping-off point for the best projects launching in the NFT space.'}
              </RX.Text>

            </RX.Image >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >

              <RX.Image source={ImageSource.item3} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
                {'Whitelists'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'We will orgnize partnerships with other (upcoming) projects and arrange guaranteeed whitelist spot for our holders'}
              </RX.Text>

            </RX.Image >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
              <RX.Image source={ImageSource.item4} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 107, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 5, }]}>
                {'Airdrops'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'- Free airdrop of 1 NFT on all our projects'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'- Free reflections (airdrops) of our $CIC token'}
              </RX.Text>

            </RX.Image >
          </RX.View >
          <RX.View style={{ flex: 1, width: width, height: height * 0.15, marginBottom: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'stretch' }} >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
              <RX.Image source={ImageSource.item5} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 5, }]}>
                {'Community'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'- VIP membership in our Discord'}
              </RX.Text>

              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'- VIP giveaways'}
              </RX.Text>

              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'- VIP contests'}
              </RX.Text>

            </RX.Image >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
              <RX.Image source={ImageSource.item6} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 5, }]}>
                {'Software'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'Development of nft software for our holders. Mass bidding sniping, build-in-rarity.'}
              </RX.Text>

            </RX.Image >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
              <RX.Image source={ImageSource.item7} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 5, }]}>
                {'Vault'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'Vault with blu-chip nft’s for future ideas(fractionalizing)'}
              </RX.Text>

            </RX.Image >
          </RX.View >
        </RX.View>

      </RX.View >
    }

    <RX.View style={{ width: width, height: height * 0.25, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
      <RX.View style={{ flex: 60, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <RX.Image source={ImageSource.eth} style={{ width: 100, marginTop: 5, height: 70 }} />

        <RX.Text style={[_styles.logoText4, { width: 600, minWidth: 300 }]}>
          {'CryptoInvest, is dedicated to providing the most value to our users and is the only 100% community- driven project!'}
        </RX.Text>
      </RX.View >
      <RX.View style={{ flex: 40, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>

        <RX.View style={{ justifyContent: 'center', alignItems: 'center', flex: 50, }}>
          <RX.Text style={[_styles.logoText4, { width: width * 0.40, marginTop: 40, minWidth: 300 }]}>
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

