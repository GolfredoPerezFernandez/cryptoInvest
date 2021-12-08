
import { Colors, Fonts, FontSizes } from '../app/Styles';


const Moralis = require('moralis');
const serverUrl = "https://dkmypapn65am.usemoralis.com:2053/server";
const appId = "eXd9zckjUGhiRrW5TVszfh7u5ZNfmxbXCTCMMjLc";
Moralis.start({ serverUrl, appId });


import TodoListPanel2 from './TodoListPanel2';
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
  url: string;
}

import ImageSource from 'modules/images';
import * as RX from 'reactxp';

const { Carousel } = require('reactxp-carousel')
export const LotteryHook = ({
  width,
  height,
  isTiny,
}: {
  width: number;
  height: number;
  isTiny: boolean;
}) => {
  return <RX.ScrollView style={{ flex: 1, backgroundColor: 'black', alignSelf: 'stretch' }} >
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
              content: 'Winner: Every 10 sales 0.05eth',
              url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/16923634234309235305936278977612378847065311654836719990863808855426046362600'
            },
            {
              img: ImageSource.tier3,
              imgText: 'Jackpot: after all sold 5x5 eth',
              title: "Gold",
              content: 'Winner: every 10 sales 0.25eth',
              url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/16923634234309235305936278977612378847065311654836719990863808857625069617652'
            },
            {
              img: ImageSource.tier2,
              imgText: 'Jackpot: After all sold 10x 2eth',
              title: "Silver",
              content: 'Winner: Every 10 sales 0.10eth',
              url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/16923634234309235305936278977612378847065311654836719990863808856525557990376'
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
                <RX.Button onPress={() => RX.Linking.openUrl(item.url)} >

                  <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 10, marginBottom: 20, width: 200, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 24, marginTop: 20, height: 57, }} >
                    <RX.Text style={[_styles.logoText3, { width: 200, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }]}>
                      {'Buy on Opensea'}
                    </RX.Text>

                  </RX.Image >
                </RX.Button>
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
              <RX.Button onPress={() => RX.Linking.openUrl('https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/16923634234309235305936278977612378847065311654836719990863808855426046362600')} >

                <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', width: 200, marginRight: 10, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 24, marginTop: 20, height: 57, }} >
                  <RX.Text style={[_styles.logoText3, { width: 200, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }]}>
                    {'Buy on Opensea'}
                  </RX.Text>

                </RX.Image >

              </RX.Button>
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
              <RX.Button onPress={() => RX.Linking.openUrl('https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/16923634234309235305936278977612378847065311654836719990863808857625069617652')} >

                <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ flexDirection: 'column', marginRight: 10, width: 200, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 24, marginTop: 20, height: 57, }} >
                  <RX.Text style={[_styles.logoText3, { width: 200, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }]}>
                    {'Buy on Opensea'}
                  </RX.Text>

                </RX.Image >

              </RX.Button>
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

              <RX.Button onPress={() => RX.Linking.openUrl('https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/16923634234309235305936278977612378847065311654836719990863808856525557990376')} >

                <RX.Image source={ImageSource.caru2} resizeMode={'cover'} resizeMethod={'auto'} style={{ width: 200, flexDirection: 'column', marginRight: 10, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 24, marginTop: 20, height: 57, }} >
                  <RX.Text style={[_styles.logoText3, { width: 200, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }]}>
                    {'Buy on Opensea'}
                  </RX.Text>

                </RX.Image >

              </RX.Button>
            </RX.Image >
          </RX.View >
        </RX.View>}
    </RX.View>


    <RX.View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, alignSelf: 'stretch' }}>
      <RX.View style={{ marginTop: isTiny ? 0 : 70, backgroundColor: 'black', flexDirection: 'row', height: 500, width: isTiny ? width * 0.9 : 600, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>

        <TodoListPanel2
          onSelect={() => null}
          onCreateNew={() => null}
        />

      </RX.View>
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
  </RX.ScrollView >


}

