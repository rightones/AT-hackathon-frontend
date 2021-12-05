import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        line-height: 1.6;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    .root {
        
        
    }
    
    .wrapper {
        padding:40px 20px;
        max-width: ${({ theme }) => theme.size.maxWidth};        margin: 0 auto;

    }
    

    h1{
        font-size: 2rem;
        font-weight: bold;line-height: 1.6;
    }

    h2{
        font-size: 1.75rem;
        font-weight: bold;line-height: 1.6;
    }

    h3{
        font-size: 1.5rem;
        font-weight: bold;line-height: 1.6;
    }

    h4{
        font-size: 1.25rem;
        font-weight: bold;line-height: 1.6;
    }
    h5{
        font-size: 1.125rem;
        font-weight: 500;line-height: 1.6;
    }
    p{
        font-size: 1rem;
        line-height: 1.6;
        color: #555;
        white-space: pre-wrap;
    }

`;

export default GlobalStyle;
