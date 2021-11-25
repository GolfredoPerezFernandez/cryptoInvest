/**
* index.native.ts
* Copyright: Microsoft 2018
*
* Native implementation of "images" module.
*/

import { ImageSourceBase } from './Images';

// The React Native bundler handles resource paths at build time, so they need
// to be specified as full string literals (as opposed to being constructed
// programmatically in a helper method).

// We use accessors and "require" calls to defer loading of these images into
// memory until they are actually used. If we were to require them upfront,
// app launch times would increase substantially.
class ImageSource implements ImageSourceBase {
    get todoLogo() { return require('../../../images/todo-logo.png'); }
    get todoSmall() { return require('../../../images/todoSmall.png'); }
    get background() { return require('../../../images/background.png'); }
    get item1() { return require('../../../images/item1.png'); }
    get item2() { return require('../../../images/item2.png'); }
    get road() { return require('../../../images/road.png'); }
    get front() { return require('../../../images/front.png'); }
    get caru2() { return require('../../../images/caru2.png'); }
    get caru3() { return require('../../../images/caru3.png'); }
    get metamask() { return require('../../../images/metamask.png'); }
    get item3() { return require('../../../images/item3.png'); }
    get item4() { return require('../../../images/item4.png'); }
    get item5() { return require('../../../images/item5.png'); }
    get item6() { return require('../../../images/item6.png'); }
    get item7() { return require('../../../images/item7.png'); }
    get item8() { return require('../../../images/item8.png'); }
    get tier1() { return require('../../../images/tier1.png'); }
    get tier2() { return require('../../../images/tier2.png'); }
    get tier3() { return require('../../../images/tier3.png'); }
    get screen() { return require('../../../images/screen.png'); }
    get logo() { return require('../../../images/logo.png'); }
    get logo2() { return require('../../../images/logo2.png'); }
    get stripe() { return require('../../../images/stripe.png'); }
    get moralis() { return require('../../../images/moralis.png'); }
    get twitter() { return require('../../../images/twitter.png'); }
}

export default new ImageSource();
