
import { Colors, Fonts, FontSizes } from '../app/Styles';


const Moralis = require('moralis');
const serverUrl = "https://kyyslozorkna.usemoralis.com:2053/server";
const appId = "eKUfnm9MJRGaWSNh8mjnFpFz5FrPYYGB7xS4J7nC";
Moralis.start({ serverUrl, appId });

import RXVideo from 'reactxp-video';

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
    fontSize: 14,
    color: Colors.white,
  }),
  logoText6: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 24,
    color: Colors.white,
  }),
};
import * as UI from '@sproutch/ui';

import ImageSource from 'modules/images';

import * as RX from 'reactxp';
import { useState } from 'react';

export const HomeHook = ({
  width,
  isTiny,
  height,
}: {
  isTiny: boolean,
  width: number;
  height: number;
}) => {
  const [nftTokenAddress, setNftTokenAddress] = useState("0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656")
  const [nftTokenId, setNftTokenId] = useState("16923634234309235305936278977612378847065311654836719990863808853227023106548")
  const [contractType, setContractType] = useState("ERC1155")
  const [amount, setAmount] = useState<any>(0.5)

  var _mountedVideo: RXVideo | undefined;
  const [startAmount, setStartAmount] = useState<any>(1)
  const [endAmount, setEndAmount] = useState<any>(0.0001)
  const [currentNav, setNav] = useState('toAsset')

  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState('')

  const _playVideo = () => {
    if (_mountedVideo) {
      _mountedVideo.mute(true);
      _mountedVideo.play();
    }
  }
  const _onMountVideo = (component: RXVideo) => {
    _mountedVideo = component;
  }
  console.log(width)
  return <RX.ScrollView style={{ flex: 1, backgroundColor: '#353A40', alignSelf: 'stretch' }} >

    <RX.View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center", alignSelf: 'stretch' }}>

      <RX.Image source={ImageSource.caru2} resizeMode={width < 1280 ? 'cover' : 'contain'} resizeMethod={'auto'} style={{ marginTop: 20, flexDirection: 'column', width: isTiny ? width * 0.5 : width * 0.8, height: isTiny ? height * 2.3 : height * 0.9, flex: 1, justifyContent: "center", alignItems: "center", alignSelf: 'stretch' }} >
        <RX.View style={{ width: width, height: 50, marginTop: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
          <RX.Image source={ImageSource.screen} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: width < 1300 ? 10 : 20, marginBottom: 0, width: 250, height: 50, }} />

        </RX.View >
        <RX.View style={{ flex: 1, paddingBottom: 20, width: width, height: isTiny ? height * 1.2 : height * 0.8, justifyContent: 'center', alignItems: 'center', flexDirection: isTiny ? "column" : 'row', alignSelf: 'stretch' }} >

          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', justifyContent: 'center', marginHorizontal: 10, alignItems: 'center', width: width * 0.2, minWidth: 300, borderRadius: 24, marginTop: 40, height: height * 0.65, alignSelf: isTiny ? 'center' : 'stretch' }} >
            <RX.Image source={ImageSource.tier1} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 150, height: 150, }} />
            <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 100, marginTop: 20, marginBottom: 10, }]}>
              {'Bronze'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: 200 }]}>
              {'Winner: Every 10 sales 0.05eth'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: 200 }]}>
              {'Jackpot: After all sold 10x 1eth'}
            </RX.Text>
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', width: 200, marginRight: 10, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 24, marginTop: 20, height: 57, }} >
              <RX.Text style={[_styles.logoText3, { width: 200, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }]}>
                {'Buy in Opensea'}
              </RX.Text>

            </RX.Image >
          </RX.Image >
          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ marginLeft: 20, marginRight: 20, flexDirection: 'column', justifyContent: 'center', marginHorizontal: 10, alignItems: 'center', minWidth: 300, width: width * 0.2, borderRadius: 24, marginTop: 40, height: height * 0.65, alignSelf: isTiny ? 'center' : 'stretch' }} >
            <RX.Image source={ImageSource.tier3} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 150, height: 150, }} />
            <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 100, marginTop: 20, marginBottom: 10, }]}>
              {'Gold'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: 200 }]}>
              {'Winner: every 10 sales 0.25eth'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: 200 }]}>
              {'Jackpot: after all sold 5x5 eth'}
            </RX.Text>
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 10, width: 200, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 24, marginTop: 20, height: 57, }} >
              <RX.Text style={[_styles.logoText3, { width: 200, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }]}>
                {'Buy in Opensea'}
              </RX.Text>

            </RX.Image >
          </RX.Image >
          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', justifyContent: 'center', marginHorizontal: 10, alignItems: 'center', width: width * 0.2, borderRadius: 24, minWidth: 300, marginTop: 40, height: height * 0.65, alignSelf: isTiny ? 'center' : 'stretch' }} >
            <RX.Image source={ImageSource.tier2} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 150, height: 150, }} />
            <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 100, marginTop: 20, marginBottom: 10, }]}>
              {'Silver'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: 200 }]}>
              {'Winner: Every 10 sales 0.10eth'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: 200 }]}>
              {'Jackpot: After all sold 10x 2eth'}
            </RX.Text>
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ width: 200, flexDirection: 'column', marginRight: 10, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 24, marginTop: 20, height: 57, }} >
              <RX.Text style={[_styles.logoText3, { width: 200, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }]}>
                {'Buy in Opensea'}
              </RX.Text>

            </RX.Image >
          </RX.Image >
        </RX.View >
      </RX.Image>
    </RX.View>
    {isTiny ? <RX.View style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch' }}>
      <RX.Image source={ImageSource.caru2} resizeMode={width < 1100 ? 'cover' : 'contain'} resizeMethod={'auto'} style={{ marginTop: 20, minWidth: 1340, flexDirection: 'column', width: width * 0.7, height: height * 2.3, flex: 1, alignSelf: 'stretch' }} >
        <RX.View style={{ width: width, height: 50, marginTop: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
          <RX.Image source={ImageSource.road} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginBottom: 10, width: 350, height: 50, }} />

        </RX.View >
        <RX.View style={{ flex: 1, width: width, height: height, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'stretch' }} >

          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >

            <RX.Image source={ImageSource.item1} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
            <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
              {'Dao'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { width: 220 }]}>
              {'Vote on:'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { width: 220 }]}>
              {' -The future of this Project '}
            </RX.Text>

            <RX.Text style={[_styles.logoText3, { width: 220 }]}>
              {' -Artis of next lauch(es) '}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { width: 220 }]}>
              {' -Utilities on next projects'}
            </RX.Text>


          </RX.Image >
          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >

            <RX.Image source={ImageSource.item2} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
            <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
              {'LaunchPad'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { width: 220 }]}>
              {'Creation of a lauchpad website to be the jumping-off point for the best projects launching in the NFT space.'}
            </RX.Text>

          </RX.Image >
        </RX.View >
        <RX.View style={{ flex: 1, width: width, height: height * 0.15, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'stretch' }} >


          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >

            <RX.Image source={ImageSource.item3} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
            <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
              {'Whitelists'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { width: 220 }]}>
              {'We will orgnize partnershipts with other (upcoming) projects and arrange guaranteeed whitelist sport for our holders'}
            </RX.Text>

          </RX.Image >
          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
            <RX.Image source={ImageSource.item4} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 107, }} />
            <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
              {'Airdrops'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { width: 220 }]}>
              {'-Free 1 nft airdrop on all our projects '}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { width: 220 }]}>
              {'-Free random valuable airdrops from vault 2 '}
            </RX.Text>

          </RX.Image >
        </RX.View >
        <RX.View style={{ flex: 1, width: width, height: height * 0.15, marginBottom: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'stretch' }} >
          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
            <RX.Image source={ImageSource.item5} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
            <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
              {'Community'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { width: 220 }]}>
              {'VIP membership in our discord server. Vip giveaways VIP contest'}
            </RX.Text>

          </RX.Image >
          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
            <RX.Image source={ImageSource.item6} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
            <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
              {'Software'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { width: 220 }]}>
              {'Development of nft software for our holders. Mass bindding sniping, build-in-rarity.'}
            </RX.Text>

          </RX.Image >

        </RX.View >

        <RX.View style={{ flex: 1, width: width, height: height * 0.15, marginBottom: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'stretch' }} >

          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
            <RX.Image source={ImageSource.item7} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
            <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
              {'Vault1'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { width: 220 }]}>
              {'Vault 1 with blu-chip nft’s for future ideas(fractionalizing)'}
            </RX.Text>

          </RX.Image >
          <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
            <RX.Image source={ImageSource.item8} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
            <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
              {'Vault2'}
            </RX.Text>
            <RX.Text style={[_styles.logoText3, { width: 220 }]}>
              {'Vault 2 with nft’s from good projects for airdropping to holders'}
            </RX.Text>

          </RX.Image >
        </RX.View >
      </RX.Image>
    </RX.View > :

      <RX.View style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch' }}>
        <RX.Image source={ImageSource.caru2} resizeMode={width < 1100 ? 'cover' : 'contain'} resizeMethod={'auto'} style={{ marginTop: 20, minWidth: 1340, flexDirection: 'column', width: width * 0.7, height: height * 1.1, flex: 1, alignSelf: 'stretch' }} >
          <RX.View style={{ width: width, height: 50, marginTop: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
            <RX.Image source={ImageSource.road} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginBottom: 10, width: 350, height: 50, }} />

          </RX.View >
          <RX.View style={{ flex: 1, width: width, height: height * 0.15, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'stretch' }} >

            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.4, }} >

              <RX.Image source={ImageSource.item1} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
                {'Dao'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'Vote on:'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {' -The future of this Project '}
              </RX.Text>

              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {' -Artis of next lauch(es) '}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {' -Utilities on next projects'}
              </RX.Text>


            </RX.Image >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.4, }} >

              <RX.Image source={ImageSource.item2} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
                {'LaunchPad'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'Creation of a lauchpad website to be the jumping-off point for the best projects launching in the NFT space.'}
              </RX.Text>

            </RX.Image >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.4, }} >

              <RX.Image source={ImageSource.item3} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
                {'Whitelists'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'We will orgnize partnershipts with other (upcoming) projects and arrange guaranteeed whitelist sport for our holders'}
              </RX.Text>

            </RX.Image >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.4, }} >
              <RX.Image source={ImageSource.item4} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 107, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
                {'Airdrops'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'-Free 1 nft airdrop on all our projects '}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'-Free random valuable airdrops from vault 2 '}
              </RX.Text>

            </RX.Image >
          </RX.View >
          <RX.View style={{ flex: 1, width: width, height: height * 0.15, marginBottom: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'stretch' }} >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.4, }} >
              <RX.Image source={ImageSource.item5} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
                {'Community'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'VIP membership in our discord server. Vip giveaways VIP contest'}
              </RX.Text>

            </RX.Image >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.4, }} >
              <RX.Image source={ImageSource.item6} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
                {'Software'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'Development of nft software for our holders. Mass bindding sniping, build-in-rarity.'}
              </RX.Text>

            </RX.Image >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.4, }} >
              <RX.Image source={ImageSource.item7} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
                {'Vault1'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'Vault 1 with blu-chip nft’s for future ideas(fractionalizing)'}
              </RX.Text>

            </RX.Image >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.4, }} >
              <RX.Image source={ImageSource.item8} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 10, }]}>
                {'Vault2'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                {'Vault 2 with nft’s from good projects for airdropping to holders'}
              </RX.Text>

            </RX.Image >
          </RX.View >
        </RX.Image>
      </RX.View >}
    {isTiny ?
      <RX.View style={{ flex: 1, marginTop: 40, flexDirection: 'column', width, height: height * 1.3, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
        <RX.Image source={ImageSource.caru2} resizeMode={width < 1100 ? 'cover' : 'contain'} resizeMethod={'auto'} style={{ width: width, height: (height), flex: 1, flexDirection: isTiny ? 'column' : 'row', alignSelf: 'stretch' }} >
          <RX.View style={{ flex: 50, justifyContent: "center", alignItems: "center" }}>
            <RX.Image source={ImageSource.background} resizeMode={'cover'} resizeMethod={'auto'} style={{ width: 350, height: 400, alignSelf: 'center' }} />

          </RX.View >
          <RX.View style={{ flex: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }} >


            <RX.Image source={ImageSource.front} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 390, marginLeft: 0, marginBottom: 20, height: 50, }} />



            <RX.Text style={[_styles.logoText4, { width: 350 }]}>
              {'Out team consist of highly motivated and skilled specialists who know how to deal with any issue that might come across. This creates a basis for lasting relationships with our members built on trust and mutual understanding. We are devoted to creating unique and innnovative projects alogin with hight quality supporting services. Our team consist of 2 guys right now Patrick from Netherlands and Golfredo from Colombia .but will be expand our team as soon as possible with club members that can bring the needed expertise.'}
            </RX.Text>

            <RX.Text style={[_styles.logoText6, { textAlign: 'center', marginTop: 20, width: 200, marginBottom: 5, }]}>
              {'Follow Us'}
            </RX.Text>
            <RX.Image source={ImageSource.todoLogo} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 10, marginBottom: 10, width: 70, height: 70, }} />

          </RX.View >

        </RX.Image>
      </RX.View> :
      <RX.View style={{ flex: 1, marginTop: 40, flexDirection: 'row', width, height: (height - 160), alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
        <RX.Image source={ImageSource.caru2} resizeMode={width < 1100 ? 'cover' : 'contain'} resizeMethod={'auto'} style={{ width: width * 0.8, height: (height - 160), flex: 1, alignSelf: 'stretch' }} >
          <RX.View style={{ flex: 50, justifyContent: "center", alignItems: "center" }}>
            <RX.Image source={ImageSource.background} resizeMode={'cover'} resizeMethod={'auto'} style={{ width: 350, marginRight: 30, height: 400, alignSelf: 'flex-end' }} />

          </RX.View >
          <RX.View style={{ flex: 50, paddingRight: 50, justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'stretch' }} >


            <RX.Image source={ImageSource.front} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 390, marginLeft: 0, marginBottom: 20, height: 50, }} />



            <RX.Text style={[_styles.logoText4, { width: 350 }]}>
              {'Out team consist of highly motivated and skilled specialists who know how to deal with any issue that might come across. This creates a basis for lasting relationships with our members built on trust and mutual understanding. We are devoted to creating unique and innnovative projects alogin with hight quality supporting services. Our team consist of 2 guys right now Patrick from Netherlands and Golfredo from Colombia .but will be expand our team as soon as possible with club members that can bring the needed expertise.'}
            </RX.Text>

            <RX.Text style={[_styles.logoText6, { textAlign: 'left', marginTop: 20, width: 200, marginBottom: 5, }]}>
              {'Follow Us'}
            </RX.Text>
            <RX.Image source={ImageSource.todoLogo} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 10, marginBottom: 10, width: 70, height: 70, }} />

          </RX.View >

        </RX.Image>
      </RX.View>}

    <RX.View style={{ width: width, height: height * 0.1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
      <RX.Text style={[_styles.logoText6, { textAlign: 'center', marginTop: 20, width: width, marginBottom: 5, }]}>
        {'CryptoInvest ©'}
      </RX.Text>
    </RX.View >
  </RX.ScrollView >


}

