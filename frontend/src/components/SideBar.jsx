import React from 'react'

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import BusinessIcon from '@mui/icons-material/Business';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import SportsSoccerRoundedIcon from '@mui/icons-material/SportsSoccerRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import { Link } from 'react-router-dom';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

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
                            Admin
                        </p>
                    </div>
                    <MenuItem
                        component={<Link to='/admin/dashboard' />}
                        icon={<SpaceDashboardIcon />}>
                        Dashboard
                    </MenuItem>
                    <SubMenu

                        icon={<BusinessIcon />} label="Institution">
                        <MenuItem component={<Link to="/admin/responses/outstanding-institution" />}>
                            Responses
                        </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<ScienceRoundedIcon />} label="Research">
                        <MenuItem
                        component={<Link to="/admin/responses/research" />}
                        >
                            Responses
                        </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<SportsSoccerRoundedIcon />} label='Sports'>
                        <MenuItem
                        component={<Link to="/admin/responses/sports" />}
                        >
                            Responses
                        </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BookRoundedIcon />} label='Teaching'>
                        <MenuItem
                        component={<Link to="/admin/responses/teaching" />}
                        >
                            Responses
                        </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<SupervisorAccountRoundedIcon />} label='Non-Teaching'>
                        <MenuItem
                        component={<Link to="/admin/responses/non-teaching" />}
                        >
                            Responses
                        </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<ChatRoundedIcon />} label='Feedbacks'>
                        <SubMenu label='Teaching'>
                            <MenuItem
                                component={<Link to='/admin/responses/feedback-01' />}
                            >
                                Students
                            </MenuItem>
                            <MenuItem
                                component={<Link to='/admin/responses/feedback-02' />}
                            >
                                Peers
                            </MenuItem>
                        </SubMenu>
                        <SubMenu label='Non Teaching'>
                            <MenuItem
                            component={<Link to='/admin/responses/feedback-03' />}
                            >
                                Students
                            </MenuItem>
                            <MenuItem
                                component={<Link to='/admin/responses/feedback-04' />}
                            >
                                Peers
                            </MenuItem>
                        </SubMenu>
                    </SubMenu>
                    <MenuItem icon={<GroupAddIcon />} component={<Link to='/admin/manage-users' />}>
                        Manage Users
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SideBar
