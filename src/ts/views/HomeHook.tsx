
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

interface Entries {
  img: string;
  imgText: string;
  title: string;
  content: string;
}

import ImageSource from 'modules/images';

const { Carousel } = require('reactxp-carousel')
import * as RX from 'reactxp';
import TodoListPanel2 from './TodoListPanel2';

export const HomeHook = ({
  width,
  isTiny,
  height,
  navContext,
  entries,
}: {
  isTiny: boolean,
  entries: Entries[];
  width: number;
  navContext: any;
  height: number;
}) => {
  console.log(width)
  return <RX.ScrollView style={{ flex: 1, backgroundColor: 'black', alignSelf: 'stretch' }} >
    <RX.View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
      {isTiny ? <RX.View style={{ width: width, height: 50, marginTop: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
        <RX.Image source={ImageSource.screen} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: width < 1300 ? 10 : 20, marginBottom: 0, width: 300, height: 50, }} />

      </RX.View > : <RX.View style={{ width: width, height: 100, marginTop: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
        <RX.Image source={ImageSource.screen} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: width < 1300 ? 10 : 20, marginBottom: 0, width: 360, height: 100, }} />

      </RX.View >}
      <RX.View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center", alignSelf: 'stretch' }}>
        {isTiny ?
          <Carousel
            autoplay={true}
            lockScrollWhileSnapping={true}
            data={[
              {
                img: ImageSource.tier1,
                imgText: 'Jackpot: After all sold 10x 1eth',
                title: "Bronze",
                content: 'Winner: Every 10 sales 0.05eth'
              },
              {
                img: ImageSource.tier3,
                imgText: 'Jackpot: after all sold 5x5 eth',
                title: "Gold",
                content: 'Winner: every 10 sales 0.25eth'
              },
              {
                img: ImageSource.tier2,
                imgText: 'Jackpot: After all sold 10x 2eth',
                title: "Silver",
                content: 'Winner: Every 10 sales 0.10eth'
              },
            ]}
            enableMomentum={false}
            renderItem={({ item, index }: { item: Entries, index: number }) => {
              return (
                <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ marginLeft: 20, marginRight: 20, flexDirection: 'column', justifyContent: 'center', marginHorizontal: 10, alignItems: 'center', minWidth: 340, width: width * 0.8, borderRadius: 24, marginTop: 40, height: height * 0.75, alignSelf: isTiny ? 'center' : 'stretch' }} >
                  <RX.Image source={item.img} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 150, height: 150, }} />
                  <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 180, marginTop: 20, marginBottom: 10, }]}>
                    {item.title}
                  </RX.Text>
                  <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: width * 0.7 }]}>
                    {item.content}
                  </RX.Text>
                  <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: width * 0.7 }]}>
                    {item.imgText}
                  </RX.Text>
                  <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 10, marginBottom: 20, width: 200, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 24, marginTop: 20, height: 57, }} >
                    <RX.Text style={[_styles.logoText3, { width: 200, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }]}>
                      {'Buy in Opensea'}
                    </RX.Text>

                  </RX.Image >
                </RX.Image >);
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
          /> :
          <RX.View style={{ marginTop: 0, flexDirection: 'column', width: isTiny ? width * 0.5 : width * 0.8, height: isTiny ? height * 2.3 : height * 0.7, flex: 1, justifyContent: "center", alignItems: "center", alignSelf: 'stretch' }} >

            <RX.View style={{ flex: 1, paddingBottom: 20, width: width, height: isTiny ? height * 1.2 : height * 0.8, justifyContent: 'center', alignItems: 'center', flexDirection: isTiny ? "column" : 'row', alignSelf: 'stretch' }} >

              <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', justifyContent: 'center', marginHorizontal: 10, alignItems: 'center', width: width * 0.2, minWidth: 300, borderRadius: 24, marginTop: 40, height: height * 0.6, alignSelf: isTiny ? 'center' : 'stretch' }} >
                <RX.Image source={ImageSource.tier1} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 150, height: 150, }} />
                <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 150, marginTop: 20, marginBottom: 10, }]}>
                  {'Bronze'}
                </RX.Text>
                <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: 250 }]}>
                  {'Winner: Every 10 sales 0.05eth'}
                </RX.Text>
                <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: 250 }]}>
                  {'Jackpot: After all sold 10x 1eth'}
                </RX.Text>
                <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', width: 200, marginRight: 10, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 24, marginTop: 20, height: 57, }} >
                  <RX.Text style={[_styles.logoText3, { width: 200, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }]}>
                    {'Buy in Opensea'}
                  </RX.Text>

                </RX.Image >
              </RX.Image >
              <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ marginLeft: 20, marginRight: 20, flexDirection: 'column', justifyContent: 'center', marginHorizontal: 10, alignItems: 'center', minWidth: 300, width: width * 0.2, borderRadius: 24, marginTop: 40, height: height * 0.6, alignSelf: isTiny ? 'center' : 'stretch' }} >
                <RX.Image source={ImageSource.tier3} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 150, height: 150, }} />
                <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 150, marginTop: 20, marginBottom: 10, }]}>
                  {'Gold'}
                </RX.Text>
                <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: 250 }]}>
                  {'Winner: every 10 sales 0.25eth'}
                </RX.Text>
                <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: 250 }]}>
                  {'Jackpot: after all sold 5x5 eth'}
                </RX.Text>
                <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 10, width: 200, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 24, marginTop: 20, height: 57, }} >
                  <RX.Text style={[_styles.logoText3, { width: 200, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }]}>
                    {'Buy in Opensea'}
                  </RX.Text>

                </RX.Image >
              </RX.Image >
              <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', justifyContent: 'center', marginHorizontal: 10, alignItems: 'center', width: width * 0.2, borderRadius: 24, minWidth: 300, marginTop: 40, height: height * 0.6, alignSelf: isTiny ? 'center' : 'stretch' }} >
                <RX.Image source={ImageSource.tier2} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 150, height: 150, }} />
                <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 150, marginTop: 20, marginBottom: 10, }]}>
                  {'Silver'}
                </RX.Text>
                <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: 250 }]}>
                  {'Winner: Every 10 sales 0.10eth'}
                </RX.Text>
                <RX.Text style={[_styles.logoText3, { textAlign: 'center', marginBottom: 10, width: 250 }]}>
                  {'Jackpot: After all sold 10x 2eth'}
                </RX.Text>
                <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ width: 200, flexDirection: 'column', marginRight: 10, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 24, marginTop: 20, height: 57, }} >
                  <RX.Text style={[_styles.logoText3, { width: 200, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }]}>
                    {'Buy in Opensea'}
                  </RX.Text>

                </RX.Image >
              </RX.Image >
            </RX.View >
          </RX.View>}
      </RX.View>
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
                {' -The future of this Project '}
              </RX.Text>

              <RX.Text style={[_styles.logoText3Tiny, { width: 170, textAlign: "center" }]}>
                {' -Artis of next lauch(es) '}
              </RX.Text>
              <RX.Text style={[_styles.logoText3Tiny, { width: 170, textAlign: "center" }]}>
                {' -Utilities on next projects'}
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
                {'We will orgnize partnershipts with other (upcoming) projects and arrange guaranteeed whitelist sport for our holders'}
              </RX.Text>

            </RX.Image >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ justifyContent: "center", alignItems: "center", flexDirection: 'column', marginRight: 5, marginLeft: 5, minWidth: 180, width: width * 0.4, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
              <RX.Image source={ImageSource.item4} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 20, marginBottom: 10, width: 100, height: 107, }} />
              <RX.Text style={[_styles.logoText8, { textAlign: 'center', width: 170, marginBottom: 10, }]}>
                {'Airdrops'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3Tiny, { width: 160, textAlign: "center" }]}>
                {'-Free 1 nft airdrop on all our projects '}
              </RX.Text>
              <RX.Text style={[_styles.logoText3Tiny, { width: 160, textAlign: "center" }]}>
                {'-Free random valuable airdrops from vault 2 '}
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
                {'VIP membership in our discord server. Vip giveaways VIP contest'}
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
                {'Vault1'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3Tiny, { width: 160, textAlign: "center" }]}>
                {'Vault 1 with blu-chip nft’s for future ideas(fractionalizing)'}
              </RX.Text>

            </RX.Image >
            <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ justifyContent: "center", alignItems: "center", flexDirection: 'column', marginRight: 2, marginLeft: 2, minWidth: 180, width: width * 0.4, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
              <RX.Image source={ImageSource.item8} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 20, marginBottom: 10, width: 100, height: 100, }} />
              <RX.Text style={[_styles.logoText8, { textAlign: 'center', width: 170, marginBottom: 10, }]}>
                {'Vault2'}
              </RX.Text>
              <RX.Text style={[_styles.logoText3Tiny, { width: 160, textAlign: "center" }]}>
                {'Vault 2 with nft’s from good projects for airdropping to holders'}
              </RX.Text>

            </RX.Image >
          </RX.View >
        </RX.View>
      </RX.View > :

        <RX.View style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch' }}>
          <RX.View style={{ marginTop: 0, paddingTop: 30, minWidth: 1340, flexDirection: 'column', width: width * 0.7, height: height * 1.4, flex: 1, alignSelf: 'stretch' }} >
            <RX.View style={{ width: width, height: 100, marginTop: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
              <RX.Image source={ImageSource.road} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginBottom: 10, width: 600, height: 100, }} />

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
                  {' -Artis of next lauch(es) '}
                </RX.Text>
                <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                  {' -Utilities on next projects'}
                </RX.Text>


              </RX.Image >
              <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >

                <RX.Image source={ImageSource.item2} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
                <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 5, }]}>
                  {'LaunchPad'}
                </RX.Text>
                <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                  {'Creation of a lauchpad website to be the jumping-off point for the best projects launching in the NFT space.'}
                </RX.Text>

              </RX.Image >
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
                <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 5, }]}>
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
                <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 5, }]}>
                  {'Community'}
                </RX.Text>
                <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                  {'VIP membership in our discord server. Vip giveaways VIP contest'}
                </RX.Text>

              </RX.Image >
              <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
                <RX.Image source={ImageSource.item6} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
                <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 5, }]}>
                  {'Software'}
                </RX.Text>
                <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                  {'Development of nft software for our holders. Mass bindding sniping, build-in-rarity.'}
                </RX.Text>

              </RX.Image >
              <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
                <RX.Image source={ImageSource.item7} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
                <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 5, }]}>
                  {'Vault1'}
                </RX.Text>
                <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                  {'Vault 1 with blu-chip nft’s for future ideas(fractionalizing)'}
                </RX.Text>

              </RX.Image >
              <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', minWidth: 240, width: width * 0.2, borderRadius: 24, marginTop: 10, height: height * 0.5, }} >
                <RX.Image source={ImageSource.item8} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 40, marginBottom: 10, width: 100, height: 100, }} />
                <RX.Text style={[_styles.logoText6, { textAlign: 'center', width: 220, marginBottom: 5, }]}>
                  {'Vault2'}
                </RX.Text>
                <RX.Text style={[_styles.logoText3, { width: 220 }]}>
                  {'Vault 2 with nft’s from good projects for airdropping to holders'}
                </RX.Text>

              </RX.Image >
            </RX.View >
          </RX.View>
        </RX.View >
      }

      {
        isTiny ?

          <RX.View style={{ flex: 1, width: width, height: (height * 1.2), paddingTop: 50, borderColor: "#FFC06F", justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }} >


            <RX.Image source={ImageSource.stripe} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 390, marginLeft: 0, marginTop: 40, marginBottom: 20, height: 50, }} />
            <RX.View style={{ borderLeftWidth: 5, borderTopWidth: 0, borderBottomWidth: 0, borderRightWidth: 0, paddingLeft: 40, borderColor: '#FFC06F', justifyContent: 'center', alignItems: 'center' }}>
              <RX.Text style={[_styles.logoText6, { minWidth: 280, textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>
                {'#1 Preparation'}
              </RX.Text>

              <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
                {'At this stage we preapare the membership cards ad create the collection on Opensea. Our programmer created the backend for the random winner of the ETH winners and jackpot.'}
              </RX.Text>
              <RX.Text style={[_styles.logoText6, { minWidth: 280, textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>
                {'#2  Vault 1 & Vault 2'}
              </RX.Text>

              <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
                {'Vaults will be set up secured with a multi sign wallets 50% of the sale proceeds will be deposited into a vault 1 to buy blue ship nfts for the future fractionalizing 30% of the sale proceeds go into vault 2 to buy nfts for airdrops to our club members (The remaining 20% will be used as followed 10% for the deveopment team and 10% for the development of our sofware and launchpad).'}
              </RX.Text>
              <RX.Text style={[_styles.logoText6, { minWidth: 280, textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>

                {'#3 Dao'}
              </RX.Text>

              <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
                {'The DAO will be formed and first(free) votings will take place to decide the future of the club. For example what will the next step be? Launch of a new project? What kind of sofware do we want?.'}
              </RX.Text>
              <RX.Text style={[_styles.logoText6, { minWidth: 280, textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>

                {'#4 Launchpad & Whitelist'}
              </RX.Text>

              <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
                {'Creation of a launchpad website to be jumping-off point for the bst projects lauching in the NFT spaces with multi-chain and cross chain creation capabilities. We will organize partnerships with other (upcoming) projects and arrange guaranteed whitelist spots for all our holders.'}
              </RX.Text>
              <RX.Text style={[_styles.logoText6, { minWidth: 280, textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>

                {'#5 Software'}
              </RX.Text>

              <RX.Text style={[_styles.logoText4, { minWidth: 280, width: width * 0.5 }]}>
                {'Development of nft sofware for all our members. Mass-bidding option, Sniping option to find nfts that are X perfecnt under floor price. Build-in rarity tool'}
              </RX.Text>
            </RX.View >

          </RX.View > :
          <RX.View style={{ flex: 1, width: width, height: (height * 1.8), marginBottom: 100, marginTop: 40, paddingTop: 60, borderColor: "#FFC06F", justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >



            <RX.Image source={ImageSource.stripe} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 390, marginLeft: 0, marginBottom: 40, height: 50, }} />
            <RX.View style={{ borderLeftWidth: 5, borderTopWidth: 0, borderBottomWidth: 0, borderRightWidth: 0, paddingLeft: 40, borderColor: '#FFC06F', justifyContent: 'center', alignItems: 'center' }}>
              <RX.Text style={[_styles.logoText6, { textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>
                {'#1 Preparation'}
              </RX.Text>

              <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
                {'At this stage we preapare the membership cards ad create the collection on Opensea. Our programmer created the backend for the random winner of the ETH winners and jackpot.'}
              </RX.Text>
              <RX.Text style={[_styles.logoText6, { textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>
                {'#2  Vault 1 & Vault 2'}
              </RX.Text>

              <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
                {'Vaults will be set up secured with a multi sign wallets 50% of the sale proceeds will be deposited into a vault 1 to buy blue ship nfts for the future fractionalizing 30% of the sale proceeds go into vault 2 to buy nfts for airdrops to our club members (The remaining 20% will be used as followed 10% for the deveopment team and 10% for the development of our sofware and launchpad).'}
              </RX.Text>
              <RX.Text style={[_styles.logoText6, { textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>

                {'#3 Dao'}
              </RX.Text>

              <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
                {'The DAO will be formed and first(free) votings will take place to decide the future of the club. For example what will the next step be? Launch of a new project? What kind of sofware do we want?.'}
              </RX.Text>
              <RX.Text style={[_styles.logoText6, { textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>

                {'#4 Launchpad & Whitelist'}
              </RX.Text>

              <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
                {'Creation of a launchpad website to be jumping-off point for the bst projects lauching in the NFT spaces with multi-chain and cross chain creation capabilities. We will organize partnerships with other (upcoming) projects and arrange guaranteed whitelist spots for all our holders.'}
              </RX.Text>
              <RX.Text style={[_styles.logoText6, { textAlign: 'left', marginTop: 40, width: width * 0.5, marginBottom: 5, }]}>

                {'#5 Software'}
              </RX.Text>

              <RX.Text style={[_styles.logoText4, { minWidth: 350, width: width * 0.5 }]}>
                {'Development of nft sofware for all our members. Mass-bidding option, Sniping option to find nfts that are X percent under floor price. Build-in rarity tool.'}
              </RX.Text>
            </RX.View >

          </RX.View >
      }
      {
        isTiny ?
          <RX.View style={{ flex: 1, marginTop: 60, flexDirection: 'column', width, height: height * 1.4, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
            <RX.View style={{ paddingBottom: 40, width: width, height: (height * 1.4), flex: 1, flexDirection: isTiny ? 'column' : 'row', alignSelf: 'stretch' }} >

              <RX.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }} >
                <RX.Image source={ImageSource.background} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: width * 0.7, height: 320, alignSelf: 'center' }} />


                <RX.Image source={ImageSource.front} resizeMode={'contain'} resizeMethod={'auto'} style={{ width: 300, marginLeft: 0, marginBottom: 0, height: 90, }} />



                <RX.Text style={[_styles.logoText4, { width: width * 0.7, marginTop: 15, marginBottom: 40 }]}>
                  {'Out team consist of highly motivated and skilled specialists who know how to deal with any issue that might come across. This creates a basis for lasting relationships with our members built on trust and mutual understanding. We are devoted to creating unique and innnovative projects alogin with hight quality supporting services. Our team consist of 2 guys right now Patrick from Netherlands and Golfredo from Colombia .but will be expand our team as soon as possible with club members that can bring the needed expertise.'}
                </RX.Text>

                <RX.Text style={[_styles.logoText6, { textAlign: 'center', marginTop: 10, width: 200, marginBottom: 5, }]}>
                  {'Follow Us'}
                </RX.Text>
                <RX.Button onPress={() => RX.Linking.openUrl("https://discord.gg/zg6fhZH8tw")}>

                  <RX.Image source={ImageSource.todoLogo} resizeMode={'contain'} resizeMethod={'auto'} style={{ marginTop: 10, marginBottom: 10, width: 70, height: 70, }} />

                </RX.Button>
                <RX.Button onPress={() => RX.Linking.openUrl("https://twitter.com/CryptoReviewEth")}>
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

      <RX.View style={{ marginTop: isTiny ? 0 : 70, backgroundColor: 'black', flexDirection: 'row', height: 500, width: isTiny ? width * 0.9 : 600, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>

        <TodoListPanel2
          onSelect={() => null}
          onCreateNew={() => null}
        />

      </RX.View>

      <RX.View style={{ width: width, height: height * 0.25, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} >
        <RX.Image source={ImageSource.logo} style={{ width: 250, marginTop: 5, height: 70 }} />

      </RX.View >
    </RX.View >

  </RX.ScrollView >


}

