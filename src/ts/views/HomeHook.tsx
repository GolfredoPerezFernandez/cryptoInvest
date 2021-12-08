
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
    fontSize: 24,
    color: Colors.white,
  }),
  logoText3Tiny: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 14,
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


interface Entries {
  img: string;
  imgText: string;
  title: string;
  content: string;
  url: string;
}

const { Carousel } = require('reactxp-carousel')
export const HomeHook = ({
  width,
  isTiny,
  height,
  navContext,
}: {
  isTiny: boolean,
  width: number;
  navContext: any;
  height: number;
}) => {
  return <RX.ScrollView style={{ flex: 1, backgroundColor: '#1D1F21', alignSelf: 'stretch' }} >
    <RX.View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>


      {isTiny ?
        <RX.View style={{ flex: 1, marginTop: 60, flexDirection: 'column', width, height: height * 1.4, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
          <RX.View style={{ paddingBottom: 40, width: width, height: (height * 1.4), flex: 1, flexDirection: isTiny ? 'column' : 'row', alignSelf: 'stretch' }} >

            <RX.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }} >
              <RX.Image source={ImageSource.background} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: width * 0.7, height: 320, alignSelf: 'center' }} />


              <RX.Image source={ImageSource.front} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 300, marginLeft: 0, marginBottom: 0, height: 90, }} />



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
        <RX.Image source={ImageSource.copita} resizeMode={'contain'} style={{ flex: 1, width, height }}>
          <RX.View style={{ flex: 1, marginTop: 40, flexDirection: 'row', width, height: (height - 80), alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
            <RX.View style={{ flex: 60, justifyContent: "center", alignItems: "center" }}>
              <Carousel
                autoplay={true}
                swipeThreshold={160}
                lockScrollWhileSnapping={true}
                data={[
                  {
                    img: ImageSource.tier1,
                    imgText: 'Crypto Invest allows NFT holders to get $CIC without staking while always retaining control of their NFT',
                    title: "FREE AIDROP OF $CIC",
                    content: 'GET $CIC without staking you NFT',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/16923634234309235305936278977612378847065311654836719990863808855426046362600'
                  },
                  {
                    img: ImageSource.tier3,
                    imgText: "Every 10 NFT's sold will randomly select 1 winner from people holding the NFT to receive an ETH prize. After all NFT's are sold from a level the contract will select several JACKPOT winner to receive big ETH prizes.",
                    title: "LOTTERY",
                    content: 'Win free ETH by holding you NFT',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/16923634234309235305936278977612378847065311654836719990863808857625069617652'
                  },
                  {
                    img: ImageSource.tier2,
                    imgText: 'The DAO will be formed and the first(free) voting will take place to decide the future of the club. For example what will the next step be? Launch of new project? What kind of software do we want?',
                    title: "DAO",
                    content: 'A truly decentralized organisation',
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/16923634234309235305936278977612378847065311654836719990863808856525557990376'
                  },
                  {
                    img: ImageSource.tier2,
                    imgText: "80% of the Opensea sale proceeds will be deposited into the vault to buy blue-chip nft's for fractionalizing the remaining 20% will be used for development of our sofware and launchpad",
                    title: "VAULT",
                    content: "Become part-owner of the best blue chip NFT's",
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/16923634234309235305936278977612378847065311654836719990863808856525557990376'
                  },
                  {
                    img: ImageSource.tier2,
                    imgText: "a launchpad website to be a jumping-off point for the best projects launching in the NFT spaces with multi-chain and cross-chain creation capabilities.",
                    title: "LAUNCHPAD",
                    content: "jumping-off point for the best projects.",
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/16923634234309235305936278977612378847065311654836719990863808856525557990376'
                  },
                  {
                    img: ImageSource.tier2,
                    imgText: "Development of the nft sofware for all our members. Mass-bidding options and sniping options to find nfts's that are X percent under floor price. Build-in rarity tool and more.",
                    title: "SOFWARE",
                    content: "Unique NFT software to help you make money.",
                    url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/16923634234309235305936278977612378847065311654836719990863808856525557990376'
                  },
                ]}
                enableMomentum={false}
                renderItem={({ item, index }: { item: Entries, index: number }) => {
                  return (
                    <RX.View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'column', justifyContent: 'center', marginHorizontal: 10, alignItems: 'flex-start', minWidth: 340, width: width * 0.4, borderRadius: 24, height: height * 0.75, alignSelf: isTiny ? 'center' : 'stretch' }} >
                      <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ justifyContent: "center", alignItems: "center", flexDirection: 'column', marginRight: 2, marginLeft: 2, minWidth: 180, width: width * 0.4, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >

                        <RX.Text style={[_styles.logoText6, { textAlign: 'left', width: 400, marginBottom: 10, }]}>
                          {item.title}
                        </RX.Text>
                        <RX.Text style={[_styles.logoText3, { textAlign: 'left', marginBottom: 10, width: 400 }]}>
                          {item.content}
                        </RX.Text>
                        <RX.Text style={[_styles.logoText4, { textAlign: 'left', marginBottom: 10, width: 400 }]}>
                          {item.imgText}
                        </RX.Text>
                      </RX.Image>
                    </RX.View >);
                }}
                sliderWidth={width}
                itemWidth={width * 0.8}
                containerCustomStyle={[_styles.slider,]}
                contentContainerCustomStyle={[{
                  height: height * 0.9,
                }]}
                scrollEnabled={false}
                loop={true}
                vertical={false}
                showsHorizontalScrollIndicator={false}
              />
            </RX.View >
            <RX.View style={{ flex: 40, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch', paddingRight: 50 }} >


              <RX.Image source={ImageSource.puzzle} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 400, marginLeft: 0, height: 400, marginRight: 50, }} />

            </RX.View >

          </RX.View>
        </RX.Image>
      }

      <RX.View style={{ width: width, height: height * 0.5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
        <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ justifyContent: "center", alignItems: "center", flexDirection: 'column', marginRight: 2, marginLeft: 2, minWidth: 180, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.4, }} >
          <RX.Text style={[_styles.logoText8, { textAlign: 'center', width: 300, marginBottom: 10, }]}>
            {'Daily $CIC Airdrop'}
          </RX.Text>
          <RX.Text style={[_styles.logoText3Tiny, { width: 200, textAlign: "center" }]}>
            {'CryptInvest allost NFT holders to get $CIC without staking, while always retaining control of their NFT! 1$CIC = 1$ CIC'}
          </RX.Text>

        </RX.Image >
        <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ justifyContent: "center", alignItems: "center", flexDirection: 'column', marginRight: 20, marginLeft: 20, minWidth: 180, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.4, }} >
          <RX.Text style={[_styles.logoText8, { textAlign: 'center', width: 170, marginBottom: 10, }]}>
            {'Lottery'}
          </RX.Text>
          <RX.Text style={[_styles.logoText3Tiny, { width: 200, textAlign: "center" }]}>
            {"Every 10 NFT's sold will randomly select 1 winner from people-holding the NFT to receive an ETH prize."}
          </RX.Text>

        </RX.Image >
        <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ justifyContent: "center", alignItems: "center", flexDirection: 'column', marginRight: 2, marginLeft: 2, minWidth: 180, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.4, }} >
          <RX.Text style={[_styles.logoText8, { textAlign: 'center', width: 170, marginBottom: 10, }]}>
            {'Even More...'}
          </RX.Text>
          <RX.Text style={[_styles.logoText3Tiny, { width: 200, textAlign: "center" }]}>
            {'-DAO'}
          </RX.Text>
          <RX.Text style={[_styles.logoText3Tiny, { width: 200, marginTop: 5, textAlign: "center" }]}>
            {'-VAULT'}
          </RX.Text>
          <RX.Text style={[_styles.logoText3Tiny, { width: 200, marginTop: 5, textAlign: "center" }]}>
            {'-Launchpad'}
          </RX.Text>

          <RX.Text style={[_styles.logoText3Tiny, { width: 200, marginTop: 5, textAlign: "center" }]}>
            {'-Software'}
          </RX.Text>
        </RX.Image >
      </RX.View>
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
    </RX.View >

  </RX.ScrollView >


}

