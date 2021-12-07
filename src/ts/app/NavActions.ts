/*
* NavActions.tsx
* Copyright: Microsoft 2018
*
* Constructs navigation contexts.
*/

import * as NavModels from '../models/NavModels';

export default class NavActions {
    static createTodoListContext(useStackNav: boolean, selectedTodoId?: string, showNewTodoPanel = false,showHomePanel=false, selectedTodoId2?: string,showRafflePanel=false,showProjectPanel=false,showLotteryPanel=false,showRoadMapPanel=false,showCICPanel=false,showFAQPanel=false) {

        if (useStackNav) {
            const navContext = new NavModels.StackRootNavContext();
            navContext.stack.push(new NavModels.TodoListViewNavContext(selectedTodoId));
            if (showNewTodoPanel) {
                navContext.stack.push(new NavModels.NewTodoViewNavContext());
            } else if (selectedTodoId !== undefined) {
                navContext.stack.push(new NavModels.ViewTodoViewNavContext(selectedTodoId));
            }else if (selectedTodoId2 !== undefined) {
                navContext.stack.push(new NavModels.ViewTodoViewNavContext2(selectedTodoId2));
            } else if (showHomePanel) {
                navContext.stack.push(new NavModels.HomeViewNavContext());
            }else if (showRafflePanel) {
                navContext.stack.push(new NavModels.RaffleViewNavContext());
            }else if (showProjectPanel) {
                navContext.stack.push(new NavModels.ProjectViewNavContext());
            }else if (showLotteryPanel) {
                navContext.stack.push(new NavModels.LotteryViewNavContext());
            }else if (showRoadMapPanel) {
                navContext.stack.push(new NavModels.RoadMapViewNavContext());
            }else if (showCICPanel) {
                navContext.stack.push(new NavModels.CICViewNavContext());
            }else if (showFAQPanel) {
                navContext.stack.push(new NavModels.FAQViewNavContext());
            }
            return navContext;
        } else {
            return new NavModels.TodoRootNavContext(selectedTodoId, showNewTodoPanel,showHomePanel,selectedTodoId2,showRafflePanel,showProjectPanel,showLotteryPanel,showRoadMapPanel,showCICPanel,showFAQPanel);
        }
    }
}
