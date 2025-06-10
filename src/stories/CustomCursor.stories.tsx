import CustomCursor from '../components/cursor/CustomCursor';

// TODO: handle styling
export const Standard = () => (
    <div style={{ height: '80vh', background: '#111'}}>
        <p style={{ color: 'white', textAlign: 'center', paddingTop: '40vh', fontSize: '25px'}}>
            Move your mouse around to see the custom cursor.
        </p>
        <CustomCursor />
    </div>
);

import type { Meta } from '@storybook/react-vite';

const meta = {
  title: 'Cursor/Custom Cursor',
  component: CustomCursor,
} satisfies Meta<typeof CustomCursor>;

export default meta;

