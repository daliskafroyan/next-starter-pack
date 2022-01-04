import tw, { css } from 'twin.macro';

const stylesBase = css`
    body {
        ${tw`transition-all duration-200`}
    }

    /* #region  /**=========== Typography =========== */
    h1 {
        ${tw`font-primary text-2xl font-bold md:text-4xl`}
    }

    h2 {
        ${tw`font-primary text-xl font-bold md:text-3xl`}
    }

    h3 {
        ${tw`font-primary text-lg font-bold md:text-2xl`}
    }

    h4 {
        ${tw`font-primary text-base font-bold md:text-lg`}
    }

    body {
        ${tw`font-primary text-sm md:text-base`}
    }
    /* #endregion  /**======== Typography =========== */

    .bg-dark a.custom-link {
        ${tw`border-gray-200 hover:border-gray-200/0`}
    }
`;

export default stylesBase;
