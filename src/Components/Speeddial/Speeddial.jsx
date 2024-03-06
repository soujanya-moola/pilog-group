import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, SpeedDial } from '@mui/material';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import skype from '../Assets/Social Media-Icons/Social Media-Icons-05.png'
import { Skype } from '../SocialIcons/Skype';
import { WhatsApp } from '../SocialIcons/WhatsApp';
import { MailIcon } from '../SocialIcons/MailIcon';
import { CallingIcon } from '../SocialIcons/CallIcon';

export const Speeddial = () => {
    const actions = [
        { icon: <Skype/>, name: 'Skype' },
        { icon: <WhatsApp/>, name: 'WhatsApp' },
        { icon: <MailIcon/>, name: 'Mail to' },
        { icon: <CallingIcon/>, name: 'Call to' },
      ];
  return (
    <div>
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
    </div>
  )
}
