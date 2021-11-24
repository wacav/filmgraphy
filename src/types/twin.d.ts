/// <reference types="@emotion/react/types/css-prop" />
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { css as cssImport } from '@emotion/react';
import styledImport from '@emotion/styled';
import 'twin.macro';

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}
