/**
* NavModels.ts
* Copyright: Microsoft 2018
*
* Interface and enumeration definitions used for app navigation.
* A "navigation context" describes a location within the app and
* any associated state that may be expressed within a deep link.
*
* A "view nav context" describes the state of a view.
*
* A "root nav context" describes the nav context for the app's
* root view - the top of the visual hierarchy. Depending on the
* screen size, the root nav context may be stack-based (consisting
* of a stack of individual panels) or composite (in which multiple
* views are displayed side by side).
*/

import * as _ from 'lodash';

export enum NavViewId {
    TodoComposite = 1,
    TodoList,
    NewTodo,
    ViewTodo,
    ViewHome,
    ViewTodo2,
ViewRaffle,
ViewProject,
ViewLottery,
ViewRoadMap,
ViewCIC,
ViewFAQ
}

// ----------------------------------------
// Root nav contexts
// ----------------------------------------
export abstract class RootNavContext {
    constructor(public isStackNav: boolean) {
    }

    abstract clone(): RootNavContext;
}

export abstract class CompositeRootNavContext extends RootNavContext {
    constructor(public viewId: NavViewId) {
        super(false);
    }
}

export class StackRootNavContext extends RootNavContext {
    stack: ViewNavContext[];

    constructor() {
        super(true);
        this.stack = [];
    }

    clone(): StackRootNavContext {
        const clone = new StackRootNavContext();
        _.each(this.stack, navContext => {
            clone.stack.push(navContext.clone());
        });
        return clone;
    }
}

export class TodoRootNavContext extends CompositeRootNavContext {
    todoList: TodoListViewNavContext;

    todoList2: TodoListViewNavContext2;
    constructor(selectedTodoId?: string, public showNewTodoPanel = false,public showHomePanel=false,selectedTodoId2?: string,public showRafflePanel=false,public showProjectPanel=false,public showLotteryPanel=false,public showRoadMapPanel=false,public showCICPanel=false,public showFAQPanel=false) {
        super(NavViewId.TodoComposite);
        this.todoList = new TodoListViewNavContext(selectedTodoId);
        this.todoList2 = new TodoListViewNavContext2(selectedTodoId,selectedTodoId2);

    }

    clone(): TodoRootNavContext {
        return new TodoRootNavContext(this.todoList.selectedTodoId, this.showNewTodoPanel,this.showHomePanel,this.todoList.selectedTodoId2,this.showRafflePanel,this.showProjectPanel,this.showLotteryPanel,this.showRoadMapPanel,this.showCICPanel,this.showFAQPanel);
    }
}

// ----------------------------------------
// View nav contexts
// ----------------------------------------


export abstract class ViewNavContext {
    constructor(public viewId: NavViewId) {
    }

    abstract clone(): ViewNavContext;
}

export class ViewTodoViewNavContext2 extends ViewNavContext {
    constructor(public todoId: string) {
        super(NavViewId.ViewTodo2);
    }

    clone(): ViewTodoViewNavContext2 {
        return new ViewTodoViewNavContext2(this.todoId);
    }
}
export class TodoListViewNavContext extends ViewNavContext {
    constructor(public selectedTodoId?: string,public selectedTodoId2?: string) {
        super(NavViewId.TodoList);
    }

    clone(): TodoListViewNavContext {
        return new TodoListViewNavContext(this.selectedTodoId,this.selectedTodoId2);
    }
}
export class FAQViewNavContext extends ViewNavContext {
    constructor() {
        super(NavViewId.ViewFAQ);
    }

    clone(): FAQViewNavContext {
        return new FAQViewNavContext();
    }
}
export class CICViewNavContext extends ViewNavContext {
    constructor() {
        super(NavViewId.ViewCIC);
    }

    clone(): CICViewNavContext {
        return new CICViewNavContext();
    }
}
export class RoadMapViewNavContext extends ViewNavContext {
    constructor() {
        super(NavViewId.ViewRoadMap);
    }

    clone(): RoadMapViewNavContext {
        return new RoadMapViewNavContext();
    }
}
export class LotteryViewNavContext extends ViewNavContext {
    constructor() {
        super(NavViewId.ViewLottery);
    }

    clone(): LotteryViewNavContext {
        return new LotteryViewNavContext();
    }
}
export class ProjectViewNavContext extends ViewNavContext {
    constructor() {
        super(NavViewId.ViewProject);
    }

    clone(): ProjectViewNavContext {
        return new ProjectViewNavContext();
    }
}

export class RaffleViewNavContext extends ViewNavContext {
    constructor() {
        super(NavViewId.ViewRaffle);
    }

    clone(): RaffleViewNavContext {
        return new RaffleViewNavContext();
    }
}

export class HomeViewNavContext extends ViewNavContext {
    constructor() {
        super(NavViewId.ViewHome);
    }

    clone(): HomeViewNavContext {
        return new HomeViewNavContext();
    }
}

export class NewTodoViewNavContext extends ViewNavContext {
    constructor() {
        super(NavViewId.NewTodo);
    }

    clone(): NewTodoViewNavContext {
        return new NewTodoViewNavContext();
    }
}

export class ViewTodoViewNavContext extends ViewNavContext {
    constructor(public todoId: string) {
        super(NavViewId.ViewTodo);
    }

    clone(): ViewTodoViewNavContext {
        return new ViewTodoViewNavContext(this.todoId);
    }
}

export class TodoListViewNavContext2 extends ViewNavContext {
    constructor(public selectedTodoId?: string,public selectedTodoId2?: string) {
        super(NavViewId.TodoList);
    }

    clone(): TodoListViewNavContext2 {
        return new TodoListViewNavContext2(this.selectedTodoId,this.selectedTodoId2);
    }
}