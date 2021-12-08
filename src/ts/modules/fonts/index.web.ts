/**
* index.web.ts
* Copyright: Microsoft 2018
*
* Web implementation of "fonts" module.
*/

import { FontBase } from './Fonts';

class Fonts implements FontBase {
    monospace = 'monospace';

    displayLight = '"Gilroy Light", sans-serif';
    displayRegular = '"Gilroy Regular", sans-serif';
    displaySemibold = '"Gilroy Semibold",sans-serif';
    displayBold = '"Gilroy Bold"sans-serif';
}

export default new Fonts();
