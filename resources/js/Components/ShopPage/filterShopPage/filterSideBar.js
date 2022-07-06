//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
//import icons from react icons
import {
    FiLogOut,
    FiStar,
    FiArrowLeftCircle,
    FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { MdOutlineCategory } from "react-icons/md";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import CategoryCheckboxs from "./CheckBoxComp/CategoryCheckBox";
import AuthorCheckboxs from "./CheckBoxComp/AuthorCheckBox";
import RatingStarCheckboxs from "./CheckBoxComp/RatingStarCheckBox";

const ConTentFiler = (props) => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? "Filter" : "Filter"}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem
                                active={true}
                                icon={<MdOutlineCategory />}
                            >
                                <span className = "fs-5 fw-bold">Category</span >
                                <CategoryCheckboxs onChangeCategory = {props.onChangeCategory}/>
                            </MenuItem>
                            <MenuItem icon={<RiPencilLine />}>
                                <span className = "fs-5 fw-bold">Author</span >
                                <AuthorCheckboxs />
                            </MenuItem>
                            <MenuItem icon={<FiStar />}>
                                <span className = "fs-5 fw-bold">RatingStar</span >
                                <RatingStarCheckboxs />
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default ConTentFiler;
