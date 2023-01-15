import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Button } from './index';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    children: 'テスト',
  },
};
