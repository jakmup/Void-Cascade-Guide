import { h } from 'vue'
import type { Theme } from 'vitepress';
import  DefaultTheme  from 'vitepress/theme';
import './style.css'
import {  NolebaseHighlightTargetedHeading,  } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'



export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
          'layout-top': () => [
            h(NolebaseHighlightTargetedHeading),
          ],
        });
      },
} satisfies Theme