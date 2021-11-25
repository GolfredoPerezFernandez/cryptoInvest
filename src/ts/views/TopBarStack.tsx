/*
* TopBarStack.tsx
* Copyright: Microsoft 2018
*
* Horizontal bar that appears on the top of every view within the app
* when it's using stack-based layout.
*/

import * as RX from 'reactxp';
import { ComponentBase } from 'resub';

import ImageSource from 'modules/images';
import HoverButton from '../controls/HoverButton';
import { Colors, Fonts, FontSizes, Styles } from '../app/Styles';

const _styles = {
    background: RX.Styles.createViewStyle({
        alignSelf: 'stretch',
        height: 57,
        borderBottomWidth: 1,
        borderColor: Colors.gray66,
        backgroundColor: "black",
        flexDirection: 'row',
        justifyContent: 'center',
    }),
    leftRightContainer: RX.Styles.createViewStyle({
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',

    }),
    titleContainer: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
        alignItems: "center",
        justifyContent: 'center',
    }),
    titleText: RX.Styles.createTextStyle({
        flex: -1,
        font: Fonts.displaySemibold,
        fontSize: FontSizes.size16,
        color: Colors.menuText,
        textAlign: 'center',
    }),
    backText: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size16,
        color: Colors.menuText,
        margin: 8,
    }),
    backTextHover: RX.Styles.createTextStyle({
        color: Colors.menuTextHover,
    }),
    leftLeftContainer: RX.Styles.createViewStyle({
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    label: RX.Styles.createTextStyle({
        font: Fonts.displayBold,
        fontSize: FontSizes.size12,
        color: 'white',
    })
};

export interface TopBarStackProps extends RX.CommonProps {
    title: string;
    width: number;
    loading: boolean,
    showBackButton: boolean;
    onBack?: () => void;
}
interface TopBarStackState {
    isLogin: boolean;
    user: UserMoralis;
}

const Moralis = require('moralis');
const serverUrl = "https://kyyslozorkna.usemoralis.com:2053/server";
const appId = "eKUfnm9MJRGaWSNh8mjnFpFz5FrPYYGB7xS4J7nC";
Moralis.start({ serverUrl, appId });

const _confirmDeleteDialogId = 'delete';
import * as UI from '@sproutch/ui';
import CurrentUserStore from '../stores/CurrentUserStore';
import { UserMoralis } from '../models/IdentityModels';
import AccountMenuButton2Iny from './AccountMenuButton2Iny';
import NavContextStore from '../stores/NavContextStore';
import SimpleDialog from '../controls/SimpleDialog';
export default class TopBarStack extends ComponentBase<TopBarStackProps, TopBarStackState> {

    protected _buildState(props: TopBarStackProps, initState: boolean): Partial<TopBarStackState> | undefined {
        const partialState: Partial<TopBarStackState> = {
            isLogin: CurrentUserStore.getLogin(),

            user: CurrentUserStore.getUser(),
        };
        return partialState;
    }


    render(): JSX.Element | null {
        let leftContents: JSX.Element | undefined;
        let rightContents: JSX.Element | undefined;

        if (this.props.showBackButton) {
            leftContents = (
                <HoverButton onPress={this._onPressBack} onRenderChild={this._renderBackButton} />
            );
        }

        return (
            <RX.View style={[_styles.background, Styles.statusBarTopMargin]}>
                <RX.View style={[_styles.leftLeftContainer, { width: this.props.width * 0.40 }]}>
                    {leftContents}
                    {!this.state.isLogin ? null :
                        <UI.Button onPress={() => this._onPressRaffles()} style={{ root: [{ alignSelf: 'center' }], content: [{ height: 37, width: 88, backgroundColor: "#FFC06F", borderRadius: 11, }], label: _styles.label }
                        } elevation={4} variant={"outlined"} label="Raffles" />}
                </RX.View>

                <RX.Image source={ImageSource.logo} resizeMode={'contain'} style={{ marginTop: 0, width: this.props.width * 0.2, minHeight: 50 }} />

                <RX.View style={[_styles.leftRightContainer, { width: this.props.width * 0.40 }]}>
                    {!this.state.isLogin ? this.props.loading ? <RX.View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', alignSelf: 'stretch' }}>
                        <UI.Spinner style={{ marginTop: 20, marginRight: 40 }} size={'medium'} color={'white'} />  </RX.View> :
                        <UI.Button onPress={this._onPressTodo} iconSlot={iconStyle => (
                            <RX.Image source={ImageSource.metamask} style={{ marginTop: 0, marginRight: 10, width: 14, height: 14 }} />
                        )} style={{ root: [{ alignSelf: 'center', }], content: [{ width: 88, marginRight: 30, height: 37, borderRadius: 11, }], label: _styles.label }
                        } elevation={4} variant={"outlined"} label="Auth" />
                        :
                        <RX.View style={{ height: 80, flexDirection: 'row', paddingRight: 30, justifyContent: 'center', alignItems: 'center' }}>

                            <AccountMenuButton2Iny onLogOut={this.onLogOut} username={this.state.user.ethAddress} avatar={this.state.user.avatar === '' ? '' : this.state.user.avatar.url()} onPress={() => this._onPressModal} />


                        </RX.View>}
                </RX.View>
            </RX.View>
        );
    }

    _onPressRaffles() {
        NavContextStore.navigateToTodoList()
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
        CurrentUserStore.setLoading(true)
        //    const chainId2 = 80001;
        //   const chainName = "POLYGON Mumbai";
        //  const currencyName = "MATIC";
        //  const currencySymbol = "MATIC";
        ///  const rpcUrl = "https://speedy-nodes-nyc.moralis.io/d260aa2c8aca7707222e4d3c/polygon/mumbai";
        //  const blockExplorerUrl = "https://explorer-mumbai.maticvigil.com/";

        try {

            await Moralis.enableWeb3()
            //    await Moralis.addNetwork(
            //        chainId2,
            //        chainName,
            //         currencyName,
            //        currencySymbol,
            //          rpcUrl,
            //          blockExplorerUrl
            //     )


            //   Moralis.switchNetwork('0x13881');

            await Moralis.authenticate().then(async (user: any) => {
                let username = user.get('username')
                let createdAt = user.get('createdAt')
                let sessionToken = user.get('sessionToken')
                let updatedAt = user.get('updatedAt')
                let address = user.get('ethAddress')
                console.log(address)
                if (address === '0xfd2b6f391066d8eafa910fe73ea90c197c21d338' || address === '0x069dFfD8D5E00952D956aEF824D3E3DcDadeEA63') {
                    console.log("es el admin")
                    await CurrentUserStore.setIsAdmin(true)

                } else {
                    console.log("No es el admin")
                    await CurrentUserStore.setIsAdmin(false)
                }

                let avatar = user.get('avatar')

                if (avatar === undefined) {


                    CurrentUserStore.setUser(username, '', createdAt, sessionToken, updatedAt, '', address)
                    CurrentUserStore.setLogin(true)
                } else {

                    CurrentUserStore.setUser(username, '', createdAt, sessionToken, updatedAt, avatar, address)
                    CurrentUserStore.setLogin(true)
                }
                CurrentUserStore.setLoading(false)


                return
            })
        } catch (error) {
            CurrentUserStore.setLogin(false)
            CurrentUserStore.setLoading(false)

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
        <RX.Text style={[_styles.backText, isHovering ? _styles.backTextHover : undefined]}>
            {'Back'}
        </RX.Text>
    );
}
