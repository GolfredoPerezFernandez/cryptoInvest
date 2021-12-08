/**
* index.native.ts
* Copyright: Microsoft 2018
*
* Native implementation of "fonts" module.
*/

import { FontBase } from './Fonts';

class Fonts implements FontBase {
    monospace = 'System';

    displayLight = 'Gilroy Light';
    displayRegular = 'Gilroy Regular';
    displaySemibold = 'Gilroy Semibold';
    displayBold = 'Gilroy Bold';
}

export default new Fonts();
