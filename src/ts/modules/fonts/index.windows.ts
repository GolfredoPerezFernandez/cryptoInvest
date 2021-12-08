/**
* index.windows.ts
* Copyright: Microsoft 2018
*
* Windows implementation of "fonts" module.
*/

import { FontBase } from './Fonts';

class Fonts implements FontBase {
    monospace = 'Courier New';

    displayLight = 'Gilroy Light';
    displayRegular = 'Gilroy Regular';
    displaySemibold = 'Gilroy Semibold';
    displayBold = 'Gilroy Bold';
}

export default new Fonts();
