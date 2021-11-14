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
import VerticalSeparator from '../controls/VerticalSeparator';

import AccountMenuButton from './AccountMenuButton';

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
}
import CurrentUserStore from '../stores/CurrentUserStore';
import AccountMenuButton2 from './AccountMenuButton2';
import { User } from '../models/IdentityModels';
import SimpleDialog from '../controls/SimpleDialog';

const Moralis = require('moralis');
const serverUrl = "https://qqdpez4ourk2.moralishost.com:2053/server";
const appId = "kVVoRWButUY31vShqdGGQmiya4L0n3kF5aRTUVXk";
Moralis.start({ serverUrl, appId });
interface TopBarCompositeState {
    isLogin: boolean;
    isRegister: boolean;
    sameSession: boolean;
    isPolygon: boolean;
    isMetamask: boolean;
    totalNfts: number;
    isMarketplace: boolean;
    user: User;
    totalMarket: number;
}
const _confirmDeleteDialogId = 'delete';
export default class TopBarComposite extends ComponentBase<TopBarCompositeProps, TopBarCompositeState> {

    protected _buildState(props: TopBarCompositeProps, initState: boolean): Partial<TopBarCompositeState> | undefined {
        const partialState: Partial<TopBarCompositeState> = {
            isLogin: CurrentUserStore.getLogin(),
            user: CurrentUserStore.getUser(),
        };
        return partialState;
    }
    render(): JSX.Element | null {
        let leftContents: JSX.Element | undefined;

        if (this.props.showBackButton) {
            leftContents = (
                <HoverButton onPress={this._onPressBack} onRenderChild={this._renderBackButton} />
            );
        } else {
            leftContents = (
                <RX.Button onPress={this._onPressLogo}>
                    <RX.View style={_styles.logoContainer}>
                        <RX.Image source={ImageSource.logo} style={{ width: 200, marginTop: 5, height: 50 }} />

                    </RX.View>
                </RX.Button>
            );
        }
        return (
            <RX.View style={_styles.background}>
                {leftContents}
                <RX.View style={_styles.barControlsContainer}>
                    {!this.state.isLogin ?
                        <UI.Button onPress={this._onPressTodo} iconSlot={iconStyle => (
                            <RX.Image source={ImageSource.metamask} style={{ marginTop: 0, alignSelf: 'center', marginRight: 5, width: 14, height: 14 }} />
                        )} style={{ root: [{ alignSelf: 'center' }], content: [{ width: 250, marginBottom: 5, borderRadius: 11, }], label: _styles.label }
                        } elevation={4} variant={"outlined"} label="Authenticate" />
                        :
                        <RX.View style={{ height: 80, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>


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


        CurrentUserStore.setLogin(false)
        CurrentUserStore.setUser('', '', '', '', '', '', '')


        NavContextStore.navigateToTodoList(undefined, false, true)
        await Moralis.User.logOut();
    }
    _onPressTodo = async (e: RX.Types.SyntheticEvent) => {
        e.stopPropagation()
        const chainId2 = 80001;
        const chainName = "POLYGON Mumbai";
        const currencyName = "MATIC";
        const currencySymbol = "MATIC";
        const rpcUrl = "https://speedy-nodes-nyc.moralis.io/d260aa2c8aca7707222e4d3c/polygon/mumbai";
        const blockExplorerUrl = "https://explorer-mumbai.maticvigil.com/";
        try {

            await Moralis.enableWeb3()
            await Moralis.addNetwork(
                chainId2,
                chainName,
                currencyName,
                currencySymbol,
                rpcUrl,
                blockExplorerUrl
            )


            Moralis.switchNetwork('0x13881');

            await Moralis.authenticate().then(async (user: any) => {
                let username = user.get('username')
                let createdAt = user.get('createdAt')
                let sessionToken = user.get('sessionToken')
                let updatedAt = user.get('updatedAt')
                let address = user.get('ethAddress')


                let avatar = user.get('avatar')

                if (avatar === undefined) {


                    CurrentUserStore.setUser(username, '', createdAt, sessionToken, updatedAt, '', address)
                    CurrentUserStore.setLogin(true)
                } else {

                    CurrentUserStore.setUser(username, '', createdAt, sessionToken, updatedAt, avatar, address)
                    CurrentUserStore.setLogin(true)
                }
                return
            })
        } catch (error) {
            CurrentUserStore.setLogin(false)
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

        NavContextStore.navigateToTodoList('', false);
    };

    private _onPressHelp = (e: RX.Types.SyntheticEvent) => {
        e.stopPropagation();

        RX.Linking.openUrl('https://www.bing.com/search?q=help');
    };

    private _onRenderHelpButton = (isHovering: boolean) => {
        const textStyles = [_styles.linkText];
        if (isHovering) {
            textStyles.push(_styles.linkTextHover);
        }

        return (
            <RX.Text style={textStyles}>
                {'Help'}
            </RX.Text>
        );
    };
}
