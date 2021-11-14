/**
* index.web.ts
* Copyright: Microsoft 2018
*
* Web implementation of "images" module.
*/

import AppConfig from '../../app/AppConfig';

import { ImageSourceBase } from './Images';

class ImageSource implements ImageSourceBase {
    todoLogo = AppConfig.getImagePath('todo-logo.png');
    todoSmall = AppConfig.getImagePath('todo-small.png');
    front = AppConfig.getImagePath('front.png');
    background = AppConfig.getImagePath('background.png');
    item1 = AppConfig.getImagePath('item1.png');
    item2 = AppConfig.getImagePath('item2.png');
    road = AppConfig.getImagePath('road.png');
    caru2 = AppConfig.getImagePath('caru2.png');
    caru3 = AppConfig.getImagePath('caru3.png');
    metamask = AppConfig.getImagePath('metamask.png');
    item3 = AppConfig.getImagePath('item3.png');
    item4 = AppConfig.getImagePath('item4.png');
    item5 = AppConfig.getImagePath('item5.png');
    item6 = AppConfig.getImagePath('item6.png');
    item7 = AppConfig.getImagePath('item7.png');
    item8 = AppConfig.getImagePath('item8.png');
    screen = AppConfig.getImagePath('screen.png');
    logo = AppConfig.getImagePath('logo.png');
    logo2 = AppConfig.getImagePath('logo2.png');
    tier1 = AppConfig.getImagePath('tier1.png');
    tier2 = AppConfig.getImagePath('tier2.png');
    tier3 = AppConfig.getImagePath('tier3.png');
}
export default new ImageSource();
