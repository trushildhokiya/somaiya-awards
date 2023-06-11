import React from 'react'

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import SportsSoccerRoundedIcon from '@mui/icons-material/SportsSoccerRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import BusinessIcon from '@mui/icons-material/Business';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';

const SideBar = () => {
    return (
        <div className='flex h-screen text-white font-Poppins'>
            <Sidebar backgroundColor='rgb(185,28,28)'>
                <Menu
                    menuItemStyles={{
                        button: {
                            backgroundColor: 'rgb(185,28,28)',
                            '&:hover': {
                                backgroundColor: '#880808',
                                color: '#fffff7'
                            },
                        },
                    }}
                >
                    <div className='p-4 text-2xl text-center mb-[1rem] font-Roboto '>
                        <p>
                            Head Of Institution
                        </p>
                    </div>
                    
                    <MenuItem
                    icon={<AssignmentRoundedIcon />}
                    >
                      Forms
                    </MenuItem>
                    <SubMenu
                    open={true}
                    label="Analysis"
                    icon={<AssessmentRoundedIcon />}
                    >
                      <MenuItem icon={<BusinessIcon />}>
                        Institution Form
                      </MenuItem>
                      <MenuItem icon={<ScienceRoundedIcon />}>
                        Research Form
                      </MenuItem>
                      <MenuItem icon={<SportsSoccerRoundedIcon />}>
                        Sports Form
                      </MenuItem>
                      <MenuItem icon={<BookRoundedIcon />}>
                        Teaching Form
                      </MenuItem>
                      <MenuItem icon={<SupervisorAccountRoundedIcon />}>
                        Non-Teaching Form
                      </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SideBar
