/*
* TodoCompositeView.tsx
* Copyright: Microsoft 2018
*
* Main view that provides a composite view of todos on the left and
* details of the selected todo on the right.
*/

import * as RX from 'reactxp';
import { ComponentBase } from 'resub';

import NavContextStore from '../stores/NavContextStore';
import * as NavModels from '../models/NavModels';

import CreateTodoPanel from './CreateTodoPanel';
import TodoListPanel from './TodoListPanel';
import TodoListPanel2 from './TodoListPanel2';
import ViewTodoPanel from './ViewTodoPanel';
import ViewTodoPanel2 from './ViewTodoPanel2';
import CurrentUserStore from '../stores/CurrentUserStore';
import { HomeHook } from './HomeHook';
import ResponsiveWidthStore from '../stores/ResponsiveWidthStore';
import { RaffleHook } from './RaffleHook';

export interface TodoCompositeViewProps extends RX.CommonProps {
    navContext: NavModels.TodoRootNavContext;
}

interface TodoCompositeViewState {
    isLogin: boolean;
    width: number;
    height: number;
    isRaffles: boolean;
    isTiny: boolean;
}

const _styles = {
    viewContainer: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        backgroundColor: 'black'
    }),
    leftPanelContainer: RX.Styles.createViewStyle({
        width: 400,
        backgroundColor: 'black',
        flexDirection: 'column',
    }),
    rightPanelContainer: RX.Styles.createViewStyle({
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    }),
};
export default class TodoCompositeView extends ComponentBase<TodoCompositeViewProps, TodoCompositeViewState> {
    protected _buildState(props: TodoCompositeViewProps, initState: boolean): Partial<TodoCompositeViewState> {
        const partialState: Partial<TodoCompositeViewState> = {
            width: ResponsiveWidthStore.getWidth(),
            height: ResponsiveWidthStore.getHeight(),
            isLogin: CurrentUserStore.getLogin(),
            isRaffles: CurrentUserStore.getRaffles(),
            isTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
        };
        return partialState;
    }
    render(): JSX.Element | null {
        return (
            <RX.View style={_styles.viewContainer}>
                {this.state.isRaffles == true ?
                    <RX.View style={_styles.leftPanelContainer}>
                        <TodoListPanel
                            selectedTodoId={this.props.navContext.todoList.selectedTodoId || ''}
                            onSelect={this._onSelectTodo}
                            onCreateNew={this._onCreateNewTodo}
                        />
                    </RX.View> : null}
                <RX.View style={_styles.rightPanelContainer}>
                    {this._renderRightPanel()}
                </RX.View>
                {this.state.isRaffles == true ? <RX.View style={_styles.leftPanelContainer}>
                    <TodoListPanel2
                        selectedTodoId={this.props.navContext.todoList2.selectedTodoId2 || ''}
                        onSelect={this._onSelectTodo2}
                        onCreateNew={this._onCreateNewTodo}
                    />
                </RX.View> : null}
            </RX.View>
        );
    }

    private _renderRightPanel() {
        if (this.props.navContext.showNewTodoPanel) {
            return (
                <CreateTodoPanel />
            );
        } else if (this.props.navContext.todoList.selectedTodoId) {
            return (
                <ViewTodoPanel todoId={this.props.navContext.todoList.selectedTodoId} />
            );
        } else if (this.props.navContext.todoList2.selectedTodoId2) {
            return (
                <ViewTodoPanel2 todoId={this.props.navContext.todoList2.selectedTodoId2} />
            );
        } else if (this.props.navContext.showRafflePanel) {
            return (
                <RaffleHook />
            );
        } else {
            return <HomeHook navContext={this.props.navContext} entries={[]} isTiny={this.state.isTiny} width={this.state.width} height={this.state.height} />;
        }
    }

    private _onSelectTodo2 = (todoId: string) => {
        console.log('entro')

        NavContextStore.navigateToTodoList(undefined, false, false, todoId);
    };
    private _onSelectTodo = (todoId: string) => {
        NavContextStore.navigateToTodoList(todoId, false);
    };

    private _onCreateNewTodo = () => {
        NavContextStore.navigateToTodoList('', true);
    };
}
