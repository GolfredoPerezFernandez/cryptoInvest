/*
* RootView.tsx
* Copyright: Microsoft 2018
*
* Top-level UI for the TodoList sample app.
*/

import * as assert from 'assert';

import * as _ from 'lodash';
import * as RX from 'reactxp';
import Navigator, { Types as NavTypes } from 'reactxp-navigation';
import { ComponentBase } from 'resub';

import NavContextStore from '../stores/NavContextStore';
import * as NavModels from '../models/NavModels';
import { Colors } from '../app/Styles';

import CreateTodoPanel from './CreateTodoPanel';
import TodoCompositeView from './TodoCompositeView';
import TodoListPanel from './TodoListPanel';
import TopBarComposite from './TopBarComposite';
import TopBarStack from './TopBarStack';
import ViewTodoPanel from './ViewTodoPanel';
import { HomeHook } from './HomeHook';
import ResponsiveWidthStore from '../stores/ResponsiveWidthStore';
import CurrentUserStore from '../stores/CurrentUserStore';
import ViewTodoPanel2 from './ViewTodoPanel2';
import TodoListPanel2 from './TodoListPanel2';
import TodosStore from '../stores/TodosStore';
import { RaffleHook } from './RaffleHook';
import { ProjectHook } from './ProjectHook';
import { LotteryHook } from './LotteryHook';
import { RoadMapHook } from './RoadMapHook';
import { CICHook } from './CICHook';
import { FAQHook } from './FAQHook';

interface RootViewProps extends RX.CommonProps {
    onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void;
}

interface RootViewState {
    viewTitle: string;
    width: number;
    isTiny: boolean;
    isWinners: boolean;
    height: number;
    loading: boolean;
    navContext: NavModels.RootNavContext;
}

const _styles = {
    root: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
    }),
    stackViewBackground: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: Colors.black,
    }),
};


import ImageSource from 'modules/images';
export default class RootView extends ComponentBase<RootViewProps, RootViewState> {
    private _navigator: Navigator | null = null;

    protected _buildState(props: RootViewProps, initState: boolean): Partial<RootViewState> | undefined {
        const newNavContext = NavContextStore.getNavContext();

        const partialState: Partial<RootViewState> = {
            viewTitle: this._getViewTitle(newNavContext),
            height: ResponsiveWidthStore.getHeight(),
            width: ResponsiveWidthStore.getWidth(),
            isWinners: TodosStore.getIsWinners(),
            loading: CurrentUserStore.getLoading(),
            isTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
            navContext: newNavContext,
        };

        if (newNavContext.isStackNav) {
            if (this._navigator) {
                const newNavStack = newNavContext as NavModels.StackRootNavContext;
                let mustResetRouteStack = true;

                if (this.state.navContext && this.state.navContext.isStackNav) {
                    const prevNavStack = this.state.navContext as NavModels.StackRootNavContext;

                    if (newNavStack.stack.length === prevNavStack.stack.length + 1) {
                        if (this._compareNavStack(newNavStack.stack, prevNavStack.stack, prevNavStack.stack.length)) {
                            this._navigator.push(this._createNavigatorRoute(newNavStack.stack[newNavStack.stack.length - 1].viewId));
                            mustResetRouteStack = false;
                        }
                    } else if (newNavStack.stack.length === prevNavStack.stack.length - 1) {
                        if (this._compareNavStack(newNavStack.stack, prevNavStack.stack, newNavStack.stack.length)) {
                            this._navigator.pop();
                            mustResetRouteStack = false;
                        }
                    }
                }

                if (mustResetRouteStack) {
                    this._navigator.immediatelyResetRouteStack(this._createNavigatorRouteStack(newNavStack));
                }
            }
        }

        return partialState;
    }

    render(): JSX.Element | null {
        if (this.state.navContext.isStackNav) {
            return (
                <RX.View style={_styles.root} onLayout={this.props.onLayout}>
                    <Navigator
                        ref={this._onMountNavigator}
                        renderScene={this._onRenderScene}
                    />
                </RX.View>
            );
        } else {
            const compositeContext = this.state.navContext as NavModels.CompositeRootNavContext;
            const showBackButton = this._showBackButton(compositeContext.viewId);
            return (
                <RX.View style={_styles.root} onLayout={this.props.onLayout}>
                    <TopBarComposite width={this.state.width} loading={this.state.loading} showBackButton={showBackButton} onBack={this._onBack} />
                    {this._renderMainView()}


                </RX.View>
            );
        }
    }

    private _showBackButton(viewId: NavModels.NavViewId): boolean {
        return viewId !== NavModels.NavViewId.TodoComposite &&
            viewId !== NavModels.NavViewId.TodoList &&
            viewId !== NavModels.NavViewId.ViewHome
    }

    private _getViewTitle(navContext: NavModels.RootNavContext): string {
        if (navContext.isStackNav) {
            const stackContext = navContext as NavModels.StackRootNavContext;
            const topViewId = stackContext.stack[stackContext.stack.length - 1].viewId;

            switch (topViewId) {
                case NavModels.NavViewId.TodoList:
                    return 'Todo List';

                case NavModels.NavViewId.NewTodo:
                    return 'New Todo';
                case NavModels.NavViewId.ViewHome:
                    return 'Welcome';

                case NavModels.NavViewId.ViewTodo:
                    return 'Todo Details';
                case NavModels.NavViewId.ViewRaffle:
                    return 'Raffles';
                case NavModels.NavViewId.ViewProject:
                    return 'Project';
                case NavModels.NavViewId.ViewLottery:
                    return 'Lottery';
                case NavModels.NavViewId.ViewRoadMap:
                    return 'RoadMap';
                case NavModels.NavViewId.ViewCIC:
                    return '$CIC';
                case NavModels.NavViewId.ViewFAQ:
                    return 'FAQ';

                default:
                    assert.fail('Unknown view');
                    return '';
            }
        } else {
            return '';
        }
    }

    private _onMountNavigator = (elem: any) => {
        this._navigator = elem;

        if (this._navigator) {
            this._navigator.immediatelyResetRouteStack(this._createNavigatorRouteStack(
                this.state.navContext as NavModels.StackRootNavContext));
        }
    };

    private _onRenderScene = (navigatorRoute: NavTypes.NavigatorRoute): JSX.Element | null => {
        const viewId = navigatorRoute.routeId as NavModels.NavViewId;
        const showBackButton = this._showBackButton(viewId);

        return (
            <RX.View style={_styles.stackViewBackground}>
                <TopBarStack
                    loading={this.state.loading}
                    width={this.state.width}
                    title={this.state.viewTitle}
                    showBackButton={showBackButton}
                    onBack={this._onBack}
                />
                {this._renderSceneContents(viewId)}

            </RX.View>
        );
    };

    private _renderSceneContents(viewId: NavModels.NavViewId) {
        switch (viewId) {
            case NavModels.NavViewId.TodoList:
                return (
                    <RX.View>
                        {this.state.isWinners ? <TodoListPanel2
                            onSelect={this._onSelectTodoFromList2}
                            onCreateNew={this._onCreateNewTodo}
                        /> : <TodoListPanel
                            onSelect={this._onSelectTodoFromList}
                            onCreateNew={this._onCreateNewTodo}
                        />}

                    </RX.View>
                );
            case NavModels.NavViewId.NewTodo:
                return <CreateTodoPanel />;
            case NavModels.NavViewId.ViewHome:
                return <HomeHook navContext={this.state.navContext} isTiny={this.state.isTiny} width={this.state.width} height={this.state.height} />;
            case NavModels.NavViewId.ViewRaffle:
                return <RaffleHook />;
            case NavModels.NavViewId.ViewProject:
                return <ProjectHook isTiny={this.state.isTiny} width={this.state.width} height={this.state.height} />;
            case NavModels.NavViewId.ViewLottery:
                return <LotteryHook isTiny={this.state.isTiny} width={this.state.width} height={this.state.height} />;
            case NavModels.NavViewId.ViewRoadMap:
                return <RoadMapHook isTiny={this.state.isTiny} width={this.state.width} height={this.state.height} />;
            case NavModels.NavViewId.ViewCIC:
                return <CICHook isTiny={this.state.isTiny} width={this.state.width} height={this.state.height} />;
            case NavModels.NavViewId.ViewFAQ:
                return <FAQHook isTiny={this.state.isTiny} width={this.state.width} height={this.state.height} />;

            case NavModels.NavViewId.ViewTodo:
                const viewContext = this._findNavContextForRoute(viewId) as NavModels.ViewTodoViewNavContext;
                if (!viewContext) {
                    return null;
                }
                return <ViewTodoPanel todoId={viewContext.todoId} />;
            case NavModels.NavViewId.ViewTodo2:
                const viewContext2 = this._findNavContextForRoute(viewId) as NavModels.ViewTodoViewNavContext2;
                if (!viewContext2) {
                    return null;
                }
                return <ViewTodoPanel2 todoId={viewContext2.todoId} />;

            default:
                return <HomeHook navContext={this.state.navContext} isTiny={this.state.isTiny} width={this.state.width} height={this.state.height} />;
        }
    }


    private _onSelectTodoFromList2 = (selectedId: string) => {
        NavContextStore.navigateToTodoList(undefined, false, false, selectedId);
    };

    private _onSelectTodoFromList = (selectedId: string) => {
        NavContextStore.navigateToTodoList(selectedId, false);
    };

    private _onCreateNewTodo = () => {
        NavContextStore.navigateToTodoList(undefined, true);
    };

    private _onBack = () => {
        if (this.state.navContext.isStackNav) {
            NavContextStore.popNavigationStack();
        }
    };

    private _renderMainView(): JSX.Element | null {
        if (this.state.navContext instanceof NavModels.TodoRootNavContext) {
            return <TodoCompositeView navContext={this.state.navContext} />;
        } else {
            assert.fail('Unexpected main view type');
            return null;
        }
    }

    private _createNavigatorRouteStack(stackContext: NavModels.StackRootNavContext): NavTypes.NavigatorRoute[] {
        return _.map(stackContext.stack, (viewContext, index) => this._createNavigatorRoute(viewContext.viewId));
    }

    private _createNavigatorRoute(viewId: NavModels.NavViewId): NavTypes.NavigatorRoute {
        return {
            routeId: viewId,
            sceneConfigType: NavTypes.NavigatorSceneConfigType.FloatFromRight,
        };
    }

    private _findNavContextForRoute(routeId: number) {
        assert.ok(this.state.navContext.isStackNav);

        const stackContext = this.state.navContext as NavModels.StackRootNavContext;
        return _.find(stackContext.stack, (viewContext: NavModels.ViewNavContext) => viewContext.viewId === routeId);
    }

    private _compareNavStack(stackA: NavModels.ViewNavContext[], stackB: NavModels.ViewNavContext[], count: number): boolean {
        for (let i = 0; i < count; i++) {
            if (stackA[i].viewId !== stackB[i].viewId) {
                return false;
            }
        }

        return true;
    }
}
