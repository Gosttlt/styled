import { useState } from 'react';
import styled from 'styled-components';
import { Flex } from './Flex'
import { Line } from './Line';

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
resize: none;
font-size: 24px;
&:focus {
    outline: none;
}
@media
`

export const Console = ({ color, ...props }) => {
    const [lines, setLines] = useState(['C/users/ULBI_TV>'])

    // const onKyeProps = e => {
    //     if (e.charCode === 13) {
    //         setLines([...lines, 'C/users/ULBI_TV>'])
    //     }
    // }

    return (
        <Flex>
            <Flex direction="column" margin="0 10px">
                {lines.map(line => <Line >{line}</Line>)}
            </Flex>
            <StyledConsole onKeyPress={onKyeProps} color={color} {...props} />

        </Flex>
    )
}