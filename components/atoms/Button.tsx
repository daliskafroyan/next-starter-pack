import tw from 'twin.macro';
// import { css } from '@emotion/css'
import styled from '@emotion/styled';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    isBlock?: boolean;
}

const Button = styled.button(({ variant, isBlock }: ButtonProps) => [
    tw`font-semibold px-8 py-2 rounded`,

    // variant
    variant === 'primary' &&
        tw`bg-blue-600 text-white focus:outline-none focus:ring focus:ring-blue-500`,
    variant === 'secondary' && [
        tw`border-2 border-blue-600 text-blue-600 focus:outline-none focus:ring focus:ring-blue-200`,
    ],

    // ablock conditionals
    isBlock && tw`w-full`,

    //   css`
    //     color: ${theme`colors.white`};
    //   `,
]);

export default Button;
