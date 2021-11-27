/**
* CreateTodoPanel.tsx
* Copyright: Microsoft 2017
*
* The Todo item edit view.
*/

import * as RX from 'reactxp';

import { Colors, Fonts, FontSizes, Styles } from '../app/Styles';
import CurrentUserStore from '../stores/CurrentUserStore';
interface CreateTodoPanelProps extends RX.CommonProps {
}

interface Entries {
    img: string;
    imgText: string;
    title: string;
    content: string;
}
interface CreateTodoPanelState {
    todoText: string;
    isLogin: boolean;
    entries: Entries[];
}

const _styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
        padding: 16,
    }),
    todoText: RX.Styles.createTextStyle({
        margin: 8,
        fontSize: FontSizes.size16,
        alignSelf: 'stretch',
        color: Colors.black,
        backgroundColor: 'transparent',
    }),
    editTodoItem: RX.Styles.createTextInputStyle({
        margin: 8,
        height: 32,
        paddingHorizontal: 4,
        fontSize: FontSizes.size16,
        alignSelf: 'stretch',
    }),
    buttonContainer: RX.Styles.createViewStyle({
        margin: 8,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }),
    label: RX.Styles.createTextStyle({
        font: Fonts.displayBold,
        fontSize: FontSizes.size12,
        color: 'black',
    })
};


import ImageSource from 'modules/images';
const Moralis = require('moralis');
const serverUrl = "https://dkmypapn65am.usemoralis.com:2053/server";
const appId = "eXd9zckjUGhiRrW5TVszfh7u5ZNfmxbXCTCMMjLc";
Moralis.start({ serverUrl, appId })
export default class HomePanel extends RX.Component<CreateTodoPanelProps, CreateTodoPanelState> {
    protected _buildState(props: CreateTodoPanelProps, initState: boolean): Partial<CreateTodoPanelState> {
        const partialState: Partial<CreateTodoPanelState> = {
            isLogin: CurrentUserStore.getLogin() ?? false,
            entries: [
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
            ]
        };
        return partialState;
    }

    render() {
        return (
            <RX.View useSafeInsets={true} style={[_styles.container, Styles.statusBarTopMargin]}>
                <RX.Text style={_styles.todoText}>
                    {'Welcome!'}
                </RX.Text>

            </RX.View>
        );
    }

    _onPressTodo = async (e: RX.Types.SyntheticEvent) => {
        e.stopPropagation()
        await Moralis.enableWeb3()


        await Moralis.Web3.authenticate().then(async (user: any) => {
            let username = user.get('username')
            let createdAt = user.get('createdAt')
            let sessionToken = user.get('sessionToken')
            let updatedAt = user.get('updatedAt')
            let address = user.get('ethAddress')


            if (address !== '') {
                CurrentUserStore.setLogin(true)

                CurrentUserStore.setUser(username, '', createdAt, sessionToken, updatedAt, '', address)
            }
            return
        })


        CurrentUserStore.setLogin(false)
        return
    };
}
