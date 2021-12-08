/*
* DeepLinkConverter.tsx
* Copyright: Microsoft 2018
*
* Converts between app (deep-link) URLs and navigation contexts.
*/

import * as assert from 'assert';

import * as _ from 'lodash';

import NavActions from '../app/NavActions';
import * as NavModels from '../models/NavModels';

import AppConfig from './AppConfig';

export default class DeepLinkConverter {
    static getUrlFromContext(context: NavModels.RootNavContext): string {
        let url = AppConfig.getFrontendBaseUrl();

        if (context.isStackNav) {
            const stackContext = context as NavModels.StackRootNavContext;
            const topViewContext = stackContext.stack[stackContext.stack.length - 1];

            if (topViewContext instanceof NavModels.TodoListViewNavContext) {
                url += '/owners';
                return url;
            } else if (topViewContext instanceof NavModels.ViewTodoViewNavContext) {
                url += '/owners?selected=' + encodeURIComponent(topViewContext.todoId);
                return url;
            } else if (topViewContext instanceof NavModels.ViewTodoViewNavContext2) {
                url += '/winners?selected=' + encodeURIComponent(topViewContext.todoId);
                return url;
            }else if (topViewContext instanceof NavModels.NewTodoViewNavContext) {
                url += '/owners?selected=new';
                return url;
            }else if (topViewContext instanceof NavModels.HomeViewNavContext) {
                url += '/home' ;
                return url;
            }else if (topViewContext instanceof NavModels.RaffleViewNavContext) {
                url += '/raffles';
                return url;
            }else if (topViewContext instanceof NavModels.ProjectViewNavContext) {
                url += '/project';
                return url;
            }else if (topViewContext instanceof NavModels.LotteryViewNavContext) {
                url += '/lottery';
                return url;
            }else if (topViewContext instanceof NavModels.RoadMapViewNavContext) {
                url += '/roadmap';
                return url;
            }else if (topViewContext instanceof NavModels.CICViewNavContext) {
                url += '/cic';
                return url;
            }else if (topViewContext instanceof NavModels.FAQViewNavContext) {
                url += '/faq';
                return url;
            }
        } else {
            const compositeContext = context as NavModels.CompositeRootNavContext;
            if (compositeContext instanceof NavModels.TodoRootNavContext) {
                url += '/owners';
                const todoListContext = context as NavModels.TodoRootNavContext;
                if (todoListContext.showNewTodoPanel) {
                    url += '?owners=new';
                } else if (todoListContext.todoList.selectedTodoId) {
                    url += '?owners=' + encodeURIComponent(todoListContext.todoList.selectedTodoId);
                } else if (todoListContext.todoList.selectedTodoId2) {
                    url += '?winners=' + encodeURIComponent(todoListContext.todoList.selectedTodoId2);
                } else if (todoListContext.showHomePanel) {
                    url = '/home' ;
                }else if (todoListContext.showRafflePanel) {
                    url = '/raffles' ;
                }else if (todoListContext.showProjectPanel) {
                    url = '/project' ;
                }else if (todoListContext.showLotteryPanel) {
                    url = '/lottery' ;
                }else if (todoListContext.showRoadMapPanel) {
                    url = '/roadmap' ;
                }else if (todoListContext.showCICPanel) {
                    url = '/cic' ;
                }else if (todoListContext.showFAQPanel) {
                    url = '/faq' ;
                }
                return url;
            } else {
                // TODO - need to implement
                assert.fail('Unimplemented');
            }
        }

        return '';
    }

    static getContextFromUrl(url: string, isStackNav: boolean): NavModels.RootNavContext | undefined {
        const urlObj = new URL(url);
        if (!urlObj) {
            return undefined;
        }

        const pathElements = _.map(_.split(urlObj.pathname, '/'), elem => decodeURIComponent(elem));
        if (pathElements.length < 2) {
            return undefined;
        }

        switch (pathElements[1]) {
            case 'owners':
                let selectedTodoId: string | undefined;
                let showNewPanel = false;

                const selectedValue = urlObj.searchParams.get('selected');
                if (selectedValue === 'new') {
                    showNewPanel = true;
                } else if (selectedValue) {
                    selectedTodoId = selectedValue;
                }

                return NavActions.createTodoListContext(isStackNav, selectedTodoId, showNewPanel);
                case 'winners':
                        let selectedTodoId2: string | undefined;
        
                        const selectedValue2 = urlObj.searchParams.get('selected');
                        if (selectedValue2) {
                            selectedTodoId2 = selectedValue2;
                        }
        
                        return NavActions.createTodoListContext(isStackNav, undefined, false,false,selectedTodoId2);
                
                case '':
                            return NavActions.createTodoListContext(isStackNav, selectedTodoId, false,true);
                 case 'raffles':
                                return NavActions.createTodoListContext(isStackNav, undefined, false,false,undefined,true);
                 case 'project':
                     return NavActions.createTodoListContext(isStackNav, undefined, false,false,undefined,false,true);
                case 'lottery':
                     return NavActions.createTodoListContext(isStackNav, undefined, false,false,undefined,false,false,true);
                 case 'roadmap':
                        return NavActions.createTodoListContext(isStackNav, undefined, false,false,undefined,false,false,false,true);
               case 'cic':
                        return NavActions.createTodoListContext(isStackNav, undefined, false,false,undefined,false,false,false,false,true);
                case 'faq':
                            return NavActions.createTodoListContext(isStackNav, undefined, false,false,undefined,false,false,false,false,false,true);
                                               
                    default:

                      
                return undefined;
        }
    }
}
