// CARD

export const CARD_TITLE = 'Card title';

export const CARD_SUB_TITLE = 'Card subtitle';

export const CARD_BODY_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const CARD_FOOTER = 'Card footer';

export const COVER_PLACEMENT_TOP = 'top';

export const COVER_PLACEMENT_BOTTOM = 'bottom';

export const LOADING_DURATION = 1500;

export const NUMBER_OF_CARDS = 4;

// MODAL

export const MODAL_TITLE = 'Modal title';

export const MODAL_BODY_DESCRIPTION = 'Check out this awesome modal!';

export const MODAL_BUTTON = 'Close me!';

export const MODAL_SIZE_SMALL = 'small';

export const MODAL_SIZE_MEDIUM = 'medium';

export const MODAL_SIZE_LARGE = 'large';

// BOOKING

export const BOOKING_TITLE = 'Book your Kasa now';

export const BOOKING_DESCRIPTION =
  'Search for stylishly-designed, professionally-managed apartments and hotel rooms at sensible prices.';

export const BOOKING_LINK = 'Back to the home page';

const CARD_MISC = {
  title: CARD_TITLE,
  subTitle: CARD_SUB_TITLE,
  body: CARD_BODY_DESCRIPTION,
  footer: CARD_FOOTER
};

// CARD SETTINGS

export const CARD_SETTINGS = [
  {
    id: 0,
    isAlert: true,
    isNavigation: false,
    isCoverVisible: true,
    isHeaderVisible: true,
    isFooterVisible: true,
    coverPlacement: 'bottom',
    size: 'small',
    ...CARD_MISC
  },
  {
    id: 1,
    isAlert: false,
    isNavigation: true,
    isCoverVisible: true,
    isHeaderVisible: true,
    isFooterVisible: false,
    coverPlacement: 'top',
    size: 'small',
    ...CARD_MISC
  },
  {
    id: 3,
    isAlert: false,
    isNavigation: false,
    isCoverVisible: false,
    isHeaderVisible: true,
    isFooterVisible: true,
    coverPlacement: 'bottom',
    size: 'small',
    ...CARD_MISC
  },
  {
    id: 4,
    isAlert: false,
    isNavigation: false,
    isCoverVisible: false,
    isHeaderVisible: false,
    isFooterVisible: false,
    coverPlacement: 'bottom',
    size: 'small',
    ...CARD_MISC
  }
];
