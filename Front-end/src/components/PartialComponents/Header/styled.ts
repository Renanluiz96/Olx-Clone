import styled from "styled-components";

export const HeaderArea = styled.div`
    background-color: #FFF;
    height: 60px;
    border-bottom: 1px solid #ccc;

    .container {
        max-width: 650px;
        margin: auto;
        display: flex;
    }

    a {
        text-decoration: none;
    }

    .logo {
        flex: 1;
        display: flex;
        align-items: center;
        height: 60px;
        
        .logo-1, .logo-2, .logo-3 {
            font-size: 22px;
            font-weight: bold;
        }
        .logo-1 { color: #FF0000 }
        .logo-2 { color: #00ff00 }
        .logo-3 { color: #0000ff }
    }

    nav {
        padding: 10px 0;

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        ul {
            display: flex;
            align-items: center;
            height: 40px;
        }
        li {
            margin: 0 10px;

            a {
                color: black;
                font-size: 14px;

                &:hover {
                    color: #777;
                }
                //Quando achar dentro dos links um link com a classe button , aplicar somente no link com a classe
                &.button {
                    background-color: #FF7100;
                    border-radius: 4px;
                    color: #FFF;
                    padding: 5px 10px;
                }
                &.button:hover {
                    background-color: #e57700 ;
                }
            }
        }
    }
`;