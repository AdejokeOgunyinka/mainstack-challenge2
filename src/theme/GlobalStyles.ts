import { css } from '@emotion/react';

export const GlobalStyles = css`
  .phone-input-container {
    height: 43px;
    width: 100% !important;
  }
  .phone-input-field {
    height: 100% !important;
    width: 100% !important;
    border: 2px solid #e5e8f0;
  }

  .phone-input-button {
    background-color: transparent !important;
  }

  .phone-input-search input {
    border: none !important;
  }

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none; 
  }

  .no-scrollbar::-webkit-scrollbar {
    width: 0px;
  }
  .no-scrollbar::-webkit-scrollbar-thumb {
    display: none;
  }
`;