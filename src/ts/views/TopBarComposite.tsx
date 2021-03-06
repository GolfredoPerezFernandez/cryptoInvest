/*
* TopBarComposite.tsx
* Copyright: Microsoft 2018
*
* Horizontal bar that appears on the top of every view within the app
* when it's using composite layout (as opposed to stack-based layout).
*/

import ImageSource from 'modules/images';
import * as RX from 'reactxp';
import { ComponentBase } from 'resub';

import HoverButton from '../controls/HoverButton';
import NavContextStore from '../stores/NavContextStore';
import { Colors, Fonts, FontSizes } from '../app/Styles';

const _styles = {
    background: RX.Styles.createViewStyle({
        alignSelf: 'stretch',
        height: 80,
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: Colors.gray66,
        flexDirection: 'row',
        paddingHorizontal: 100,
    }),
    logoContainer: RX.Styles.createViewStyle({
        flexDirection: 'row',
        alignItems: 'center',
    }),
    barControlsContainer: RX.Styles.createViewStyle({
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    }),
    logoImage: RX.Styles.createImageStyle({
        height: 24,
        width: 26,
    }),
    logoText: RX.Styles.createTextStyle({
        font: Fonts.displaySemibold,
        fontSize: FontSizes.size32,
        marginHorizontal: 4,
        color: Colors.white,
    }),
    linkText: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.menuItem,
        marginHorizontal: 8,
        color: Colors.menuText,
    }),
    linkTextHover: RX.Styles.createTextStyle({
        color: Colors.menuTextHover,
    }),
    backButtonContainer: RX.Styles.createViewStyle({
        flexDirection: 'row',
        alignItems: 'center',
    }),
    backText: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size16,
        color: Colors.menuText,
    }),
    label: RX.Styles.createTextStyle({
        font: Fonts.displayBold,
        fontSize: FontSizes.size12,
        color: 'white',
    })
};


import * as UI from '@sproutch/ui';
export interface TopBarCompositeProps extends RX.CommonProps {
    showBackButton: boolean;
    onBack?: () => void;

    width: number;
    loading: boolean;
}
import CurrentUserStore from '../stores/CurrentUserStore';
import AccountMenuButton2 from './AccountMenuButton2';
import { User } from '../models/IdentityModels';
import SimpleDialog from '../controls/SimpleDialog';
import TodosStore from '../stores/TodosStore';

const Moralis = require('moralis');
const serverUrl = "https://dkmypapn65am.usemoralis.com:2053/server";
const appId = "eXd9zckjUGhiRrW5TVszfh7u5ZNfmxbXCTCMMjLc";
Moralis.start({ serverUrl, appId });
interface TopBarCompositeState {
    isLogin: boolean;
    isRegister: boolean;
    sameSession: boolean;
    isPolygon: boolean;
    isMetamask: boolean;
    totalNfts: number;
    isMarketplace: boolean;
    isAdmin: boolean;
    user: User;
    totalMarket: number;
}
const _confirmDeleteDialogId = 'delete';
export default class TopBarComposite extends ComponentBase<TopBarCompositeProps, TopBarCompositeState> {

    protected _buildState(props: TopBarCompositeProps, initState: boolean): Partial<TopBarCompositeState> | undefined {
        const partialState: Partial<TopBarCompositeState> = {
            isLogin: CurrentUserStore.getLogin(),
            user: CurrentUserStore.getUser(),
            isAdmin: CurrentUserStore.getisAdmin()
        };
        return partialState;
    }
    render(): JSX.Element | null {
        let leftContents: JSX.Element | undefined;
        console.log(this.props.width)
        if (this.props.showBackButton) {
            leftContents = (
                <HoverButton onPress={this._onPressBack} onRenderChild={this._renderBackButton} />
            );
        } else {
            leftContents = (
                <RX.Button onPress={this._onPressLogo}>
                    <RX.View style={_styles.logoContainer}>
                        <RX.Image source={ImageSource.logo} style={{ width: 150, marginTop: 5, height: 50 }} />

                    </RX.View>
                </RX.Button>
            );
        }
        return (
            <RX.View style={_styles.background}>
                {leftContents}
                <RX.View style={_styles.barControlsContainer}>
                    <UI.Button onPress={() => this._onPressHome()} style={{ root: [{ alignSelf: 'center' }], content: [{ width: 70, borderWidth: 0, marginLeft: this.props.width * 0.005 }], label: _styles.label }
                    } elevation={4} variant={"outlined"} label="HOME" />
                    <UI.Button onPress={() => this._onPressProject()} style={{ root: [{ alignSelf: 'center' }], content: [{ width: 70, borderWidth: 0, marginLeft: this.props.width * 0.005 }], label: _styles.label }
                    } elevation={4} variant={"outlined"} label="PROJECT" />
                    <UI.Button onPress={() => this._onPressLottery()} style={{ root: [{ alignSelf: 'center' }], content: [{ width: 70, borderWidth: 0, marginLeft: this.props.width * 0.005 }], label: _styles.label }
                    } elevation={4} variant={"outlined"} label="LOTTERY" />
                    <UI.Button onPress={() => this._onPressRoadMap()} style={{ root: [{ alignSelf: 'center' }], content: [{ width: 70, borderWidth: 0, marginLeft: this.props.width * 0.005 }], label: _styles.label }
                    } elevation={4} variant={"outlined"} label="ROADMAP" />
                    <UI.Button onPress={() => this._onPressCIC()} style={{ root: [{ alignSelf: 'center' }], content: [{ width: 70, borderWidth: 0, marginLeft: this.props.width * 0.005 }], label: _styles.label }
                    } elevation={4} variant={"outlined"} label="$CIC" />
                    <UI.Button onPress={() => this._onPressFAQ()} style={{ root: [{ alignSelf: 'center' }], content: [{ width: 50, borderWidth: 0, marginLeft: this.props.width * 0.005, marginRight: this.props.width * 0.03 }], label: _styles.label }
                    } elevation={4} variant={"outlined"} label="FAQ" />



                    {!this.state.isLogin ? this.props.loading ? <RX.View style={{ width: 160, justifyContent: 'center', alignItems: 'center' }}> <UI.Spinner color={'white'} size={'medium'} /></RX.View> :
                        <UI.Button onPress={this._onPressTodo} iconSlot={iconStyle => (
                            <RX.Image source={ImageSource.metamask} style={{ marginTop: 0, alignSelf: 'center', marginRight: 5, width: 14, height: 14 }} />
                        )} style={{ root: [{ alignSelf: 'center' }], content: [{ width: 160, marginBottom: 5, borderRadius: 11, }], label: _styles.label }
                        } elevation={4} variant={"outlined"} label="Metamask" />
                        :
                        <RX.View style={{ height: 80, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            {this.state.isAdmin ? <UI.Button onPress={() => this._onPressRaffles()} style={{ root: [{ alignSelf: 'center' }], content: [{ backgroundColor: '#FFC06F', width: 160, marginBottom: 5, borderRadius: 11, }], label: _styles.label }
                            } elevation={4} variant={"outlined"} label="Raffles" /> : null}

                            <RX.View style={{ width: 20 }}></RX.View>

                            <AccountMenuButton2 onLogOut={this.onLogOut} username={this.state.user.ethAddress} avatar={this.state.user.avatar === '' ? '' : this.state.user.avatar.url()} onPress={() => this._onPressModal} />

                            <RX.View style={{ width: 100 }}></RX.View>

                        </RX.View>}
                </RX.View>
            </RX.View>
        );
    }
    private _onPressModal = (e: RX.Types.SyntheticEvent, todoId: string) => {
        e.stopPropagation();

        const dialog = (
            <SimpleDialog
                dialogId={_confirmDeleteDialogId}
                text={''}
                containerStyle={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}
                maxHeight={600}
                maxWidth={400}

                buttons={[{
                    text: 'Login',
                    onPress: () => {
                        SimpleDialog.dismissAnimated(_confirmDeleteDialogId);

                    },
                }, {
                    text: 'Register',
                    isCancel: false,
                    onPress: () => {

                    },
                }]}
            />
        );

        RX.Modal.show(dialog, _confirmDeleteDialogId);
    };
    private async onLogOut() {


        CurrentUserStore.setRaffles(false)
        CurrentUserStore.setLogin(false)
        CurrentUserStore.setUser('', '', '', '', '', '', '')


        NavContextStore.navigateToTodoList(undefined, false, true)
        await Moralis.User.logOut();
    }
    _onPressHome() {
        NavContextStore.navigateToTodoList(undefined, false, true, undefined, false, false, false, false, false)
    }
    _onPressFAQ() {
        NavContextStore.navigateToTodoList(undefined, false, false, undefined, false, false, false, false, false, true)
    }
    _onPressCIC() {
        NavContextStore.navigateToTodoList(undefined, false, false, undefined, false, false, false, false, true)
    }
    _onPressRoadMap() {
        NavContextStore.navigateToTodoList(undefined, false, false, undefined, false, false, false, true)
    }
    _onPressLottery() {
        NavContextStore.navigateToTodoList(undefined, false, false, undefined, false, false, true)
    }
    _onPressProject() {
        NavContextStore.navigateToTodoList(undefined, false, false, undefined, false, true)
    }
    _onPressRaffles() {
        CurrentUserStore.setRaffles(true)
        NavContextStore.navigateToTodoList(undefined, false, false, undefined, true)
    }
    _onPressTodo = async (e: RX.Types.SyntheticEvent) => {
        e.stopPropagation()
        CurrentUserStore.setLoading(true);
        try {



            await Moralis.authenticate().then(async (user: any) => {
                let username = user.get('username')
                let createdAt = user.get('createdAt')
                let sessionToken = user.get('sessionToken')
                let updatedAt = user.get('updatedAt')
                let address = user.get('ethAddress')


                let avatar = user.get('avatar')
                if (address === '0xfd2b6f391066d8eafa910fe73ea90c197c21d338' || address === '0x069dffd8d5e00952d956aef824d3e3dcdadeea63' || address === '0X069DFFD8D5E00952D956AEF824D3E3DCDADEEA63' || address === '0x5e569bbc0a04f1b01cb76905f40557647536e6b1' || address === '0x5e569bbc0a04f1B01cB76905f40557647536e6B1') {

                    await CurrentUserStore.setIsAdmin(true)

                } else {
                    await CurrentUserStore.setIsAdmin(false)
                }
                if (avatar === undefined) {


                    CurrentUserStore.setUser(username, '', createdAt, sessionToken, updatedAt, '', address)
                    CurrentUserStore.setLogin(true)
                } else {

                    CurrentUserStore.setUser(username, '', createdAt, sessionToken, updatedAt, avatar, address)
                    CurrentUserStore.setLogin(true)
                }

                const ownedItems = Moralis.Cloud.run('getWinnersGold')
                TodosStore.setWinnersGold(ownedItems)



                const ownedSilverWinner = Moralis.Cloud.run('getWinnersSilver')

                TodosStore.setWinnersSilver(ownedSilverWinner)
                const ownedItems2 = Moralis.Cloud.run('getWinnersBronze')
                TodosStore.setWinnersBronze(ownedItems2)


                const ownerBronze = Moralis.Cloud.run('getBronze')


                TodosStore.setOwnersBronze(ownerBronze)
                const ownedSilver = Moralis.Cloud.run('getSilver')

                TodosStore.setOwnersSilver(ownedSilver)


                const ownedGold = Moralis.Cloud.run('getGold')

                TodosStore.setOwnersGold(ownedGold)


                const ownedDBBronze = Moralis.Cloud.run('getDBBronze')

                TodosStore.setDBOwnersBronze(ownedDBBronze)


                const ownedDBSilver = Moralis.Cloud.run('getDBSilver')

                TodosStore.setDBOwnersSilver(ownedDBSilver)

                const ownedDBGold = Moralis.Cloud.run('getDBGold')

                TodosStore.setDBOwnersGold(ownedDBGold)

                CurrentUserStore.setLoading(false);
                return
            })
        } catch (error) {
            CurrentUserStore.setLogin(false)

            CurrentUserStore.setLoading(false);
            return
        }

    };

    private _onPressBack = (e: RX.Types.SyntheticEvent) => {
        e.stopPropagation();

        if (this.props.onBack) {
            this.props.onBack();
        }
    };

    private _renderBackButton = (isHovering: boolean) => (
        <RX.View style={_styles.backButtonContainer}>
            <RX.Text style={[_styles.backText, isHovering ? _styles.linkTextHover : undefined]}>
                {'Back'}
            </RX.Text>
        </RX.View>
    );

    private _onPressLogo = (e: RX.Types.SyntheticEvent) => {
        e.stopPropagation();

        CurrentUserStore.setRaffles(false)
        NavContextStore.navigateToTodoList('', false);
    };

}
