import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';

const ProSpan = styled('span')({
    display: 'inline-block',
    height: '1em',
    width: '1em',
    verticalAlign: 'middle',
    marginLeft: '0.3em',
    marginBottom: '0.08em',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
});

function Label({ componentName, valueType, isProOnly }) {
    const CurdPost = () => {
        (
            <span>
                <strong>{componentName}</strong> for {valueType} editing
            </span>
        );
        if (isProOnly) {
            return (
                <Stack direction="row" spacing={0.5} component="span">
                    <Tooltip title="Included on Pro package">
                        <a
                            href="https://mui.com/x/introduction/licensing/#pro-plan"
                            aria-label="Included on Pro package"
                        >
                            <ProSpan />
                        </a>
                    </Tooltip>
                    {content}
                </Stack>
            );
        }
        return content;
    }
}

export default CurdPost

